import { MutationCache, QueryClient, type QueryClientConfig } from '@tanstack/react-query'
import {
  normalizeApiError,
  normalizeApiErrorAsync,
  type ApiErrorOptions,
} from '../../lib/api.error'
import type { SessionSnapshot, SessionScope } from '../../lib/session'
import { showApiErrorToast } from '../../ui/toast/api.error.toast'
import { toast } from '../../ui/toast/toast'
import { mutationFeedback } from './query.meta'
import { queryRuntime, runMutationCallback } from './query.runtime'

export interface AriaQueryClientConfig extends Omit<QueryClientConfig, 'mutationCache'> {
  apiErrorOptions?: ApiErrorOptions
  translate?: (message: string) => string
  session?: SessionScope
  /** Logging/telemetry for UI callback errors, separate from API feedback. */
  onCallbackError?: (error: unknown) => void
}

export function createAriaQueryClient({
  apiErrorOptions,
  translate = (value) => value,
  session,
  onCallbackError,
  ...config
}: AriaQueryClientConfig = {}) {
  let client: QueryClient
  const scopes = new WeakMap<object, SessionSnapshot>()
  const writes = new WeakSet<object>()
  const mutationCache = new MutationCache({
    onMutate: (_variables, mutation) => {
      scopes.set(mutation, queryRuntime(client).session.getSnapshot())
    },
    onSuccess: async (_data, _variables, _context, mutation) => {
      writes.add(mutation)
      const runtime = queryRuntime(client)
      const snapshot = scopes.get(mutation)
      if (!snapshot || !runtime.session.isCurrent(snapshot)) return
      await runMutationCallback(runtime, () =>
        Promise.all(
          (mutationFeedback(mutation.meta).invalidates ?? []).map((queryKey) =>
            client.invalidateQueries({ queryKey }),
          ),
        ),
      )
    },
  })
  client = new QueryClient({
    ...config,
    mutationCache,
    defaultOptions: {
      ...config.defaultOptions,
      queries: {
        staleTime: 30_000,
        gcTime: 5 * 60_000,
        retry: (count, reason) => {
          const error = normalizeApiError(reason)
          return (
            count < 2 &&
            (error.source === 'network' || (error.status !== undefined && error.status >= 500))
          )
        },
        ...config.defaultOptions?.queries,
      },
      mutations: { retry: false, ...config.defaultOptions?.mutations },
    },
  })
  const runtime = queryRuntime(client)
  Object.assign(
    runtime,
    { apiErrorOptions },
    session ? { session } : {},
    onCallbackError ? { onCallbackError } : {},
  )
  // Terminal state is published after awaited lifecycle callbacks.
  mutationCache.subscribe((event) => {
    if (event.type !== 'updated' || !['success', 'error'].includes(event.action.type)) return
    const mutation = event.mutation
    const snapshot = scopes.get(mutation)
    if (!snapshot || !runtime.session.isCurrent(snapshot)) return
    void runMutationCallback(runtime, async () => {
      const feedback = mutationFeedback(mutation.meta)
      if (event.action.type === 'success') {
        if (feedback.successMessage)
          toast.success(translate(feedback.successMessage), {
            description: feedback.successDescription
              ? translate(feedback.successDescription)
              : undefined,
          })
      } else if (writes.has(mutation)) {
        // A raw useMutation callback threw after the server write had succeeded.
        void runMutationCallback(runtime, () => {
          throw mutation.state.error
        })
      } else if (feedback.errorToast !== false) {
        const error = await normalizeApiErrorAsync(mutation.state.error, apiErrorOptions)
        if (!runtime.session.isCurrent(snapshot)) return
        if (error.source !== 'api') error.message = translate(error.message)
        showApiErrorToast(error)
      }
    })
  })
  return client
}
