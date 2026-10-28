import { useCallback, useEffect, useRef, useState } from 'react'

/** Keep the payload/component mounted while Radix plays the exit animation. */
export function useDrawerPresence<T>(current: T | null | undefined) {
  const [retained, setRetained] = useState<T | null>(current ?? null)
  const latest = useRef(current)
  latest.current = current
  useEffect(() => {
    if (current != null) setRetained(current)
  }, [current])
  const onAfterClose = useCallback(() => {
    if (latest.current == null) setRetained(null)
  }, [])
  return { value: current ?? retained, open: current != null, onAfterClose }
}
