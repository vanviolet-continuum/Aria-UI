import { useSelector } from '@tanstack/react-form'
import { useI18n } from '../../i18n/use.i18n'
import { Field } from '../../ui/field/field'
import { MultiSelect, type MultiSelectProps } from '../../ui/multi.select/multi.select'
import { useFieldContext } from './form.context'
import { fieldMessage, type ServerFieldProps } from './field.message'

export interface MultiSelectFieldProps
  extends
    Omit<
      MultiSelectProps,
      'name' | 'value' | 'defaultValue' | 'onValueChange' | 'onBlur' | 'label'
    >,
    ServerFieldProps {
  label: string
  hint?: string
  required?: boolean
}
export function MultiSelectField({
  label,
  hint,
  required,
  serverError,
  onServerErrorClear,
  ...props
}: MultiSelectFieldProps) {
  const { text } = useI18n()
  const field = useFieldContext<string[]>()
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
      <MultiSelect
        {...props}
        name={field.name}
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
