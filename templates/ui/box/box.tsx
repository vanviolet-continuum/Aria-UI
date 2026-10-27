import type { ElementType } from 'react'
import type { BoxOptions, LayoutProps } from '../layout.shared/layout.types'
import { renderBox } from '../layout.shared/layout.utils'

export type BoxProps<E extends ElementType = 'div'> = LayoutProps<E, BoxOptions>

/** A semantic surface with spacing, colors and geometry from the theme. */
export function Box<E extends ElementType = 'div'>(props: BoxProps<E>) {
  return renderBox(props)
}
