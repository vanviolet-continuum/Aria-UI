import { Combobox, Field, Switch } from '../../ui'
import { useI18n } from '../../i18n/use-i18n'
import { useTheme } from '../theme-provider'
import type { ThemeMotion } from '../types'
import { ThemeSlider } from './theme-layout-controls'

export function ThemeSurfaceControls() {
  const { t: tr } = useI18n()
  const { config, updateConfig } = useTheme()
  return (
    <section className="theme-section">
      <div className="theme-section-heading">
        <span>{tr('03 / Layout & effects')}</span>
        <h3>{tr('The space around your work.')}</h3>
        <p>
          {tr(
            'Fine-tune the layout, surface details, and movement across the workspace. The header keeps enough room for your chosen control size.',
          )}
        </p>
      </div>
      <div className="theme-control-grid">
        <ThemeSlider
          label={tr('Header height')}
          value={config.headerHeight}
          min={56}
          max={96}
          step={2}
          suffix="px"
          onChange={(headerHeight) => updateConfig({ headerHeight })}
        />
        <ThemeSlider
          label={tr('Sidebar width')}
          value={config.sidebarWidth}
          min={200}
          max={300}
          step={4}
          suffix="px"
          onChange={(sidebarWidth) => updateConfig({ sidebarWidth })}
        />
        <ThemeSlider
          label={tr('Border thickness')}
          value={config.borderWidth}
          min={0}
          max={2}
          suffix="px"
          onChange={(borderWidth) => updateConfig({ borderWidth })}
        />
        <ThemeSlider
          label={tr('Shadow intensity')}
          value={config.shadowStrength * 100}
          min={0}
          max={200}
          step={10}
          suffix="%"
          onChange={(value) => updateConfig({ shadowStrength: value / 100 })}
        />
        <Field
          label={tr('Motion')}
          hint={tr('System mode follows your device’s reduced motion preference.')}
        >
          <Combobox
            searchable={false}
            value={config.motion}
            onChange={(motion) => updateConfig({ motion: motion as ThemeMotion })}
            options={[
              { value: 'system', label: 'Follow system' },
              { value: 'reduced', label: 'Reduced motion' },
              { value: 'none', label: 'No animations' },
            ]}
          />
        </Field>
        <ThemeSlider
          label={tr('Animation duration')}
          value={config.motionScale * 100}
          min={50}
          max={150}
          step={10}
          suffix="%"
          disabled={config.motion !== 'system'}
          onChange={(value) => updateConfig({ motionScale: value / 100 })}
        />
      </div>
      <label className="theme-preference-row">
        <span>
          <strong>{tr('Collapsed sidebar')}</strong>
          <small>{tr('Start with an icon rail. Your choice is saved between visits.')}</small>
        </span>
        <Switch
          checked={config.sidebarCollapsed}
          onChange={(event) => updateConfig({ sidebarCollapsed: event.target.checked })}
        />
      </label>
    </section>
  )
}
