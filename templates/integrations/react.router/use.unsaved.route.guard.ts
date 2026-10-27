import { useEffect, useRef } from 'react'
import { useBlocker } from 'react-router-dom'
import {
  useUnsavedChangesGuard,
  type UnsavedChangesOptions,
} from '../../hooks/use.unsaved.changes.guard'

/** Requires a data router (createBrowserRouter/RouterProvider), as used by the starter. */
export function useUnsavedRouteGuard(when: boolean, options?: UnsavedChangesOptions) {
  const guard = useUnsavedChangesGuard(when, options)
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      when &&
      (currentLocation.pathname !== nextLocation.pathname ||
        currentLocation.search !== nextLocation.search ||
        currentLocation.hash !== nextLocation.hash),
  )
  const asking = useRef(false)
  const mounted = useRef(true)
  const latest = useRef(blocker)
  latest.current = blocker
  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])
  useEffect(() => {
    if (blocker.state !== 'blocked' || asking.current) return
    asking.current = true
    void guard
      .confirmDiscard()
      .then((allow) => {
        if (!mounted.current || latest.current.state !== 'blocked') return
        if (allow) latest.current.proceed()
        else latest.current.reset()
      })
      .finally(() => {
        asking.current = false
      })
  }, [blocker.state, guard.confirmDiscard])
  return guard
}
