import type { ElementType, ReactNode } from 'react'
import type { BoxOptions, LayoutProps } from '../layout.shared/layout.types'
import { renderBox } from '../layout.shared/layout.utils'
import { hasContent } from '../block.shared/block.utils'
import {
  CardHeader,
  CardBody,
  CardFooter,
  type CardHeaderProps,
  type CardBodyProps,
  type CardFooterProps,
} from './card.parts'

export interface CardSlotProps {
  header?: CardHeaderProps
  body?: CardBodyProps
  footer?: CardFooterProps
}
export interface CardOptions extends BoxOptions {
  size?: 'sm' | 'md' | 'lg'
  title?: ReactNode
  description?: ReactNode
  eyebrow?: ReactNode
  actions?: ReactNode
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
  children?: ReactNode
  slotProps?: CardSlotProps
}
export type CardProps<E extends ElementType = 'div'> = LayoutProps<E, CardOptions>

/** Shortcut fields wrap body content; children alone provide complete part composition. */
export function Card<E extends ElementType = 'div'>({
  size = 'md',
  title,
  description,
  eyebrow,
  actions,
  header,
  body,
  footer,
  children,
  slotProps = {},
  variant = 'outlined',
  padding = 0,
  ...props
}: CardProps<E>) {
  const shortcut = [title, description, eyebrow, actions, header, body, footer].some(
    (value) => value !== undefined,
  )
  const bodyContent = body !== undefined ? body : children
  const content = shortcut ? (
    <>
      {header !== undefined
        ? header
        : (hasContent(title) ||
            hasContent(description) ||
            hasContent(eyebrow) ||
            hasContent(actions)) && (
            <CardHeader
              title={title}
              description={description}
              eyebrow={eyebrow}
              actions={actions}
              {...slotProps.header}
            />
          )}
      {hasContent(bodyContent) && <CardBody {...slotProps.body}>{bodyContent}</CardBody>}
      {hasContent(footer) && <CardFooter {...slotProps.footer}>{footer}</CardFooter>}
    </>
  ) : (
    children
  )
  return renderBox(
    { ...props, variant, padding },
    'aria-card',
    {
      '--card-radius': `var(--radius-${props.radius ?? 'lg'})`,
    },
    { 'data-card-size': size, children: content },
  )
}
