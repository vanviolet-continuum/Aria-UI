import { useI18n } from '../../i18n/use-i18n'
import { Check } from 'lucide-react'
import type { CSSProperties } from 'react'
import { useTheme } from '../theme-provider'
import { themePresets } from '../presets'
import { resolvePalette } from '../apply-theme'

export function ThemePresets() {
  const { t: tr, text: localize } = useI18n()

  const { config, resolvedTheme, selectPreset } = useTheme()
  return (
    <section className="theme-section">
      <div className="theme-section-heading">
        <span>{tr('01 / A starting point')}</span>
        <h3>{tr('A few good foundations.')}</h3>
        <p>
          {tr('Aria UI restores the original sizes and spacing. Other presets change the palette.')}
        </p>
      </div>
      <div className="theme-preset-grid">
        {themePresets.map((preset) => {
          const palette = resolvePalette(
            { ...config, preset: preset.id, colors: { light: {}, dark: {} } },
            resolvedTheme,
          )
          return (
            <button
              key={preset.id}
              type="button"
              className={`theme-preset${config.preset === preset.id ? ' theme-preset--selected' : ''}`}
              aria-pressed={config.preset === preset.id}
              onClick={() => selectPreset(preset.id)}
            >
              <span
                className="theme-preset-art"
                style={
                  {
                    '--preset-primary': palette.primary,
                    '--preset-surface': palette.surface,
                    '--preset-subtle': palette.surfaceSubtle,
                    '--preset-border': palette.border,
                  } as CSSProperties
                }
              >
                <i />
                <span>
                  <b />
                  <em />
                  <em />
                  <em />
                </span>
                {config.preset === preset.id && (
                  <span className="preset-check">
                    <Check size={12} />
                  </span>
                )}
              </span>
              <strong>
                {preset.name}
                {preset.id === 'zendenta' && <small>{tr('Default')}</small>}
              </strong>
              <span className="theme-preset-description">{localize(preset.description)}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
