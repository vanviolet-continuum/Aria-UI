import { useEffect, useId, useRef } from 'react'
import { toast } from '../toast/toast'

export type OutsideClose = 'double-click' | 'immediate' | 'disabled'
export function useDrawerDismiss(open: boolean, onClose: () => void, behavior: OutsideClose) {
  const armedAt = useRef(0)
  const toastId = useId()
  useEffect(() => {
    armedAt.current = 0
    if (!open) toast.dismiss(toastId)
    return () => {
      toast.dismiss(toastId)
    }
  }, [open, toastId])
  const reset = () => {
    armedAt.current = 0
    toast.dismiss(toastId)
  }
  const onPointerDownOutside = (event: CustomEvent<{ originalEvent: PointerEvent }>) => {
    event.preventDefault()
    const target = event.detail.originalEvent.target
    // A nested popover, confirmation, or toast is not a click on the backdrop.
    if (
      !(target instanceof Element) ||
      !target.closest('.drawer-overlay') ||
      behavior === 'disabled'
    )
      return
    const now = Date.now()
    if (behavior === 'immediate' || (armedAt.current && now - armedAt.current < 2000)) {
      toast.dismiss(toastId)
      armedAt.current = 0
      onClose()
      return
    }
    armedAt.current = now
    toast.info('Click outside once more to close', {
      id: toastId,
      description: 'Click again within 2 seconds, or use the close button.',
      duration: 2000,
    })
  }
  return { onPointerDownOutside, reset }
}
