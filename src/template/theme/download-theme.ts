import { serializeTheme } from './config'
import type { ThemeConfig } from './types'

export function downloadTheme(config: ThemeConfig, typeImport?: string) {
  const url = URL.createObjectURL(
    new Blob([serializeTheme(config, typeImport)], { type: 'text/typescript;charset=utf-8' }),
  )
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = 'theme.config.ts'
  anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
