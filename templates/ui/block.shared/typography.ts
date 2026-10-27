import { createElement, type CSSProperties, type ElementType, type ReactNode } from 'react'
import clsx from 'clsx'
import type {
  LayoutColor,
  LayoutProps,
  LayoutStyle,
  Responsive,
} from '../layout.shared/layout.types'
import { responsiveStyle } from '../layout.shared/layout.utils'
import type { TypographyRole } from '../../theme/typography.types'

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'inherit'
export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inherit'
export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export interface TypographyOptions {
  children?: ReactNode
  variant?: TypographyRole
  className?: string
  style?: CSSProperties
  tone?: LayoutColor
  weight?: CSSProperties['fontWeight']
  align?: Responsive<NonNullable<CSSProperties['textAlign']>>
  leading?: 'tight' | 'normal' | 'relaxed'
  truncate?: boolean
  lineClamp?: number
  tracking?: CSSProperties['letterSpacing']
  transform?: CSSProperties['textTransform']
}
export type TypographyProps<E extends ElementType, Size extends string> = LayoutProps<
  E,
  TypographyOptions & { size?: Responsive<Size> }
>

export function renderTypography(
  {
    as,
    className,
    style,
    variant,
    size,
    tone,
    weight,
    align,
    leading,
    truncate,
    lineClamp,
    tracking,
    transform,
    ...nativeProps
  }: TypographyOptions & { as?: ElementType; size?: Responsive<string> },
  kind: 'text' | 'heading' | 'eyebrow',
  partClass?: string,
) {
  const family = kind === 'heading' ? 'heading' : 'text'
  const role = variant ?? (kind === 'heading' ? 'section' : kind === 'eyebrow' ? 'eyebrow' : 'body')
  const contextual = partClass === 'aria-heading-group-title' && variant === undefined
  const value = (property: string) => {
    if (property === 'size' && role === 'input')
      return 'calc(var(--control-font-size, 12px) * var(--font-scale, 1))'
    if (property === 'size' && role === 'button')
      return 'calc(var(--button-font-size, 12px) * var(--font-scale, 1))'
    return contextual
      ? `var(--block-title-${property}, var(--typography-${role}-${property}))`
      : `var(--typography-${role}-${property})`
  }
  const clamp =
    lineClamp === undefined || !Number.isFinite(lineClamp)
      ? undefined
      : Math.max(1, Math.floor(lineClamp))
  const variables: LayoutStyle = {
    ...responsiveStyle('type-size', size, (value) =>
      value === 'inherit' ? '1em' : `var(--font-${family}-${value})`,
    ),
    ...responsiveStyle('text-align', align),
    fontSize: `var(--l-type-size-current, ${value('size')})`,
    color:
      tone === 'inherit'
        ? undefined
        : tone === 'secondary'
          ? 'var(--text-secondary)'
          : tone
            ? `var(--${tone})`
            : value('color'),
    fontWeight: weight ?? value('weight'),
    lineHeight: leading ? `var(--leading-${leading})` : value('leading'),
    letterSpacing: tracking ?? value('tracking'),
    textTransform: transform ?? value('transform'),
    fontFamily: role === 'code' ? 'var(--font-mono)' : undefined,
    '--type-leading': leading ? `var(--leading-${leading})` : undefined,
    '--type-clamp': clamp,
    ...style,
  }
  return createElement(as ?? (kind === 'heading' ? 'h2' : kind === 'eyebrow' ? 'span' : 'p'), {
    ...nativeProps,
    'data-typography': role,
    className: clsx(
      'aria-layout',
      'aria-typography',
      `aria-${kind}`,
      truncate && 'aria-typography--truncate',
      clamp !== undefined && 'aria-typography--clamp',
      partClass,
      className,
    ),
    style: variables,
  })
}
