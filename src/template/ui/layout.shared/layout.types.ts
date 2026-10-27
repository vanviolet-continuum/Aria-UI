import type { ComponentPropsWithRef, CSSProperties, ElementType, ReactNode } from 'react'
import type { TypographyTone } from '../../theme/typography.types'

export type LayoutBreakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl'
/** Mobile first: omitted breakpoints keep the value from the previous breakpoint. */
export type Responsive<T> = T | Partial<Record<LayoutBreakpoint, T>>
/** Numbers are steps of 4px, multiplied by the theme spacing scale. */
export type LayoutSpace =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
export type LayoutRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type LayoutShadow = 'none' | 'sm' | 'md' | 'lg'
export type LayoutVariant = 'plain' | 'surface' | 'subtle' | 'outlined' | 'elevated'
export type LayoutBackground =
  | 'transparent'
  | 'surface'
  | 'subtle'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
export type LayoutColor = TypographyTone
export type LayoutAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
export type LayoutJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
export type LayoutStyle = CSSProperties & Record<`--${string}`, string | number | undefined>
export type LayoutProps<E extends ElementType, Options> = Options & { as?: E } & Omit<
    ComponentPropsWithRef<E>,
    keyof Options | 'as'
  >

export interface BoxOptions {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  variant?: LayoutVariant
  padding?: Responsive<LayoutSpace>
  /** Logical inline padding, including right-to-left layouts. */
  paddingX?: Responsive<LayoutSpace>
  paddingY?: Responsive<LayoutSpace>
  radius?: LayoutRadius
  shadow?: LayoutShadow
  border?: boolean
  background?: LayoutBackground
  color?: LayoutColor
  width?: CSSProperties['width']
  maxWidth?: CSSProperties['maxWidth']
  minWidth?: CSSProperties['minWidth']
  height?: CSSProperties['height']
  minHeight?: CSSProperties['minHeight']
  maxHeight?: CSSProperties['maxHeight']
}
