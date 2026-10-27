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

export const { useAppForm, withForm, withFieldGroup } = /* @__PURE__ */ createFormHook({
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
