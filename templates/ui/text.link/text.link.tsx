import type { ElementType } from 'react'
import { renderTypography, type TextSize, type TypographyProps } from '../block.shared/typography'
export type TextLinkProps<E extends ElementType = 'a'> = TypographyProps<E, TextSize>
export function TextLink<E extends ElementType = 'a'>(props: TextLinkProps<E>) {
  return renderTypography(
    { ...props, as: props.as ?? 'a', variant: props.variant ?? 'link' },
    'text',
    'aria-text-link',
  )
}
