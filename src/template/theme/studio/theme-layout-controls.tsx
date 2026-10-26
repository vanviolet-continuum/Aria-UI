import { useI18n } from '../../i18n/use-i18n'
import { useId } from 'react'
import { useTheme } from '../theme-provider'
import { Combobox, Field } from '../../ui'
import type { ControlSize, ThemeFont, ThemeMode } from '../types'

export function ThemeSlider({
  label,
  value,
  min,
  max,
  step = 1,
  suffix = '',
  onChange,
  disabled,
}: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  suffix?: string
  onChange: (value: number) => void
  disabled?: boolean
}) {
  const { text: localize } = useI18n()

  const id = useId()
  return (
    <div className="theme-slider">
      <div>
        <label htmlFor={id}>{localize(label)}</label>
        <output htmlFor={id}>
          {Math.round(value * 100) / 100}
          {suffix}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  )
}
export function ThemeLayoutControls() {
  const { t: tr } = useI18n()

  const { config, updateConfig } = useTheme()
  return (
    <section className="theme-section">
      <div className="theme-section-heading">
        <span>{tr('02 / The details')}</span>
        <h3>{tr('Find your rhythm.')}</h3>
        <p>
          {tr(
            'Typography, corners, and room between things. Changes preview across the whole workspace.',
          )}
        </p>
      </div>
      <div className="theme-control-grid">
        <Field label={tr('Appearance')}>
          <Combobox
            value={config.mode}
            onChange={(mode) => updateConfig({ mode: mode as ThemeMode })}
            options={[
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
              { value: 'system', label: 'Follow system' },
            ]}
          />
        </Field>
        <Field label={tr('Font family')}>
          <Combobox
            value={config.font}
            onChange={(font) => updateConfig({ font: font as ThemeFont })}
            options={[
              { value: 'hanken', label: 'Hanken Grotesk · default' },
              { value: 'inter', label: 'Inter / system sans' },
              { value: 'system', label: 'Segoe UI / system' },
              { value: 'humanist', label: 'Humanist / Trebuchet' },
              { value: 'serif', label: 'Editorial / Georgia' },
              { value: 'mono', label: 'Developer / monospace' },
            ]}
          />
        </Field>
        <Field label={tr('Default control size')}>
          <Combobox
            value={config.controlSize}
            onChange={(controlSize) => updateConfig({ controlSize: controlSize as ControlSize })}
            options={[
              { value: 'sm', label: 'Small' },
              { value: 'md', label: 'Medium · default' },
              { value: 'lg', label: 'Large' },
            ]}
          />
        </Field>
        <Field label={tr('Table density')}>
          <Combobox
            value={config.density}
            onChange={(density) => updateConfig({ density: density as 'comfortable' | 'compact' })}
            options={[
              { value: 'comfortable', label: 'Comfortable' },
              { value: 'compact', label: 'Compact' },
            ]}
          />
        </Field>
        <ThemeSlider
          label={tr('Corner radius')}
          value={config.radius}
          min={0}
          max={20}
          suffix="px"
          onChange={(radius) => updateConfig({ radius })}
        />
        <ThemeSlider
          label={tr('Font scale')}
          value={config.fontScale * 100}
          min={85}
          max={130}
          step={5}
          suffix="%"
          onChange={(value) => updateConfig({ fontScale: value / 100 })}
        />
        <ThemeSlider
          label={tr('Spacing scale')}
          value={config.spaceScale * 100}
          min={75}
          max={135}
          step={5}
          suffix="%"
          onChange={(value) => updateConfig({ spaceScale: value / 100 })}
        />
      </div>
    </section>
  )
}
