import { useEffect, useRef } from 'react'
import { useMediaQuery } from '../../hooks/use.media.query'

export function useSidebarFocus(open: boolean, onClose: () => void) {
  const isMobile = useMediaQuery('(max-width: 850px)')
  const closeButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!isMobile || !open) return
    const previous = document.activeElement as HTMLElement | null
    closeButton.current?.focus()
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('keydown', escape)
      previous?.focus()
    }
  }, [isMobile, open, onClose])
  return { isMobile, closeButton }
}
