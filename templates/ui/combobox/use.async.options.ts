import { useCallback, useEffect, useRef, useState } from 'react'
import type { ComboboxOption, OptionsLoader, OptionsPage } from './types'
import { normalizeApiErrorAsync, type ApiError } from '../../lib/api.error'

interface State extends OptionsPage {
  loading: boolean
  loadingMore: boolean
  error: ApiError | null
}
const empty: State = { options: [], loading: false, loadingMore: false, error: null }
export function mergeOptions(previous: ComboboxOption[], next: ComboboxOption[]) {
  return [...new Map([...previous, ...next].map((option) => [option.value, option])).values()]
}
export function useAsyncOptions(
  open: boolean,
  search: string,
  loader?: OptionsLoader,
  debounceMs = 300,
  cacheKey = 'default',
) {
  const [state, setState] = useState<State>(empty)
  const [retry, setRetry] = useState(0)
  const loaderRef = useRef(loader)
  const controller = useRef<AbortController | null>(null)
  const generation = useRef(0)
  const moreLock = useRef(false)
  const cache = useRef(new Map<string, { page: OptionsPage; expires: number }>())
  loaderRef.current = loader
  const key = `${cacheKey}:${search}`
  const remember = useCallback((key: string, page: OptionsPage) => {
    cache.current.set(key, { page, expires: Date.now() + 60_000 })
    if (cache.current.size > 20) cache.current.delete(cache.current.keys().next().value!)
  }, [])

  useEffect(() => {
    if (!open || !loaderRef.current) return
    controller.current?.abort()
    const request = new AbortController()
    controller.current = request
    const version = ++generation.current
    moreLock.current = false
    const cached = cache.current.get(key)
    if (cached && cached.expires > Date.now()) {
      setState({ ...cached.page, loading: false, loadingMore: false, error: null })
      return () => {
        generation.current++
        controller.current?.abort()
      }
    }
    setState({ ...empty, loading: true })
    const timer = setTimeout(
      async () => {
        try {
          const page = await loaderRef.current!({ search, signal: request.signal })
          if (request.signal.aborted || generation.current !== version) return
          remember(key, page)
          setState({ ...page, loading: false, loadingMore: false, error: null })
        } catch (error) {
          const failure = await normalizeApiErrorAsync(error)
          if (!request.signal.aborted && generation.current === version)
            setState({
              ...empty,
              error: failure,
            })
        }
      },
      search ? debounceMs : 0,
    )
    return () => {
      clearTimeout(timer)
      generation.current++
      controller.current?.abort()
    }
  }, [open, search, key, retry, debounceMs, remember])

  const loadMore = useCallback(async () => {
    if (!loaderRef.current || !state.nextCursor || state.loading || moreLock.current) return
    moreLock.current = true
    const version = generation.current
    const request = new AbortController()
    controller.current = request
    setState((previous) => ({ ...previous, loadingMore: true, error: null }))
    try {
      const page = await loaderRef.current({
        search,
        cursor: state.nextCursor,
        signal: request.signal,
      })
      if (request.signal.aborted || version !== generation.current) return
      const merged = { ...page, options: mergeOptions(state.options, page.options) }
      remember(key, merged)
      setState({ ...merged, loading: false, loadingMore: false, error: null })
    } catch (error) {
      const failure = await normalizeApiErrorAsync(error)
      if (!request.signal.aborted && version === generation.current)
        setState((previous) => ({
          ...previous,
          loadingMore: false,
          error: failure,
        }))
    } finally {
      if (version === generation.current) moreLock.current = false
    }
  }, [state.nextCursor, state.loading, state.options, search, key, remember])
  return {
    ...state,
    loadMore,
    retry: () => {
      cache.current.delete(key)
      setRetry((value) => value + 1)
    },
  }
}
