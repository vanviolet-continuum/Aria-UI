import { useI18n } from '../../i18n/use.i18n'
import type { ReactNode } from 'react'
import { useScrollEdges } from './use.scroll.edges'

export function TableScrollArea({
  label,
  layoutKey,
  leftWidth,
  rightWidth,
  children,
}: {
  label: string
  layoutKey?: string
  leftWidth: number
  rightWidth: number
  children: ReactNode
}) {
  const { t: tr, text: localize } = useI18n()

  const { viewport, scroller } = useScrollEdges(layoutKey)
  return (
    <div ref={viewport} className="ui-table-viewport">
      <div
        ref={scroller}
        className="table-scroll ui-table-scroll-area"
        role="region"
        aria-label={tr('{{value0}} scroll area', { value0: localize(label) })}
        tabIndex={0}
      >
        {children}
      </div>
      {leftWidth > 0 && (
        <span
          aria-hidden="true"
          className="table-pin-shade table-pin-shade--left"
          style={{ left: `var(--table-pinned-left-width, ${leftWidth}px)` }}
        />
      )}
      {rightWidth > 0 && (
        <span
          aria-hidden="true"
          className="table-pin-shade table-pin-shade--right"
          style={{ right: `var(--table-pinned-right-width, ${rightWidth}px)` }}
        />
      )}
    </div>
  )
}
