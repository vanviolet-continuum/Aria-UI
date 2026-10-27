import type { ElementType } from 'react'
import type { BoxProps } from '../box/box'
import type { HeadingProps } from '../heading/heading'
import type { TextProps } from '../text/text'
import { renderBox } from '../layout.shared/layout.utils'
import { renderTypography } from '../block.shared/typography'
import { TextContent } from '../block.shared/text.content'

export function HeadingGroupContent<E extends ElementType = 'div'>(props: BoxProps<E>) {
  return renderBox(props, 'aria-heading-group-content')
}
export function HeadingGroupTitleRow<E extends ElementType = 'div'>(props: BoxProps<E>) {
  return renderBox(props, 'aria-heading-group-title-row')
}
export function HeadingGroupTitle<E extends ElementType = 'h2'>(props: HeadingProps<E>) {
  return renderTypography(props, 'heading', 'aria-heading-group-title')
}
export function HeadingGroupDescription<E extends ElementType = 'div'>(props: TextProps<E>) {
  return renderTypography(
    { ...props, as: props.as ?? 'div', variant: props.variant ?? 'description' },
    'text',
    'aria-heading-group-description',
  )
}
export function HeadingGroupActions<E extends ElementType = 'div'>(props: BoxProps<E>) {
  return renderBox(props, 'aria-heading-group-actions')
}
export function HeadingGroupMeta<E extends ElementType = 'div'>({
  children,
  ...props
}: BoxProps<E>) {
  return renderBox(props, 'aria-heading-group-meta', undefined, {
    children: <TextContent variant="caption">{children}</TextContent>,
  })
}
export function HeadingGroupNavigation<E extends ElementType = 'div'>(props: BoxProps<E>) {
  return renderBox(props, 'aria-heading-group-navigation')
}
