import type { ElementType } from 'react'
import { renderTypography, type TextSize, type TypographyProps } from '../block.shared/typography'
export type FieldHintProps<E extends ElementType = 'p'> = TypographyProps<E, TextSize>
export function FieldHint<E extends ElementType = 'p'>(props: FieldHintProps<E>) {
  return renderTypography(
    { ...props, as: props.as ?? 'p', variant: props.variant ?? 'helper' },
    'text',
    'aria-field-hint',
  )
}
