import type { ElementType } from 'react'
import type {
  BoxOptions,
  LayoutAlign,
  LayoutJustify,
  LayoutProps,
  LayoutSpace,
  Responsive,
} from '../layout.shared/layout.types'
import { justifyValue, renderBox, responsiveStyle, spaceValue } from '../layout.shared/layout.utils'

export interface StackOptions extends BoxOptions {
  direction?: Responsive<'row' | 'column' | 'row-reverse' | 'column-reverse'>
  gap?: Responsive<LayoutSpace>
  align?: Responsive<LayoutAlign>
  justify?: Responsive<LayoutJustify>
  wrap?: Responsive<boolean | 'wrap-reverse'>
}
export type StackProps<E extends ElementType = 'div'> = LayoutProps<E, StackOptions>

/** Vertical by default; responsive values are applied in CSS without viewport hooks. */
export function Stack<E extends ElementType = 'div'>({
  direction,
  gap,
  align,
  justify,
  wrap,
  ...props
}: StackProps<E>) {
  return renderBox(props, 'aria-stack', {
    ...responsiveStyle('direction', direction),
    ...responsiveStyle('gap', gap, spaceValue),
    ...responsiveStyle('align', align),
    ...responsiveStyle('justify', justify, justifyValue),
    ...responsiveStyle('wrap', wrap, (value) =>
      value === true ? 'wrap' : value === false ? 'nowrap' : value,
    ),
  })
}
