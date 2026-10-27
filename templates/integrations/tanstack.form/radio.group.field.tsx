import { useSelector } from '@tanstack/react-form'
import { useI18n } from '../../i18n/use.i18n'
import { Field } from '../../ui/field/field'
import { RadioGroup, type RadioGroupProps } from '../../ui/radio.group/radio.group'
import { useFieldContext } from './form.context'
import { fieldMessage, type ServerFieldProps } from './field.message'

export interface RadioGroupFieldProps
  extends
    Omit<RadioGroupProps, 'name' | 'value' | 'defaultValue' | 'onValueChange' | 'onBlur' | 'label'>,
    ServerFieldProps {
  label: string
  hint?: string
  required?: boolean
}
export function RadioGroupField({
  label,
  hint,
  required,
  serverError,
  onServerErrorClear,
  ...props
}: RadioGroupFieldProps) {
  const { text } = useI18n()
  const field = useFieldContext<string>()
  const value = useSelector(field.store, (state) => state.value)
  const meta = useSelector(field.store, (state) => state.meta)
  const error = fieldMessage(meta.errors, meta.isTouched, serverError)
  return (
    <Field
      label={label}
      hint={hint}
      required={required}
      error={error?.message}
      errorSource={error?.source}
    >
      <RadioGroup
        {...props}
        name={field.name}
        required={required}
        aria-label={props['aria-label'] ?? text(label)}
        value={value}
        onBlur={field.handleBlur}
        onValueChange={(next) => {
          onServerErrorClear?.()
          field.handleChange(next)
        }}
      />
    </Field>
  )
}
