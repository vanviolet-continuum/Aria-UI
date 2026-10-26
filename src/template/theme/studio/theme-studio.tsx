import { useI18n } from '../../i18n/use-i18n'
import { Download, Palette, RotateCcw } from 'lucide-react'
import { Button, toast } from '../../ui'
import { ThemePresets } from './theme-presets'
import { ThemeColors } from './theme-colors'
import { ThemeLayoutControls } from './theme-layout-controls'
import { ThemePreview } from './theme-preview'
import { useTheme } from '../theme-provider'
import { downloadTheme } from '../download-theme'

export function ThemeStudio() {
  const { t: tr } = useI18n()

  const { config, resetConfig, exportTarget } = useTheme()
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
          <Button
            variant="contained"
            onClick={() => {
              downloadTheme(config, exportTarget.typeImport)
              toast.success(tr('Your theme is ready'), {
                description: `Replace ${exportTarget.filePath} with the downloaded file.`,
              })
            }}
          >
            <Download size={14} />
            {tr('Download theme.config.ts')}
          </Button>
        </div>
      </div>
      <div className="theme-studio-layout">
        <div>
          <ThemePresets />
          <ThemeLayoutControls />
          <ThemeColors />
          <div className="theme-export-note">
            <span>{tr('FROM PREVIEW TO PROJECT')}</span>
            <h3>{tr('Take your theme with you.')}</h3>
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
