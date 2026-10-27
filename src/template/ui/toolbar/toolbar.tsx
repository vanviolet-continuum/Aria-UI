import type { AriaRole, ElementType } from 'react'
import clsx from 'clsx'
import type { LayoutProps } from '../layout.shared/layout.types'
import { justifyValue, renderBox, responsiveStyle, spaceValue } from '../layout.shared/layout.utils'
import type { StackOptions } from '../stack/stack'

export interface ToolbarOptions extends StackOptions {
  label?: string
  role?: AriaRole
}
export type ToolbarProps<E extends ElementType = 'div'> = LayoutProps<E, ToolbarOptions>
export type ToolbarGroupProps<E extends ElementType = 'div'> = LayoutProps<
  E,
  StackOptions & { grow?: boolean }
>

export function Toolbar<E extends ElementType = 'div'>({
  label,
  role,
  direction,
  gap,
  align,
  justify,
  wrap,
  ...props
}: ToolbarProps<E>) {
  return renderBox(
    props,
    'aria-toolbar',
    {
      ...responsiveStyle('direction', direction),
      ...responsiveStyle('gap', gap, spaceValue),
      ...responsiveStyle('align', align),
      ...responsiveStyle('justify', justify, justifyValue),
      ...responsiveStyle('wrap', wrap, (value) =>
        value === true ? 'wrap' : value === false ? 'nowrap' : value,
      ),
    },
    {
      ...(role || label ? { role: role ?? 'group' } : {}),
      ...(label ? { 'aria-label': label } : {}),
    },
  )
}
export function ToolbarGroup<E extends ElementType = 'div'>({
  grow = false,
  direction,
  gap,
  align,
  justify,
  wrap,
  ...props
}: ToolbarGroupProps<E>) {
  return renderBox(props, clsx('aria-toolbar-group', grow && 'aria-toolbar-group--grow'), {
    ...responsiveStyle('direction', direction),
    ...responsiveStyle('gap', gap, spaceValue),
    ...responsiveStyle('align', align),
    ...responsiveStyle('justify', justify, justifyValue),
    ...responsiveStyle('wrap', wrap, (value) =>
      value === true ? 'wrap' : value === false ? 'nowrap' : value,
    ),
  })
}
export function ToolbarActions<E extends ElementType = 'div'>({
  className,
  ...props
}: ToolbarGroupProps<E>) {
  return <ToolbarGroup {...props} className={clsx('aria-toolbar-actions', className)} />
}
