import { useSelector } from '@tanstack/react-form'
import { Field } from '../../ui/field/field'
import { Combobox, type ComboboxProps } from '../../ui/combobox/combobox'
import { useFieldContext } from './form.context'
import { fieldMessage, type ServerFieldProps } from './field.message'

export interface ComboboxFieldProps
  extends Omit<ComboboxProps, 'name' | 'value' | 'onChange' | 'onBlur'>, ServerFieldProps {
  label: string
  hint?: string
  required?: boolean
}
export function ComboboxField({
  label,
  hint,
  required,
  serverError,
  onServerErrorClear,
  ...props
}: ComboboxFieldProps) {
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
      <Combobox
        {...props}
        name={field.name}
        value={value}
        onBlur={field.handleBlur}
        onChange={(next) => {
          onServerErrorClear?.()
          field.handleChange(next)
        }}
      />
    </Field>
  )
}
