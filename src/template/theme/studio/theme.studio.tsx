import { useI18n } from '../../i18n/use.i18n'
import { Palette, RotateCcw } from 'lucide-react'
import { Button, toast } from '../../ui'
import { ThemePresets } from './theme.presets'
import { ThemeColors } from './theme.colors'
import { ThemeLayoutControls } from './theme.layout.controls'
import { ThemePreview } from './theme.preview'
import { ThemeSurfaceControls } from './theme.surface.controls'
import { ThemeTransfer } from './theme.transfer'
import { useTheme } from '../theme.provider'

export function ThemeStudio() {
  const { t: tr } = useI18n()

  const { resetConfig, exportTarget } = useTheme()
  return (
    <div className="standard-page theme-studio page-enter">
      <div className="theme-studio-intro">
        <div>
          <span className="eyebrow">
            <Palette size={13} />
            {' ' + tr('YOUR WORKSPACE, YOUR WAY')}
          </span>
          <h2>{tr('Make this space your own.')}</h2>
          <p>{tr('A familiar foundation. A little room for your personality.')}</p>
        </div>
        <div className="theme-studio-actions">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              resetConfig()
              toast.info(tr('Project defaults restored'))
            }}
          >
            <RotateCcw size={14} />
            {tr('Reset to default')}
          </Button>
          <ThemeTransfer />
        </div>
      </div>
      <div className="theme-studio-layout">
        <div>
          <ThemePresets />
          <ThemeLayoutControls />
          <ThemeSurfaceControls />
          <ThemeColors />
          <div className="theme-export-note">
            <span>{tr('FROM PREVIEW TO PROJECT')}</span>
            <h3>{tr('Take your theme with you.')}</h3>
            <p>
              {tr(
                'Import a JSON file or a theme.config.ts exported by Theme studio. Importing applies your settings immediately; it does not change project source files.',
              )}
            </p>
            <p>
              {tr('Download your configuration and replace') + ' '}
              <code>{exportTarget.filePath}</code>
              {tr(
                '. It becomes the project default after rebuild. Your browser preview is saved automatically.',
              )}
            </p>
            <p>
              {tr('Colors live in') + ' '}
              <code>src/template/theme/</code>
              {tr('. UI components consume semantic tokens for both light and dark mode.')}
            </p>
          </div>
        </div>
        <ThemePreview />
      </div>
    </div>
  )
}
