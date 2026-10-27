import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import {
  executeApi,
  isApiCancellation,
  normalizeApiErrorAsync,
  type ApiError,
  type ApiErrorOptions,
} from '../../lib/api.error'
import { createSessionScope, type SessionScope } from '../../lib/session'
import { ErrorState } from '../../ui/error.state/error.state'
import { Spinner } from '../../ui/loading.overlay/loading.overlay'
import { Text } from '../../ui/text/text'
import { useI18n } from '../../i18n/use.i18n'

export interface AuthSession<TUser> {
  /** Stable account/workspace identity. Change it when the data scope changes. */
  key: string
  user: TUser
  workspaceId?: string
  permissions?: readonly string[]
}
export interface AuthAdapter<TUser, TCredentials> {
  load: (signal: AbortSignal) => Promise<AuthSession<TUser> | null>
  signIn?: (credentials: TCredentials, signal: AbortSignal) => Promise<AuthSession<TUser>>
  signOut?: (signal: AbortSignal) => Promise<void>
  refresh?: (signal: AbortSignal) => Promise<AuthSession<TUser> | null>
}
export interface AuthState<TUser> {
  status: 'loading' | 'authenticated' | 'anonymous' | 'error'
  session: AuthSession<TUser> | null
  error?: ApiError
}
export interface AuthContextValue<TUser, TCredentials> extends AuthState<TUser> {
  reload: () => Promise<AuthSession<TUser> | null>
  signIn: (credentials: TCredentials) => Promise<AuthSession<TUser> | null>
  signOut: () => Promise<void>
  refresh: () => Promise<AuthSession<TUser> | null>
  hasPermission: (permission: string) => boolean
}
export interface AuthProviderProps<TUser, TCredentials> {
  adapter: AuthAdapter<TUser, TCredentials>
  sessionScope?: SessionScope
  errorOptions?: ApiErrorOptions
  /** Clear account/workspace caches here, before exposing the new session. */
  onSessionChange?: (
    next: AuthSession<TUser> | null,
    previous: AuthSession<TUser> | null,
  ) => void | Promise<void>
  children: ReactNode
}

/** Create once in the app's auth module. Endpoint and token policy belong to the adapter. */
export function createAuthIntegration<TUser, TCredentials = void>() {
  const Context = createContext<AuthContextValue<TUser, TCredentials> | null>(null)
  function AuthProvider({
    adapter,
    sessionScope,
    errorOptions,
    onSessionChange,
    children,
  }: AuthProviderProps<TUser, TCredentials>) {
    const ownScope = useRef<SessionScope | null>(null)
    if (!ownScope.current) ownScope.current = createSessionScope()
    const scope = sessionScope ?? ownScope.current
    const [state, setState] = useState<AuthState<TUser>>({ status: 'loading', session: null })
    const stateRef = useRef(state)
    stateRef.current = state
    const operation = useRef<AbortController | null>(null)
    const latest = useRef({ adapter, errorOptions, onSessionChange })
    latest.current = { adapter, errorOptions, onSessionChange }
    const begin = useCallback(() => {
      operation.current?.abort()
      const controller = new AbortController()
      operation.current = controller
      return controller
    }, [])
    const commit = useCallback(
      async (next: AuthSession<TUser> | null, controller: AbortController, force = false) => {
        if (controller.signal.aborted || operation.current !== controller)
          throw new DOMException('Request cancelled', 'AbortError')
        const previous = stateRef.current.session
        if (
          force ||
          next?.key !== previous?.key ||
          (next?.key ?? null) !== scope.getSnapshot().key
        ) {
          // Invalidate in-flight effects immediately; cleanup may itself advance the same scope.
          scope.advance(next?.key ?? null)
          await latest.current.onSessionChange?.(next, previous)
        }
        if (controller.signal.aborted || operation.current !== controller)
          throw new DOMException('Request cancelled', 'AbortError')
        const nextState: AuthState<TUser> = {
          session: next,
          status: next ? 'authenticated' : 'anonymous',
        }
        stateRef.current = nextState
        setState(nextState)
        return next
      },
      [scope],
    )
    const request = useCallback(
      async (load: (signal: AbortSignal) => Promise<AuthSession<TUser> | null>, force = false) => {
        const controller = begin()
        setState((previous) => ({ ...previous, status: 'loading', error: undefined }))
        try {
          const next = await executeApi(() => load(controller.signal), latest.current.errorOptions)
          return await commit(next, controller, force)
        } catch (reason) {
          const error = await normalizeApiErrorAsync(reason, latest.current.errorOptions)
          if (
            !controller.signal.aborted &&
            operation.current === controller &&
            !isApiCancellation(error)
          ) {
            // An authentication read failure must not leave a previously authenticated session active.
            try {
              await commit(null, controller)
            } catch {
              /* The original authentication error is retained. */
            }
            setState({ status: 'error', session: null, error })
          }
          throw error
        }
      },
      [begin, commit],
    )
    const reload = useCallback(
      () => request((signal) => latest.current.adapter.load(signal)),
      [request],
    )
    const refresh = useCallback(
      () =>
        request((signal) =>
          (latest.current.adapter.refresh ?? latest.current.adapter.load)(signal),
        ),
      [request],
    )
    const signIn = useCallback(
      (credentials: TCredentials) =>
        request((signal) => {
          const login = latest.current.adapter.signIn
          if (!login) throw new Error('The auth adapter does not implement signIn.')
          return login(credentials, signal)
        }, true),
      [request],
    )
    const signOut = useCallback(async () => {
      const controller = begin()
      // Remove local identity/cache before awaiting the backend sign-out.
      await commit(null, controller, true)
      await executeApi(async () => {
        await latest.current.adapter.signOut?.(controller.signal)
      }, latest.current.errorOptions)
    }, [begin, commit])
    useEffect(() => {
      void reload().catch(() => {
        /* AuthState owns the inline failure. */
      })
      return () => {
        operation.current?.abort()
      }
    }, [adapter, reload])
    const value = useMemo<AuthContextValue<TUser, TCredentials>>(
      () => ({
        ...state,
        reload,
        refresh,
        signIn,
        signOut,
        hasPermission: (permission) => state.session?.permissions?.includes(permission) ?? false,
      }),
      [state, reload, refresh, signIn, signOut],
    )
    return <Context.Provider value={value}>{children}</Context.Provider>
  }
  function useAuth() {
    const context = useContext(Context)
    if (!context) throw new Error('useAuth must be used inside this integration’s AuthProvider.')
    return context
  }
  function AuthGate({
    children,
    loading,
    anonymous = null,
    forbidden = null,
    permission,
  }: {
    children: ReactNode | ((session: AuthSession<TUser>) => ReactNode)
    loading?: ReactNode
    anonymous?: ReactNode
    forbidden?: ReactNode
    permission?: string
  }) {
    const auth = useAuth()
    const { t } = useI18n()
    if (auth.status === 'loading')
      return (
        loading ?? (
          <div role="status">
            <Spinner />
            <Text>{t('Loading…')}</Text>
          </div>
        )
      )
    if (auth.status === 'error') return <ErrorState error={auth.error} onRetry={auth.reload} />
    if (!auth.session) return anonymous
    if (permission && !auth.hasPermission(permission)) return forbidden
    return typeof children === 'function' ? children(auth.session) : children
  }
  return { AuthProvider, useAuth, AuthGate }
}
