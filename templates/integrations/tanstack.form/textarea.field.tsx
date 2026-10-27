import type { ComponentPropsWithoutRef } from 'react'
import { useSelector } from '@tanstack/react-form'
import { Field } from '../../ui/field/field'
import { Textarea } from '../../ui/textarea/textarea'
import { useFieldContext } from './form.context'
import { fieldMessage, type ServerFieldProps } from './field.message'

export interface TextareaFieldProps
  extends
    Omit<
      ComponentPropsWithoutRef<typeof Textarea>,
      'name' | 'value' | 'defaultValue' | 'onChange' | 'onBlur'
    >,
    ServerFieldProps {
  label: string
  hint?: string
}
export function TextareaField({
  label,
  hint,
  required,
  serverError,
  onServerErrorClear,
  ...props
}: TextareaFieldProps) {
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
      <Textarea
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
