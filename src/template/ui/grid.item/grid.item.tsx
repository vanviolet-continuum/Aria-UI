import type { CSSProperties, ElementType } from 'react'
import type { BoxOptions, LayoutProps, Responsive } from '../layout.shared/layout.types'
import { renderBox, responsiveStyle } from '../layout.shared/layout.utils'
import type { GridColumns } from '../grid/grid'

export interface GridItemOptions extends BoxOptions {
  colSpan?: Responsive<GridColumns | 'full'>
  rowSpan?: Responsive<GridColumns>
  align?: CSSProperties['alignSelf']
  justify?: CSSProperties['justifySelf']
  order?: Responsive<number>
}
export type GridItemProps<E extends ElementType = 'div'> = LayoutProps<E, GridItemOptions>

export function GridItem<E extends ElementType = 'div'>({
  colSpan,
  rowSpan,
  align,
  justify,
  order,
  ...props
}: GridItemProps<E>) {
  return renderBox(props, 'aria-grid-item', {
    ...responsiveStyle('span', colSpan, (value) =>
      value === 'full' ? '1 / -1' : `span ${value} / span ${value}`,
    ),
    ...responsiveStyle('row-span', rowSpan, (value) => `span ${value} / span ${value}`),
    ...responsiveStyle('order', order),
    alignSelf: align,
    justifySelf: justify,
  })
}
