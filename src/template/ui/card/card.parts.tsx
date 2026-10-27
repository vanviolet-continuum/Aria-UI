import type { ElementType } from 'react'
import clsx from 'clsx'
import type { BoxOptions, LayoutProps } from '../layout.shared/layout.types'
import { renderBox } from '../layout.shared/layout.utils'
import { TextContent } from '../block.shared/text.content'
import { renderHeadingGroup } from '../heading.group/heading.group'
import type { HeadingGroupProps } from '../heading.group/heading.group.types'

export type CardHeaderProps<E extends ElementType = 'div'> = HeadingGroupProps<E> & {
  divider?: boolean
}
export function CardHeader<E extends ElementType = 'div'>({
  divider = false,
  className,
  ...props
}: CardHeaderProps<E>) {
  return renderHeadingGroup(
    {
      ...props,
      className: clsx('aria-card-header', divider && 'aria-card-header--divider', className),
    },
    'section',
  )
}
export type CardBodyProps<E extends ElementType = 'div'> = LayoutProps<E, BoxOptions>
export function CardBody<E extends ElementType = 'div'>({ children, ...props }: CardBodyProps<E>) {
  return renderBox(props, 'aria-card-body', undefined, {
    children: <TextContent>{children}</TextContent>,
  })
}
export type CardFooterProps<E extends ElementType = 'div'> = LayoutProps<
  E,
  BoxOptions & { divider?: boolean }
>
export function CardFooter<E extends ElementType = 'div'>({
  divider = false,
  children,
  ...props
}: CardFooterProps<E>) {
  return renderBox(
    props,
    clsx('aria-card-footer', divider && 'aria-card-footer--divider'),
    undefined,
    { children: <TextContent variant="caption">{children}</TextContent> },
  )
}
