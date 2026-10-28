import type { ElementType } from 'react'
import { renderTypography, type TextSize, type TypographyProps } from '../block.shared/typography'
import { useI18n } from '../../i18n/use.i18n'

export type FieldLabelProps<E extends ElementType = 'label'> = TypographyProps<E, TextSize> & {
  required?: boolean
  /** Hide both indicators when the context already explains the requirement. */
  showRequirement?: boolean
}
export function FieldLabel<E extends ElementType = 'label'>({
  required,
  showRequirement = true,
  children,
  ...props
}: FieldLabelProps<E>) {
  const { t } = useI18n()
  return renderTypography(
    {
      ...props,
      as: props.as ?? 'label',
      variant: props.variant ?? 'label',
      children: (
        <>
          {children}
          {showRequirement && (
            <>
              {' '}
              <span className="field-requirement" data-required={!!required}>
                {t(required ? 'Required' : 'Optional')}
              </span>
            </>
          )}
        </>
      ),
    },
    'text',
    'aria-field-label',
  )
}
