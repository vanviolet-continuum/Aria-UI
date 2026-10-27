import { useCallback, useMemo, useRef } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { mergeSearchState, type SearchCodec } from '../../lib/search.params'

export interface UrlUpdateOptions {
  replace?: boolean
  resetPage?: boolean
}

/** URL is committed state; Back/Forward and reload require no effect-based mirroring. */
export function useUrlState<T extends object>(codec: SearchCodec<T>) {
  const [params, setParams] = useSearchParams()
  const location = useLocation()
  const pending = useRef({ location: location.key, params: new URLSearchParams(params) })
  if (pending.current.location !== location.key)
    pending.current = { location: location.key, params: new URLSearchParams(params) }
  const state = useMemo(() => codec.parse(params), [codec, params])
  const setState = useCallback(
    (update: Partial<T> | ((current: T) => Partial<T>), options: UrlUpdateOptions = {}) => {
      const current = codec.parse(pending.current.params)
      const patch = typeof update === 'function' ? update(current) : update
      const next = { ...current, ...patch }
      const changed = Object.entries(patch).some(
        ([key, value]) =>
          JSON.stringify(value) !== JSON.stringify((current as Record<string, unknown>)[key]),
      )
      if (
        changed &&
        codec.keys.includes('page') &&
        (options.resetPage ?? !Object.hasOwn(patch, 'page'))
      )
        (next as Record<string, unknown>).page = 1
      const canonical = codec.parse(codec.serialize(next))
      const target = mergeSearchState(pending.current.params, codec, canonical)
      pending.current.params = target
      setParams(target, { replace: options.replace ?? true })
    },
    [codec, setParams],
  )
  const reset = useCallback(
    () => setState(codec.parse(new URLSearchParams()), { resetPage: false }),
    [codec, setState],
  )
  return { state, setState, reset, searchKey: codec.serialize(state).toString() }
}
