import * as Primitive from '@radix-ui/react-avatar'
import clsx from 'clsx'
import {
  Children,
  forwardRef,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { Text } from '../text/text'

export interface AvatarProps extends ComponentPropsWithoutRef<typeof Primitive.Root> {
  src?: string
  alt?: string
  name?: string
  fallback?: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'rounded'
  status?: 'online' | 'away' | 'busy' | 'offline'
  statusLabel?: string
  imageProps?: Omit<ComponentPropsWithoutRef<typeof Primitive.Image>, 'src' | 'alt'>
}
function initials(name = '') {
  return name
    .trim()
    .split(/\s+/u)
    .slice(0, 2)
    .map((word) => Array.from(word)[0] ?? '')
    .join('')
    .toLocaleUpperCase()
}
export const Avatar = /* @__PURE__ */ forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  {
    src,
    alt,
    name,
    fallback,
    size = 'md',
    shape = 'circle',
    status,
    statusLabel,
    imageProps,
    children,
    className,
    ...props
  },
  ref,
) {
  return (
    <Primitive.Root
      {...props}
      ref={ref}
      className={clsx('ui-avatar', 'ui-avatar--' + size, 'ui-avatar--' + shape, className)}
      role={props.role ?? 'img'}
      aria-label={props['aria-label'] ?? [alt ?? name, statusLabel].filter(Boolean).join(', ')}
    >
      <Primitive.Image
        {...imageProps}
        src={src}
        alt=""
        className={clsx('ui-avatar-image', imageProps?.className)}
      />
      <Primitive.Fallback className="ui-avatar-fallback" delayMs={src ? 150 : 0}>
        {fallback ?? (
          <Text
            as="span"
            variant="label"
            tone="inherit"
            style={{ fontSize: 'calc(var(--avatar-size) * .33)' }}
          >
            {initials(name) || '?'}
          </Text>
        )}
      </Primitive.Fallback>
      {status && (
        <span
          className={clsx('ui-avatar-status', 'ui-avatar-status--' + status)}
          aria-hidden="true"
        />
      )}
      {children}
    </Primitive.Root>
  )
})
export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  max?: number
  overflowLabel?: (count: number) => string
}
export function AvatarGroup({
  children,
  max = 5,
  overflowLabel = (count) => '+' + count,
  className,
  ...props
}: AvatarGroupProps) {
  const items = Children.toArray(children)
  const count = Math.max(1, Math.floor(max))
  const extra = items.length - count
  return (
    <div {...props} className={clsx('ui-avatar-group', className)}>
      {items.slice(0, count)}
      {extra > 0 && (
        <Avatar fallback={'+' + extra} alt={overflowLabel(extra)} className="ui-avatar-overflow" />
      )}
    </div>
  )
}
