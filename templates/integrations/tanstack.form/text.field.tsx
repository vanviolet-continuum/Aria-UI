import { useSelector } from '@tanstack/react-form'
import { Field } from '../../ui/field/field'
import { Input, type InputProps } from '../../ui/input/input'
import { useFieldContext } from './form.context'
import { fieldMessage, type ServerFieldProps } from './field.message'

export interface TextFieldProps
  extends
    Omit<InputProps, 'value' | 'defaultValue' | 'onChange' | 'onBlur' | 'name'>,
    ServerFieldProps {
  label: string
  hint?: string
}

export function TextField({
  label,
  hint,
  required,
  serverError,
  onServerErrorClear,
  ...props
}: TextFieldProps) {
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
      <Input
        {...props}
        name={field.name}
        required={required}
        value={value}
        onBlur={field.handleBlur}
        onChange={(event) => {
          onServerErrorClear?.()
          field.handleChange(event.target.value)
        }}
      />
    </Field>
  )
}
