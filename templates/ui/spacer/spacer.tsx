import type { ComponentPropsWithRef } from 'react'
import type { LayoutSpace, Responsive } from '../layout.shared/layout.types'
import { renderBox, responsiveStyle, spaceValue } from '../layout.shared/layout.utils'

export interface SpacerProps extends Omit<ComponentPropsWithRef<'span'>, 'children' | 'color'> {
  size?: Responsive<LayoutSpace>
  axis?: 'horizontal' | 'vertical'
  grow?: boolean
}

/** Use Stack gap for regular rhythm, and Spacer for intentional gaps or flexible space. */
export function Spacer({ size, axis = 'vertical', grow = false, ...props }: SpacerProps) {
  return renderBox(
    { ...props, as: 'span' },
    `aria-spacer aria-spacer--${axis}${grow ? ' aria-spacer--grow' : ''}`,
    responsiveStyle('spacer-size', size, spaceValue),
    { 'aria-hidden': true },
  )
}
