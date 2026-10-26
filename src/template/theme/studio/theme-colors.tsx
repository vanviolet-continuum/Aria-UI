import { useI18n } from '../../i18n/use-i18n'
import { useTheme } from '../theme-provider'
import { resolvePalette } from '../apply-theme'
import type { ThemePalette } from '../types'
import { ThemeColorField } from './theme-color-field'

const colorFields: { key: keyof ThemePalette; label: string }[] = [
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'success', label: 'Success' },
  { key: 'warning', label: 'Warning' },
  { key: 'error', label: 'Error' },
  { key: 'info', label: 'Info' },
  { key: 'violet', label: 'Violet' },
  { key: 'mint', label: 'Mint' },
  { key: 'surface', label: 'Surface' },
  { key: 'surfaceSubtle', label: 'Subtle surface' },
  { key: 'surfaceHover', label: 'Hover surface' },
  { key: 'text', label: 'Text' },
  { key: 'textSecondary', label: 'Secondary text' },
  { key: 'muted', label: 'Muted text' },
  { key: 'border', label: 'Border' },
  { key: 'borderStrong', label: 'Strong border' },
  { key: 'shadow', label: 'Shadow tone' },
]
export function ThemeColors() {
  const { t: tr, text: localize } = useI18n()

  const { config, resolvedTheme, updateConfig } = useTheme()
  const palette = resolvePalette(config, resolvedTheme)
  return (
    <section className="theme-section">
      <div className="theme-section-heading">
        <span>{tr('03 / Your colors')}</span>
        <h3>{tr('A palette with purpose.')}</h3>
        <p>
          {tr('Editing the') + ' '}
          {resolvedTheme}
          {' ' +
            tr(
              'palette. Switch appearance to customize the other mode. Hover, soft, contrast, and SVG colors follow automatically.',
            )}
        </p>
      </div>
      <div className="theme-color-grid">
        {colorFields.map(({ key, label }) => (
          <ThemeColorField
            key={`${resolvedTheme}-${key}`}
            label={localize(label)}
            value={palette[key]}
            onChange={(value) =>
              updateConfig({
                colors: {
                  ...config.colors,
                  [resolvedTheme]: { ...config.colors[resolvedTheme], [key]: value },
                },
              })
            }
          />
        ))}
      </div>
    </section>
  )
}
