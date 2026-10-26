import { defaultTheme } from './defaults'
import { themePresets } from './presets'
import type { ThemeConfig } from './types'

export function selectThemePreset(previous: ThemeConfig, id: string): ThemeConfig {
  const preset = themePresets.find((item) => item.id === id)
  if (!preset) return previous
  // Choosing the original preset also restores its geometry, including saved browser overrides.
  if (id === 'zendenta') return { ...defaultTheme, mode: previous.mode }
  return {
    ...previous,
    preset: id,
    radius: preset.radius ?? previous.radius,
    font: preset.font ?? previous.font,
    colors: { light: {}, dark: {} },
  }
}
