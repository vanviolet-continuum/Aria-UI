import type { ElementType } from 'react'
import {
  renderTypography,
  type HeadingSize,
  type TypographyProps,
} from '../block.shared/typography'

export type HeadingProps<E extends ElementType = 'h2'> = TypographyProps<E, HeadingSize>
/** Visual size is independent from the semantic heading level. */
export function Heading<E extends ElementType = 'h2'>(props: HeadingProps<E>) {
  return renderTypography(props, 'heading')
}
