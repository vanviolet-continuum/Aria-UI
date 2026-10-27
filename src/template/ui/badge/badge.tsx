import { useI18n } from '../../i18n/use.i18n'
import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'violet'
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  appearance?: 'soft' | 'outline' | 'solid'
  dot?: boolean
  size?: 'sm' | 'md'
}

export function Badge({
  variant = 'neutral',
  appearance = 'soft',
  dot,
  size = 'md',
  className,
  children,
  ...props
}: BadgeProps) {
  const { text: localize } = useI18n()

  return (
    <span
      className={clsx(
        'ui-badge',
        `ui-badge--${variant}`,
        `ui-badge--${appearance}`,
        `ui-badge--${size}`,
        className,
      )}
      {...props}
    >
      {dot && <i aria-hidden="true" />}
      {localize(children)}
    </span>
  )
}
