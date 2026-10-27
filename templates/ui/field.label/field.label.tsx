import type { ElementType } from 'react'
import { renderTypography, type TextSize, type TypographyProps } from '../block.shared/typography'
import { Text } from '../text/text'

export type FieldLabelProps<E extends ElementType = 'label'> = TypographyProps<E, TextSize> & {
  required?: boolean
}
export function FieldLabel<E extends ElementType = 'label'>({
  required,
  children,
  ...props
}: FieldLabelProps<E>) {
  return renderTypography(
    {
      ...props,
      as: props.as ?? 'label',
      variant: props.variant ?? 'label',
      children: (
        <>
          {children}
          {required && (
            <Text as="span" variant="label" tone="error" aria-hidden="true">
              {' '}
              *
            </Text>
          )}
        </>
      ),
    },
    'text',
    'aria-field-label',
  )
}
