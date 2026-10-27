import type { ElementType } from 'react'
import { renderTypography, type TextSize, type TypographyProps } from '../block.shared/typography'

export type TextProps<E extends ElementType = 'p'> = TypographyProps<E, TextSize>
export function Text<E extends ElementType = 'p'>(props: TextProps<E>) {
  return renderTypography(props, 'text')
}
