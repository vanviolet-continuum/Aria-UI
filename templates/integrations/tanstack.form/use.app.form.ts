import { createFormHook } from '@tanstack/react-form'
import { fieldContext, formContext } from './form.context'
import { TextField } from './text.field'
import { TextareaField } from './textarea.field'
import { ComboboxField } from './combobox.field'
import { CheckboxFormField } from './checkbox.field'
import { SubmitButton } from './submit.button'
import { SliderField } from './slider.field'
import { RangeSliderField } from './range.slider.field'
import { RadioGroupField } from './radio.group.field'
import { MultiSelectField } from './multi.select.field'
import { liveValidationLogic } from './live.validation.logic'

const registered = /* @__PURE__ */ createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    TextareaField,
    ComboboxField,
    CheckboxField: CheckboxFormField,
    SliderField,
    RangeSliderField,
    RadioGroupField,
    MultiSelectField,
  },
  formComponents: { SubmitButton },
})
export const useAppForm: typeof registered.useAppForm = (options) =>
  registered.useAppForm({
    ...options,
    validationLogic: options.validationLogic ?? liveValidationLogic,
  })
export const withForm = registered.withForm
export const withFieldGroup = registered.withFieldGroup
