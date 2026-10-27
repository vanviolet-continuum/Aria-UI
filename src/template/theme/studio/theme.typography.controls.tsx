import { useState } from 'react'
import { Button } from '../../ui/button/button'
import { Combobox } from '../../ui/combobox/combobox'
import { Field } from '../../ui/field/field'
import { SectionHeader } from '../../ui/section.header/section.header'
import { Text } from '../../ui/text/text'
import { Box } from '../../ui/box/box'
import { useI18n } from '../../i18n/use.i18n'
import { useTheme } from '../theme.provider'
import { defaultTypography, typographyRoles } from '../typography.defaults'
import { typographyTones } from '../typography.config'
import type { TypographyRole, TypographyStyle, TypographyTone } from '../typography.types'
import { ThemeSlider } from './theme.layout.controls'

export function ThemeTypographyControls() {
  const { t: tr } = useI18n()
  const { config, updateConfig } = useTheme()
  const [role, setRole] = useState<TypographyRole>('page')
  const settings = config.typography[role]
  const update = (changes: Partial<TypographyStyle>) =>
    updateConfig({ typography: { [role]: changes } })
  return (
    <section className="theme-section">
      <SectionHeader
        eyebrow={tr('TYPOGRAPHY')}
        title={tr('One role. A consistent voice.')}
        description={tr('Adjust each text role across pages, components, and overlays.')}
        actions={
          <Button size="sm" onClick={() => update(defaultTypography[role])}>
            {tr('Reset this text style')}
          </Button>
        }
      />
      <div className="theme-control-grid theme-typography-controls">
        <Field label={tr('Text role')}>
          <Combobox
            value={role}
            onChange={(value) => setRole(value as TypographyRole)}
            options={typographyRoles.map((value) => ({ value, label: tr(`Typography ${value}`) }))}
          />
        </Field>
        <Field label={tr('Text color')}>
          <Combobox
            value={settings.tone}
            onChange={(tone) => update({ tone: tone as TypographyTone })}
            options={typographyTones.map((value) => ({ value, label: tr(`Text tone ${value}`) }))}
          />
        </Field>
        <ThemeSlider
          label={tr('Base font size')}
          min={8}
          max={72}
          value={settings.fontSize}
          suffix="px"
          onChange={(fontSize) => update({ fontSize })}
        />
        <ThemeSlider
          label={tr('Font weight')}
          min={100}
          max={900}
          step={10}
          value={settings.fontWeight}
          onChange={(fontWeight) => update({ fontWeight })}
        />
        <ThemeSlider
          label={tr('Line height')}
          min={1}
          max={2.5}
          step={0.05}
          value={settings.lineHeight}
          onChange={(lineHeight) => update({ lineHeight })}
        />
        <ThemeSlider
          label={tr('Letter spacing')}
          min={-0.1}
          max={0.3}
          step={0.005}
          value={settings.letterSpacing}
          suffix="em"
          onChange={(letterSpacing) => update({ letterSpacing })}
        />
        <Field label={tr('Text transform')}>
          <Combobox
            searchable={false}
            value={settings.textTransform}
            onChange={(value) =>
              update({ textTransform: value as TypographyStyle['textTransform'] })
            }
            options={['none', 'uppercase', 'lowercase', 'capitalize'].map((value) => ({
              value,
              label: tr(`Text transform ${value}`),
            }))}
          />
        </Field>
      </div>
      <Box variant="subtle" className="theme-typography-sample">
        <Text as="div" variant={role}>
          {role === 'metric' ? '12,840' : tr('A clear starting point for your next idea.')}
        </Text>
      </Box>
      <Text variant="caption" className="theme-typography-note">
        {tr(
          'Base sizes also follow the global font scale. Component props can override a role locally.',
        )}
      </Text>
    </section>
  )
}
