import { normalizeThemeConfig, serializeTheme } from './config'
import type { ThemeConfig } from './types'

export function downloadTheme(
  config: ThemeConfig,
  typeImport?: string,
  format: 'ts' | 'json' = 'ts',
) {
  const url = URL.createObjectURL(
    new Blob(
      [
        format === 'json'
          ? JSON.stringify(normalizeThemeConfig(config), null, 2) + '\n'
          : serializeTheme(config, typeImport),
      ],
      { type: format === 'json' ? 'application/json' : 'text/typescript;charset=utf-8' },
    ),
  )
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = format === 'json' ? 'aria-ui-theme.json' : 'theme.config.ts'
  anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
