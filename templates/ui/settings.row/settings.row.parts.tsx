import type { ElementType } from 'react'
import type { BoxProps } from '../box/box'
import { renderBox } from '../layout.shared/layout.utils'

export function SettingsRowContent<E extends ElementType = 'div'>(props: BoxProps<E>) {
  return renderBox(props, 'aria-settings-row-content')
}
export function SettingsRowControl<E extends ElementType = 'div'>(props: BoxProps<E>) {
  return renderBox(props, 'aria-settings-row-control')
}
