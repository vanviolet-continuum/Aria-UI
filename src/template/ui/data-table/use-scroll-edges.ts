import { useLayoutEffect, useRef } from 'react'

export function scrollEdges(left: number, width: number, total: number) {
  return { left: left > 1, right: total - width - left > 1 }
}
/** Update two DOM attributes, at most once per frame; scrolling does not render table rows again. */
export function useScrollEdges(layoutKey?: string) {
  const viewport = useRef<HTMLDivElement>(null)
  const scroller = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const outer = viewport.current
    const inner = scroller.current
    if (!outer || !inner) return
    const headers = Array.from(inner.querySelectorAll<HTMLTableCellElement>('thead th'))
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
      // Sticky offsets follow rendered widths, including the flexible fill column.
      let left =
        headers
          .find((header) => header.classList.contains('table-selection-pinned'))
          ?.getBoundingClientRect().width ?? 0
      for (const header of headers) {
        if (header.dataset.pin !== 'left') continue
        outer.style.setProperty(`--table-pin-offset-${header.dataset.layoutIndex}`, `${left}px`)
        left += header.getBoundingClientRect().width
      }
      let right = 0
      for (const header of [...headers].reverse()) {
        if (header.dataset.pin !== 'right') continue
        outer.style.setProperty(`--table-pin-offset-${header.dataset.layoutIndex}`, `${right}px`)
        right += header.getBoundingClientRect().width
      }
      outer.style.setProperty('--table-pinned-left-width', `${left}px`)
      outer.style.setProperty('--table-pinned-right-width', `${right}px`)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    const resize = new ResizeObserver(schedule)
    resize.observe(inner)
    if (inner.firstElementChild) resize.observe(inner.firstElementChild)
    headers.forEach((header) => resize.observe(header))
    inner.addEventListener('scroll', schedule, { passive: true })
    measure()
    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      inner.removeEventListener('scroll', schedule)
    }
  }, [layoutKey])
  return { viewport, scroller }
}
