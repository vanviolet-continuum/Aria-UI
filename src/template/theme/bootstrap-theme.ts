import { readThemeConfig } from './config'
import { applyTheme } from './apply-theme'
import { defaultTheme } from './defaults'
import type { ThemeConfig } from './types'

export function initializeTheme(
  config: ThemeConfig = defaultTheme,
  storageKey?: string,
  legacyModeKey?: string,
) {
  const initial = readThemeConfig(config, storageKey, legacyModeKey)
  const mode =
    initial.mode === 'system'
      ? matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : initial.mode
  applyTheme(initial, mode)
}
