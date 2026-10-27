import type { ElementType } from 'react'
import { renderTypography, type TextSize, type TypographyProps } from '../block.shared/typography'

export type EyebrowProps<E extends ElementType = 'span'> = TypographyProps<E, TextSize>
export function Eyebrow<E extends ElementType = 'span'>(props: EyebrowProps<E>) {
  return renderTypography(props, 'eyebrow')
}
