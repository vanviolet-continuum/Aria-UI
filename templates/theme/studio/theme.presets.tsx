import { Heading } from '../../ui/heading/heading'

import { Text } from '../../ui/text/text'
import { useI18n } from '../../i18n/use.i18n'
import { Check } from 'lucide-react'
import type { CSSProperties } from 'react'
import { useTheme } from '../theme.provider'
import { themePresets } from '../presets'
import { resolvePalette } from '../apply.theme'

export function ThemePresets() {
  const { t: tr, text: localize } = useI18n()

  const { config, resolvedTheme, selectPreset } = useTheme()
  return (
    <section className="theme-section">
      <div className="theme-section-heading">
        <Text as="span" variant="label">
          {tr('01 / A starting point')}
        </Text>
        <Heading as="h3" variant="card">
          {tr('A few good foundations.')}
        </Heading>
        <Text as="p" variant="body">
          {tr('Aria UI restores the original sizes and spacing. Other presets change the palette.')}
        </Text>
      </div>
      <div className="theme-preset-grid">
        {themePresets.map((preset) => {
          const palette = resolvePalette(
            { ...config, preset: preset.id, colors: { light: {}, dark: {} } },
            resolvedTheme,
          )
          return (
            <Text
              as="button"
              variant="button"
              tone="inherit"
              key={preset.id}
              type="button"
              className={`theme-preset${config.preset === preset.id ? ' theme-preset--selected' : ''}`}
              aria-pressed={config.preset === preset.id}
              onClick={() => selectPreset(preset.id)}
            >
              <Text
                as="span"
                variant="label"
                tone="inherit"
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
                <Text as="i" variant="body" tone="inherit" size="inherit" />
                <Text as="span" variant="label" tone="inherit">
                  <Text as="b" variant="label" tone="inherit" />
                  <Text as="em" variant="body" tone="inherit" size="inherit" />
                  <Text as="em" variant="body" tone="inherit" size="inherit" />
                  <Text as="em" variant="body" tone="inherit" size="inherit" />
                </Text>
                {config.preset === preset.id && (
                  <Text as="span" variant="label" tone="inherit" className="preset-check">
                    <Check size={12} />
                  </Text>
                )}
              </Text>
              <Text as="strong" variant="label" tone="inherit">
                {preset.name}
                {preset.id === 'zendenta' && (
                  <Text as="small" variant="caption">
                    {tr('Default')}
                  </Text>
                )}
              </Text>
              <Text as="span" variant="label" tone="inherit" className="theme-preset-description">
                {localize(preset.description)}
              </Text>
            </Text>
          )
        })}
      </div>
    </section>
  )
}
