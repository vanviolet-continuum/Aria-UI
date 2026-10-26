import { useRef, useState } from 'react'
import { Braces, ChevronDown, Download, FileCode2, Upload } from 'lucide-react'
import { Button, Menu, toast } from '../../ui'
import { useI18n } from '../../i18n/use-i18n'
import { parseThemeFile } from '../config'
import { downloadTheme } from '../download-theme'
import { useTheme } from '../theme-provider'

export function ThemeTransfer() {
  const { t: tr } = useI18n()
  const { config, replaceConfig, exportTarget } = useTheme()
  const input = useRef<HTMLInputElement>(null)
  const [reading, setReading] = useState(false)
  const [error, setError] = useState('')
  const download = (format: 'ts' | 'json') => {
    downloadTheme(config, exportTarget.typeImport, format)
    toast.success(tr('Your theme is ready'), {
      description:
        format === 'ts'
          ? tr('Replace {{path}} with the downloaded file.', { path: exportTarget.filePath })
          : tr('Import this JSON file to restore or share your theme.'),
    })
  }
  return (
    <div className="theme-transfer">
      <div className="theme-transfer-controls">
        <input
          ref={input}
          hidden
          type="file"
          accept=".json,.ts,application/json"
          aria-label={tr('Import theme configuration')}
          onChange={async (event) => {
            const file = event.target.files?.[0]
            if (!file) return
            setReading(true)
            setError('')
            try {
              if (file.size > 128 * 1024)
                throw new Error('Choose a theme configuration smaller than 128 KB.')
              const imported = parseThemeFile(await file.text())
              replaceConfig(imported)
              toast.success(tr('Theme imported'), {
                description: tr('Your theme is applied across the workspace.'),
              })
            } catch (reason) {
              setError(reason instanceof Error ? reason.message : 'Unable to import this theme.')
            } finally {
              setReading(false)
              if (input.current) input.current.value = ''
            }
          }}
        />
        <Button variant="outlined" onClick={() => input.current?.click()} loading={reading}>
          <Upload size={14} />
          {tr('Import theme')}
        </Button>
        <Menu
          label={tr('Export theme')}
          variant="rich"
          size="lg"
          trigger={
            <Button variant="contained">
              <Download size={14} />
              {tr('Export theme')}
              <ChevronDown size={13} />
            </Button>
          }
          items={[
            {
              id: 'ts',
              label: 'TypeScript configuration',
              description: 'theme.config.ts · project defaults',
              icon: <FileCode2 size={16} />,
              onSelect: () => download('ts'),
            },
            {
              id: 'json',
              label: 'JSON configuration',
              description: 'aria-ui-theme.json · import or share',
              icon: <Braces size={16} />,
              onSelect: () => download('json'),
            },
          ]}
        />
      </div>
      {error && (
        <p className="theme-transfer-error" role="alert">
          {tr(error)}
        </p>
      )}
    </div>
  )
}
