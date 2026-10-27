import { defaultTheme } from './defaults'
import { basePalettes, themeFonts } from './palettes'
import { themePresets } from './presets'
import { controlMetrics } from './control.metrics'
import type { ResolvedThemeConfig, ThemeConfig } from './types'

export const THEME_STORAGE_KEY = 'admin-template-appearance-v1'
const hex = /^#[0-9a-f]{6}$/i
const record = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === 'object' && !Array.isArray(value)
export function isThemeConfig(value: unknown): value is ThemeConfig {
  if (
    !record(value) ||
    value.version !== 1 ||
    !['light', 'dark', 'system'].includes(String(value.mode))
  )
    return false
  if (
    !themePresets.some((preset) => preset.id === value.preset) ||
    !Object.hasOwn(themeFonts, String(value.font))
  )
    return false
  if (
    !['sm', 'md', 'lg'].includes(String(value.controlSize)) ||
    !['comfortable', 'compact'].includes(String(value.density))
  )
    return false
  for (const [key, min, max] of [
    ['radius', 0, 20],
    ['fontScale', 0.85, 1.3],
    ['spaceScale', 0.75, 1.35],
    ['sidebarWidth', 200, 300],
  ] as const) {
    if (
      typeof value[key] !== 'number' ||
      !Number.isFinite(value[key]) ||
      value[key] < min ||
      value[key] > max
    )
      return false
  }
  for (const [key, min, max] of [
    ['headerHeight', 56, 96],
    ['borderWidth', 0, 2],
    ['shadowStrength', 0, 2],
    ['motionScale', 0.5, 1.5],
  ] as const) {
    const setting = value[key]
    if (
      setting !== undefined &&
      (typeof setting !== 'number' || !Number.isFinite(setting) || setting < min || setting > max)
    )
      return false
  }
  if (value.sidebarCollapsed !== undefined && typeof value.sidebarCollapsed !== 'boolean')
    return false
  if (value.motion !== undefined && !['system', 'reduced', 'none'].includes(String(value.motion)))
    return false
  const colors = value.colors
  return (
    record(colors) &&
    ['light', 'dark'].every((mode) => {
      const palette = colors[mode]
      return (
        record(palette) &&
        Object.entries(palette).every(
          ([key, color]) =>
            Object.hasOwn(basePalettes.light, key) && typeof color === 'string' && hex.test(color),
        )
      )
    })
  )
}
export function normalizeThemeConfig(config: ThemeConfig): ResolvedThemeConfig {
  return {
    version: 1,
    mode: config.mode,
    preset: config.preset,
    radius: config.radius,
    font: config.font,
    fontScale: config.fontScale,
    spaceScale: config.spaceScale,
    controlSize: config.controlSize,
    density: config.density,
    sidebarWidth: config.sidebarWidth,
    headerHeight: Math.max(
      config.headerHeight ?? defaultTheme.headerHeight,
      controlMetrics(config).buttonHeight + 12,
    ),
    sidebarCollapsed: config.sidebarCollapsed ?? defaultTheme.sidebarCollapsed,
    borderWidth: config.borderWidth ?? defaultTheme.borderWidth,
    shadowStrength: config.shadowStrength ?? defaultTheme.shadowStrength,
    motion: config.motion ?? defaultTheme.motion,
    motionScale: config.motionScale ?? defaultTheme.motionScale,
    colors: { light: { ...config.colors.light }, dark: { ...config.colors.dark } },
  }
}

/** Read data only. Imported TypeScript is never evaluated. */
export function parseThemeFile(source: string): ResolvedThemeConfig {
  let data = source.replace(/^\uFEFF/, '').trim()
  if (!data.startsWith('{')) {
    const exported = data.match(
      /^(?:import\s+type\s*\{\s*ThemeConfig\s*\}\s*from\s*['"][^'"\r\n]+['"]\s*;?\s*)?(?:\/\/[^\r\n]*(?:\r?\n|$)\s*)*export\s+default\s+(\{[\s\S]*\})\s*(?:satisfies\s+ThemeConfig)?\s*;?\s*$/,
    )
    if (!exported) throw new Error('Use JSON or a theme.config.ts exported by Theme studio.')
    data = exported[1]
  }
  let parsed: unknown
  try {
    parsed = JSON.parse(data)
  } catch {
    throw new Error('The theme file does not contain valid JSON configuration.')
  }
  if (!isThemeConfig(parsed)) throw new Error('The theme contains invalid or unsupported settings.')
  return normalizeThemeConfig(parsed)
}
export function readThemeConfig(
  project: ThemeConfig,
  storageKey = THEME_STORAGE_KEY,
  legacyModeKey?: string,
): ResolvedThemeConfig {
  const normalized = normalizeThemeConfig(project)
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) ?? 'null')
    if (stored && typeof stored.source === 'string' && isThemeConfig(stored.config)) {
      const original: unknown = JSON.parse(stored.source)
      if (
        isThemeConfig(original) &&
        JSON.stringify(normalizeThemeConfig(original)) === JSON.stringify(normalized)
      )
        return normalizeThemeConfig(stored.config)
    }
    // Preserve the previous mode only when migrating the original default theme.
    if (
      !stored &&
      legacyModeKey &&
      JSON.stringify(normalized) === JSON.stringify(normalizeThemeConfig(defaultTheme))
    ) {
      const mode = JSON.parse(localStorage.getItem(legacyModeKey) ?? 'null')
      if (['light', 'dark', 'system'].includes(mode)) return { ...normalized, mode }
    }
  } catch {
    /* A blocked browser store does not prevent theming. */
  }
  return normalized
}
export function serializeTheme(config: ThemeConfig, typeImport = './types') {
  return `import type { ThemeConfig } from '${typeImport}'\n\n// Generated by Theme studio.\nexport default ${JSON.stringify(normalizeThemeConfig(config), null, 2)} satisfies ThemeConfig\n`
}
