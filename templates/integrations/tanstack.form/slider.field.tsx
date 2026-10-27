import { useSelector } from '@tanstack/react-form'
import { useI18n } from '../../i18n/use.i18n'
import { Field } from '../../ui/field/field'
import { Slider, type SliderProps } from '../../ui/slider/slider'
import { useFieldContext } from './form.context'
import { fieldMessage, type ServerFieldProps } from './field.message'

export interface SliderFieldProps
  extends
    Omit<SliderProps, 'name' | 'value' | 'defaultValue' | 'onValueChange' | 'onBlur' | 'label'>,
    ServerFieldProps {
  label: string
  hint?: string
  required?: boolean
}
export function SliderField({
  label,
  hint,
  required,
  serverError,
  onServerErrorClear,
  ...props
}: SliderFieldProps) {
  const { text } = useI18n()
  const field = useFieldContext<number>()
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
      <Slider
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
