import { useI18n } from '../../i18n/use.i18n'
import { useId, type ReactElement, type ReactNode, cloneElement } from 'react'

export interface FieldProps {
  label: string
  hint?: string
  error?: string
  required?: boolean
  children: ReactElement<{ id?: string; 'aria-describedby'?: string; 'aria-invalid'?: boolean }>
  className?: string
}

export function Field({ label, hint, error, required, children, className = '' }: FieldProps) {
  const { text: localize } = useI18n()

  const generatedId = useId()
  const id = children.props.id ?? generatedId
  const message = error ?? hint
  return (
    <div className={`ui-field ${className}`}>
      <label htmlFor={id}>
        {localize(label)}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {cloneElement(children, {
        id,
        'aria-describedby': message ? `${id}-message` : undefined,
        'aria-invalid': !!error || undefined,
      })}
      {message && (
        <p id={`${id}-message`} className={error ? 'ui-field-error' : 'ui-field-hint'}>
          {localize(message)}
        </p>
      )}
    </div>
  )
}

export function FormSection({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: ReactNode
}) {
  const { text: localize } = useI18n()

  return (
    <section className="form-section">
      <div className="form-section-title">
        <h3>{localize(title)}</h3>
        {description && <p>{localize(description)}</p>}
      </div>
      {children}
    </section>
  )
}
