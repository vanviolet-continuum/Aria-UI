import type { ElementType } from 'react'
import type { BoxOptions, LayoutProps } from '../layout.shared/layout.types'
import { renderBox } from '../layout.shared/layout.utils'

export type ContainerSize = 'full' | 'sm' | 'md' | 'lg' | 'xl'
export interface ContainerOptions extends BoxOptions {
  size?: ContainerSize
}
export type ContainerProps<E extends ElementType = 'div'> = LayoutProps<E, ContainerOptions>

/** Full width by default. A reading width is applied only when a size is requested. */
export function Container<E extends ElementType = 'div'>({
  size = 'full',
  ...props
}: ContainerProps<E>) {
  return renderBox(props, `aria-container aria-container--${size}`)
}
