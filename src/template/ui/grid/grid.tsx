import type { CSSProperties, ElementType } from 'react'
import type {
  BoxOptions,
  LayoutAlign,
  LayoutProps,
  LayoutSpace,
  Responsive,
} from '../layout.shared/layout.types'
import { cssLength, renderBox, responsiveStyle, spaceValue } from '../layout.shared/layout.utils'

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export interface GridOptions extends BoxOptions {
  columns?: Responsive<GridColumns>
  gap?: Responsive<LayoutSpace>
  rowGap?: Responsive<LayoutSpace>
  columnGap?: Responsive<LayoutSpace>
  align?: Responsive<LayoutAlign>
  /** Auto-fit mode takes precedence over columns and adapts to the available container width. */
  minItemWidth?: CSSProperties['minWidth']
}
export type GridProps<E extends ElementType = 'div'> = LayoutProps<E, GridOptions>

export function Grid<E extends ElementType = 'div'>({
  columns,
  gap,
  rowGap,
  columnGap,
  align,
  minItemWidth,
  ...props
}: GridProps<E>) {
  return renderBox(props, `aria-grid${minItemWidth !== undefined ? ' aria-grid--auto' : ''}`, {
    ...responsiveStyle('columns', columns),
    ...responsiveStyle('gap', gap, spaceValue),
    ...responsiveStyle('row-gap', rowGap, spaceValue),
    ...responsiveStyle('column-gap', columnGap, spaceValue),
    ...responsiveStyle('align', align),
    '--grid-min-width': minItemWidth === undefined ? undefined : cssLength(minItemWidth),
  })
}
