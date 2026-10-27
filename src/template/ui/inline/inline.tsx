import type { ElementType } from 'react'
import type { LayoutProps } from '../layout.shared/layout.types'
import { justifyValue, renderBox, responsiveStyle, spaceValue } from '../layout.shared/layout.utils'
import type { StackOptions } from '../stack/stack'

export type InlineProps<E extends ElementType = 'div'> = LayoutProps<E, StackOptions>

/** A horizontal stack with centered items and wrapping enabled. */
export function Inline<E extends ElementType = 'div'>({
  direction,
  gap,
  align,
  justify,
  wrap,
  ...props
}: InlineProps<E>) {
  return renderBox(props, 'aria-stack aria-inline', {
    ...responsiveStyle('direction', direction),
    ...responsiveStyle('gap', gap, spaceValue),
    ...responsiveStyle('align', align),
    ...responsiveStyle('justify', justify, justifyValue),
    ...responsiveStyle('wrap', wrap, (value) =>
      value === true ? 'wrap' : value === false ? 'nowrap' : value,
    ),
  })
}
