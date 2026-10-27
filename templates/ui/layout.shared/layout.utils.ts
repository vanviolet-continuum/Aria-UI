import { createElement, type ElementType } from 'react'
import clsx from 'clsx'
import type { BoxOptions, LayoutSpace, LayoutStyle, Responsive } from './layout.types'

export function spaceValue(value: LayoutSpace) {
  return `var(--space-${value})`
}

export function responsiveStyle<T extends string | number | boolean>(
  name: string,
  value: Responsive<T> | undefined,
  resolve: (value: T) => string | number = String,
): LayoutStyle {
  if (value === undefined) return {}
  if (typeof value !== 'object') return { [`--l-${name}`]: resolve(value) }
  const result: LayoutStyle = {}
  for (const point of ['base', 'sm', 'md', 'lg', 'xl'] as const) {
    const entry = value[point]
    if (entry !== undefined)
      result[`--l-${name}${point === 'base' ? '' : `-${point}`}`] = resolve(entry)
  }
  return result
}

export function cssLength(value: string | number) {
  return typeof value === 'number' ? `${value}px` : value
}

export function justifyValue(value: string) {
  return value === 'between' || value === 'around' || value === 'evenly' ? `space-${value}` : value
}

/** Native attributes, event handlers, children and React 19 refs pass through unchanged. */
export function renderBox(
  props: BoxOptions & { as?: ElementType },
  componentClass?: string,
  layoutStyle?: LayoutStyle,
  attributes?: Record<string, unknown>,
) {
  const {
    as = 'div',
    className,
    style,
    variant = 'plain',
    padding,
    paddingX,
    paddingY,
    radius,
    shadow,
    border,
    background,
    color,
    width,
    maxWidth,
    minWidth,
    height,
    minHeight,
    maxHeight,
    ...nativeProps
  } = props
  const backgroundValue =
    background === 'subtle'
      ? 'var(--surface-subtle)'
      : background === 'transparent'
        ? 'transparent'
        : background === 'surface'
          ? 'var(--surface)'
          : background
            ? `var(--${background}-soft)`
            : undefined
  const colorValue =
    color === 'inherit'
      ? 'inherit'
      : color === 'secondary'
        ? 'var(--text-secondary)'
        : color
          ? `var(--${color})`
          : undefined
  return createElement(as, {
    ...nativeProps,
    ...attributes,
    className: clsx('aria-layout', 'aria-box', componentClass, className),
    'data-box-variant': variant,
    style: {
      ...responsiveStyle('padding', padding, spaceValue),
      ...responsiveStyle('padding-x', paddingX, spaceValue),
      ...responsiveStyle('padding-y', paddingY, spaceValue),
      width,
      maxWidth,
      minWidth,
      height,
      minHeight,
      maxHeight,
      borderRadius: radius ? `var(--radius-${radius})` : undefined,
      boxShadow: shadow === 'none' ? 'none' : shadow ? `var(--layout-shadow-${shadow})` : undefined,
      border:
        border === undefined
          ? undefined
          : border
            ? 'var(--border-width, 1px) solid var(--border)'
            : 'none',
      backgroundColor: backgroundValue,
      color: colorValue,
      ...layoutStyle,
      ...style,
    },
  })
}
