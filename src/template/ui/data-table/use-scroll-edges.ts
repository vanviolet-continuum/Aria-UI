import { useLayoutEffect, useRef } from 'react'

export function scrollEdges(left: number, width: number, total: number) {
  return { left: left > 1, right: total - width - left > 1 }
}
/** Update two DOM attributes, at most once per frame; scrolling does not render table rows again. */
export function useScrollEdges() {
  const viewport = useRef<HTMLDivElement>(null)
  const scroller = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const outer = viewport.current
    const inner = scroller.current
    if (!outer || !inner) return
    let frame = 0
    const measure = () => {
      frame = 0
      const edges = scrollEdges(inner.scrollLeft, inner.clientWidth, inner.scrollWidth)
      outer.dataset.scrollLeft = String(edges.left)
      outer.dataset.scrollRight = String(edges.right)
      outer.style.setProperty(
        '--table-scrollbar-height',
        `${inner.offsetHeight - inner.clientHeight}px`,
      )
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    const resize = new ResizeObserver(schedule)
    resize.observe(inner)
    if (inner.firstElementChild) resize.observe(inner.firstElementChild)
    inner.addEventListener('scroll', schedule, { passive: true })
    measure()
    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      inner.removeEventListener('scroll', schedule)
    }
  }, [])
  return { viewport, scroller }
}
