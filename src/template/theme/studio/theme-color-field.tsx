import { useI18n } from '../../i18n/use-i18n'
import { useEffect, useId, useState } from 'react'
import { Input } from '../../ui'

export function ThemeColorField({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (value: string) => void
}) {
  const { t: tr, text: localize } = useI18n()

  const id = useId()
  const [draft, setDraft] = useState(value)
  useEffect(() => setDraft(value), [value])
  const valid = /^#[0-9a-f]{6}$/i.test(draft)
  return (
    <div className="theme-color-field">
      <label htmlFor={id}>{localize(label)}</label>
      <div>
        <input
          type="color"
          value={value}
          aria-label={tr('{{value0}} color picker', { value0: localize(label) })}
          onChange={(event) => onChange(event.target.value)}
        />
        <Input
          id={id}
          aria-label={tr('{{value0}} hex', { value0: localize(label) })}
          value={draft}
          invalid={!valid}
          maxLength={7}
          onChange={(event) => {
            setDraft(event.target.value)
            if (/^#[0-9a-f]{6}$/i.test(event.target.value)) onChange(event.target.value)
          }}
          onBlur={() => {
            if (!valid) setDraft(value)
          }}
        />
      </div>
    </div>
  )
}
