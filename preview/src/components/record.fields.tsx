import type { ReactNode } from 'react'
import { useI18n } from '@templates/i18n'
import { Grid } from '@templates/ui/grid'
import { GridItem } from '@templates/ui/grid.item'
import { Field } from '@templates/ui/field'
import { Input } from '@templates/ui/input'
import { Textarea } from '@templates/ui/textarea'
import { NumericInput } from '@templates/ui/number.input'
import { Combobox, type ComboboxOption } from '@templates/ui/combobox'
import { MultiSelect } from '@templates/ui/multi.select'
import { DatePicker } from '@templates/ui/calendar/date.picker'
import { TimePicker } from '@templates/ui/calendar/time.picker'

export interface RecordField<V extends object> {
  name: Extract<keyof V, string>
  label: string
  type?: 'text' | 'email' | 'textarea' | 'number' | 'money' | 'select' | 'multi' | 'date' | 'time'
  options?: ComboboxOption[]
  required?: boolean
  full?: boolean
  hint?: string
  placeholder?: string
  rows?: number
}
export interface RecordForm<V extends object> {
  values: V
  errors: Record<string, string>
  update: <K extends keyof V>(name: K, value: V[K]) => void
}
export function RecordFields<V extends object>({
  fields,
  form,
}: {
  fields: RecordField<V>[]
  form: RecordForm<V>
}) {
  const { t, locale } = useI18n()
  return (
    <Grid columns={{ base: 1, sm: 2 }} gap="md">
      {fields.map((field) => {
        const value = form.values[field.name]
        const change = (next: unknown) => form.update(field.name, next as V[typeof field.name])
        let control: ReactNode
        if (field.type === 'select')
          control = (
            <Combobox
              value={String(value ?? '')}
              options={field.options ?? []}
              onChange={change}
              placeholder={field.placeholder ? t(field.placeholder) : undefined}
            />
          )
        else if (field.type === 'multi')
          control = (
            <MultiSelect
              value={
                Array.isArray(value)
                  ? value.filter((item): item is string => typeof item === 'string')
                  : []
              }
              options={field.options ?? []}
              onValueChange={change}
            />
          )
        else if (field.type === 'date')
          control = (
            <DatePicker
              value={String(value ?? '') || undefined}
              onChange={(next) => change(next ?? '')}
            />
          )
        else if (field.type === 'time')
          control = <TimePicker value={String(value ?? '') || undefined} onChange={change} />
        else if (field.type === 'textarea')
          control = (
            <Textarea
              value={String(value ?? '')}
              rows={field.rows ?? 4}
              onChange={(event) => change(event.target.value)}
              placeholder={field.placeholder ? t(field.placeholder) : undefined}
            />
          )
        else if (field.type === 'number' || field.type === 'money')
          control = (
            <NumericInput
              value={typeof value === 'number' ? value : ''}
              onChange={(next) => change(next === '' ? 0 : Number(next))}
              decimalScale={0}
              prefix={field.type === 'money' ? 'Rp ' : undefined}
              thousandSeparator={locale.startsWith('id') ? '.' : ','}
              decimalSeparator={locale.startsWith('id') ? ',' : '.'}
            />
          )
        else
          control = (
            <Input
              value={String(value ?? '')}
              onChange={(event) => change(event.target.value)}
              type={field.type ?? 'text'}
              placeholder={field.placeholder ? t(field.placeholder) : undefined}
            />
          )
        return (
          <GridItem key={field.name} colSpan={field.full ? { base: 1, sm: 2 } : 1}>
            <Field
              label={t(field.label)}
              hint={field.hint ? t(field.hint) : undefined}
              required={field.required}
              error={form.errors[field.name] ? t(form.errors[field.name]) : undefined}
            >
              {control as Parameters<typeof Field>[0]['children']}
            </Field>
          </GridItem>
        )
      })}
    </Grid>
  )
}
