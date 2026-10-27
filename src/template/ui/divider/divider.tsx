import type { ComponentPropsWithRef } from 'react'
import type { LayoutSpace } from '../layout.shared/layout.types'
import { renderBox, spaceValue } from '../layout.shared/layout.utils'

export interface DividerProps extends Omit<ComponentPropsWithRef<'div'>, 'children' | 'color'> {
  orientation?: 'horizontal' | 'vertical'
  spacing?: LayoutSpace
  inset?: LayoutSpace
  decorative?: boolean
}

export function Divider({
  orientation = 'horizontal',
  spacing = 'none',
  inset = 'none',
  decorative = false,
  ...props
}: DividerProps) {
  return renderBox(
    props,
    `aria-divider aria-divider--${orientation}`,
    {
      '--divider-spacing': spaceValue(spacing),
      '--divider-inset': spaceValue(inset),
    },
    {
      role: decorative ? undefined : 'separator',
      'aria-orientation': decorative ? undefined : orientation,
      'aria-hidden': decorative ? true : undefined,
    },
  )
}
