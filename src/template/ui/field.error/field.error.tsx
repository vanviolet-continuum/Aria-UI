import type { ElementType } from 'react'
import { renderTypography, type TextSize, type TypographyProps } from '../block.shared/typography'
export type FieldErrorProps<E extends ElementType = 'p'> = TypographyProps<E, TextSize>
export function FieldError<E extends ElementType = 'p'>(props: FieldErrorProps<E>) {
  return renderTypography(
    { ...props, as: props.as ?? 'p', variant: props.variant ?? 'error' },
    'text',
    'aria-field-error',
  )
}
