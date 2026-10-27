import { useEffect, useRef } from 'react'

/** Share the close boundary between Escape, backdrop, X, and explicit close actions. */
export function useCloseGuard(
  open: boolean,
  onOpenChange: (open: boolean) => void,
  onBeforeClose?: () => boolean | Promise<boolean>,
) {
  const pending = useRef(false)
  const mounted = useRef(true)
  const latest = useRef({ open, onOpenChange, onBeforeClose })
  latest.current = { open, onOpenChange, onBeforeClose }
  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])
  return (next: boolean) => {
    if (next) {
      latest.current.onOpenChange(true)
      return
    }
    if (!latest.current.open || pending.current) return
    const guard = latest.current.onBeforeClose
    if (!guard) {
      latest.current.onOpenChange(false)
      return
    }
    pending.current = true
    void Promise.resolve()
      .then(guard)
      .then((allowed) => {
        if (allowed && mounted.current && latest.current.open) latest.current.onOpenChange(false)
      })
      .catch((error) => console.error('Aria UI close guard failed:', error))
      .finally(() => {
        pending.current = false
      })
  }
}
