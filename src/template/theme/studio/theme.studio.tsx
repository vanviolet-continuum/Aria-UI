import { CodeText } from '../../ui/code.text/code.text'

import { Heading } from '../../ui/heading/heading'

import { Text } from '../../ui/text/text'
import { useI18n } from '../../i18n/use.i18n'
import { Palette, RotateCcw } from 'lucide-react'
import { Button, PageHeader, toast } from '../../ui'
import { ThemePresets } from './theme.presets'
import { ThemeColors } from './theme.colors'
import { ThemeLayoutControls } from './theme.layout.controls'
import { ThemeTypographyControls } from './theme.typography.controls'
import { ThemePreview } from './theme.preview'
import { ThemeSurfaceControls } from './theme.surface.controls'
import { ThemeTransfer } from './theme.transfer'
import { useTheme } from '../theme.provider'

export function ThemeStudio() {
  const { t: tr } = useI18n()

  const { resetConfig, exportTarget } = useTheme()
  return (
    <div className="standard-page theme-studio page-enter">
      <PageHeader
        className="theme-studio-intro"
        eyebrow={
          <>
            <Palette size={13} />
            {' ' + tr('YOUR WORKSPACE, YOUR WAY')}
          </>
        }
        title={tr('Make this space your own.')}
        description={tr('A familiar foundation. A little room for your personality.')}
        actions={
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
        }
      />
      <div className="theme-studio-layout">
        <div>
          <ThemePresets />
          <ThemeLayoutControls />
          <ThemeTypographyControls />
          <ThemeSurfaceControls />
          <ThemeColors />
          <div className="theme-export-note">
            <Text as="span" variant="label">
              {tr('FROM PREVIEW TO PROJECT')}
            </Text>
            <Heading as="h3" variant="card">
              {tr('Take your theme with you.')}
            </Heading>
            <Text as="p" variant="description">
              {tr(
                'Import a JSON file or a theme.config.ts exported by Theme studio. Importing applies your settings immediately; it does not change project source files.',
              )}
            </Text>
            <Text as="p" variant="description">
              {tr('Download your configuration and replace') + ' '}
              <CodeText as="code" variant="code">
                {exportTarget.filePath}
              </CodeText>
              {tr(
                '. It becomes the project default after rebuild. Your browser preview is saved automatically.',
              )}
            </Text>
            <Text as="p" variant="description">
              {tr('Colors live in') + ' '}
              <CodeText as="code" variant="code">
                src/template/theme/
              </CodeText>
              {tr('. UI components consume semantic tokens for both light and dark mode.')}
            </Text>
          </div>
        </div>
        <ThemePreview />
      </div>
    </div>
  )
}
