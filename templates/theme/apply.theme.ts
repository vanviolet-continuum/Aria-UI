import { basePalettes, themeFonts } from './palettes'
import { themePresets } from './presets'
import type { ColorMode, ThemeConfig } from './types'
import { normalizeThemeConfig } from './config'
import { controlMetrics } from './control.metrics'
import { typographyVariables } from './typography.config'

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
  const settings = normalizeThemeConfig(config)
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
  const size = controlMetrics(settings)
  return {
    ...colors,
    ...typographyVariables(settings.typography),
    '--font-family': themeFonts[config.font],
    '--font-scale': String(config.fontScale),
    '--space-scale': String(config.spaceScale),
    '--layout-gap-base': `${settings.layoutGap}px`,
    '--layout-padding-base': `${settings.layoutPadding}px`,
    '--radius-scale': String(config.radius / 8),
    '--sidebar-width': `${config.sidebarWidth}px`,
    '--control-height': `${size.controlHeight}px`,
    '--button-height': `${size.buttonHeight}px`,
    '--control-font-size': `${size.fontSize}px`,
    '--button-font-size': `${size.buttonFontSize}px`,
    '--option-height': `${size.optionHeight}px`,
    '--option-rich-height': `${size.richOptionHeight}px`,
    '--checkbox-size': `${size.checkboxSize}px`,
    '--switch-height': `${size.switchHeight}px`,
    '--header-height': `${Math.max(settings.headerHeight, size.buttonHeight + 12, settings.typography.page.fontSize * settings.typography.page.lineHeight * settings.fontScale + 16)}px`,
    '--border-width': `${settings.borderWidth}px`,
    '--shadow-strength': String(settings.shadowStrength),
    '--motion-scale': String(settings.motionScale),
    '--table-density': config.density === 'compact' ? '.7' : '1',
  }
}
export function applyTheme(config: ThemeConfig, mode: ColorMode) {
  const root = document.documentElement
  root.dataset.theme = mode
  root.dataset.density = config.density
  root.dataset.motion = config.motion ?? 'system'
  root.style.colorScheme = mode
  for (const [key, value] of Object.entries(themeVariables(config, mode)))
    root.style.setProperty(key, value)
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', resolvePalette(config, mode).surface)
}
