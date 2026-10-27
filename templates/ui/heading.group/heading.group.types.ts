import type { ElementType, ReactNode } from 'react'
import type { BoxProps } from '../box/box'
import type {
  BoxOptions,
  LayoutProps,
  LayoutSpace,
  Responsive,
} from '../layout.shared/layout.types'
import type { HeadingElement } from '../heading'
import type { HeadingProps } from '../heading/heading'
import type { EyebrowProps } from '../eyebrow/eyebrow'
import type { TextProps } from '../text/text'

export type HeadingGroupSize = 'sm' | 'md' | 'lg'
export interface HeadingGroupSlotProps {
  content?: BoxProps
  titleRow?: BoxProps
  eyebrow?: EyebrowProps
  title?: HeadingProps<HeadingElement>
  description?: TextProps<'div'>
  actions?: BoxProps
  meta?: BoxProps
  navigation?: BoxProps
  leading?: BoxProps
}
export interface HeadingGroupOptions extends BoxOptions {
  eyebrow?: ReactNode
  title?: ReactNode
  description?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
  actions?: ReactNode
  meta?: ReactNode
  navigation?: ReactNode
  titleAs?: HeadingElement
  size?: HeadingGroupSize
  align?: Responsive<'start' | 'center' | 'end'>
  gap?: Responsive<LayoutSpace>
  layout?: 'split' | 'stacked'
  slotProps?: HeadingGroupSlotProps
  /** When supplied, children replace the generated parts for full composition. */
  children?: ReactNode
}
export type HeadingGroupProps<E extends ElementType = 'div'> = LayoutProps<E, HeadingGroupOptions>
