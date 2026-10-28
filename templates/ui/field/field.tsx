import { useI18n } from '../../i18n/use.i18n'
import {
  useId,
  type AriaAttributes,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  cloneElement,
} from 'react'
import { SectionHeader } from '../section.header/section.header'
import type { HeadingGroupSlotProps } from '../heading.group/heading.group.types'
import { FieldLabel } from '../field.label/field.label'
import { FieldHint } from '../field.hint/field.hint'
import { FieldError } from '../field.error/field.error'
import { mergeIds } from '../block.shared/block.utils'

export interface FieldProps {
  label: string
  hint?: string
  error?: string
  /** Backend messages are already display text and must not be translated. */
  errorSource?: 'local' | 'api'
  required?: boolean
  showRequirement?: boolean
  children: ReactElement<{
    id?: string
    required?: boolean
    'aria-required'?: AriaAttributes['aria-required']
    'aria-describedby'?: string
    'aria-invalid'?: boolean
  }>
  className?: string
}

export function Field({
  label,
  hint,
  error,
  errorSource = 'local',
  required,
  showRequirement,
  children,
  className = '',
}: FieldProps) {
  const { text: localize } = useI18n()

  const generatedId = useId()
  const id = children.props.id ?? generatedId
  const isRequired =
    required ??
    children.props.required ??
    (children.props['aria-required'] === true || children.props['aria-required'] === 'true')
  const message = error ?? hint
  return (
    <div className={`ui-field ${className}`}>
      <FieldLabel htmlFor={id} required={isRequired} showRequirement={showRequirement}>
        {localize(label)}
      </FieldLabel>
      {cloneElement(children, {
        id,
        'aria-describedby': mergeIds(
          children.props['aria-describedby'],
          message ? `${id}-message` : undefined,
        ),
        'aria-invalid': error ? true : children.props['aria-invalid'],
        'aria-required': isRequired || undefined,
      })}
      {message &&
        (error ? (
          <FieldError id={`${id}-message`} className="ui-field-error">
            {errorSource === 'api' ? message : localize(message)}
          </FieldError>
        ) : (
          <FieldHint id={`${id}-message`} className="ui-field-hint">
            {localize(message)}
          </FieldHint>
        ))}
    </div>
  )
}

export interface FormSectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  leading?: ReactNode
  slotProps?: HeadingGroupSlotProps
}

export function FormSection({
  title,
  description,
  actions,
  leading,
  children,
  className,
  slotProps,
  ...props
}: FormSectionProps) {
  const { text: localize } = useI18n()
  const generatedId = useId()
  const titleId = slotProps?.title?.id ?? generatedId

  return (
    <section
      className={['form-section', className].filter(Boolean).join(' ')}
      aria-labelledby={titleId}
      {...props}
    >
      <SectionHeader
        className="form-section-title"
        title={localize(title)}
        description={localize(description)}
        actions={actions}
        leading={leading}
        slotProps={{ ...slotProps, title: { ...slotProps?.title, id: titleId } }}
      />
      {children}
    </section>
  )
}
