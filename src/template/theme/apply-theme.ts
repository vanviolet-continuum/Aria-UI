import { basePalettes, themeFonts } from './palettes'
import { themePresets } from './presets'
import type { ColorMode, ThemeConfig } from './types'

export function resolvePalette(config: ThemeConfig, mode: ColorMode) {
  const preset = themePresets.find((item) => item.id === config.preset) ?? themePresets[0]
  return { ...basePalettes[mode], ...preset.colors[mode], ...config.colors[mode] }
}
function luminanceOf(hex: string) {
  const linear = hex.match(/[a-f\d]{2}/gi)!.map((part) => {
    const value = parseInt(part, 16) / 255
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  })
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722
}
export function contrastColor(hex: string) {
  const luminance = luminanceOf(hex)
  const dark = '#171b25'
  const ratioDark =
    (Math.max(luminance, luminanceOf(dark)) + 0.05) /
    (Math.min(luminance, luminanceOf(dark)) + 0.05)
  const ratioLight = 1.05 / (luminance + 0.05)
  return ratioDark >= ratioLight ? dark : '#ffffff'
}
export function themeVariables(config: ThemeConfig, mode: ColorMode) {
  const palette = resolvePalette(config, mode)
  const colors = Object.fromEntries(
    Object.entries(palette).map(([key, color]) => [
      `--${key.replace(/[A-Z]/g, (char) => '-' + char.toLowerCase()).replace('shadow', 'shadow-color')}`,
      color,
    ]),
  )
  for (const key of [
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'info',
    'violet',
    'mint',
  ] as const)
    colors[`--on-${key}`] = contrastColor(palette[key])
  const size = { sm: [33, 33, 11], md: [37, 40, 12], lg: [44, 46, 13] }[config.controlSize]
  return {
    ...colors,
    '--font-family': themeFonts[config.font],
    '--font-scale': String(config.fontScale),
    '--space-scale': String(config.spaceScale),
    '--radius-scale': String(config.radius / 8),
    '--sidebar-width': `${config.sidebarWidth}px`,
    '--control-height': `${size[1]}px`,
    '--button-height': `${size[0]}px`,
    '--control-font-size': `${size[2]}px`,
    '--table-density': config.density === 'compact' ? '.7' : '1',
  }
}
export function applyTheme(config: ThemeConfig, mode: ColorMode) {
  const root = document.documentElement
  root.dataset.theme = mode
  root.dataset.density = config.density
  root.style.colorScheme = mode
  for (const [key, value] of Object.entries(themeVariables(config, mode)))
    root.style.setProperty(key, value)
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', resolvePalette(config, mode).surface)
}
