import { useId } from 'react'
import { useSelector } from '@tanstack/react-form'
import { CheckboxField, type CheckboxFieldProps } from '../../ui/checkbox/checkbox.field'
import { FieldError } from '../../ui/field.error/field.error'
import { useI18n } from '../../i18n/use.i18n'
import { useFieldContext } from './form.context'
import { fieldMessage, type ServerFieldProps } from './field.message'

export interface CheckboxFormFieldProps
  extends
    Omit<CheckboxFieldProps, 'name' | 'checked' | 'defaultChecked' | 'onChange' | 'onBlur'>,
    ServerFieldProps {}
export function CheckboxFormField({
  serverError,
  onServerErrorClear,
  id,
  'aria-describedby': describedBy,
  ...props
}: CheckboxFormFieldProps) {
  const generated = useId()
  const { text } = useI18n()
  const field = useFieldContext<boolean>()
  const value = useSelector(field.store, (state) => state.value)
  const meta = useSelector(field.store, (state) => state.meta)
  const error = fieldMessage(meta.errors, meta.isTouched, serverError)
  const messageId = `${id ?? generated}-error`
  return (
    <div>
      <CheckboxField
        {...props}
        id={id ?? generated}
        name={field.name}
        checked={value}
        aria-invalid={!!error || undefined}
        aria-describedby={[describedBy, error && messageId].filter(Boolean).join(' ') || undefined}
        onBlur={field.handleBlur}
        onChange={(event) => {
          onServerErrorClear?.()
          field.handleChange(event.target.checked)
        }}
      />
      {error && (
        <FieldError id={messageId}>
          {error.source === 'api' ? error.message : text(error.message)}
        </FieldError>
      )}
    </div>
  )
}
