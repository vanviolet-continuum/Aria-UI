import type { ThemeConfig } from './types'
import { defaultTypography } from './typography.defaults'

export function controlMetrics(
  config: Pick<ThemeConfig, 'controlSize' | 'fontScale' | 'spaceScale'> &
    Pick<ThemeConfig, 'borderWidth' | 'typography'>,
) {
  const size = {
    sm: { control: 33, button: 33, font: 11, option: 32, rich: 48, checkbox: 15, toggle: 18 },
    md: { control: 40, button: 37, font: 12, option: 36, rich: 56, checkbox: 17, toggle: 20 },
    lg: { control: 46, button: 44, font: 13, option: 42, rich: 64, checkbox: 20, toggle: 24 },
  }[config.controlSize]
  const border = (config.borderWidth ?? 1) * 2
  const input = { ...defaultTypography.input, ...config.typography?.input }
  const button = { ...defaultTypography.button, ...config.typography?.button }
  const menu = { ...defaultTypography.menu, ...config.typography?.menu }
  const description = { ...defaultTypography.description, ...config.typography?.description }
  const inputFont = (input.fontSize * size.font) / 12
  const buttonFont = (button.fontSize * size.font) / 12
  return {
    controlHeight: Math.ceil(
      Math.max(
        size.control * config.spaceScale,
        inputFont * config.fontScale * input.lineHeight + 12 * config.spaceScale + border,
      ),
    ),
    buttonHeight: Math.ceil(
      Math.max(
        size.button * config.spaceScale,
        buttonFont * config.fontScale * button.lineHeight + 12 * config.spaceScale + border,
      ),
    ),
    fontSize: inputFont,
    buttonFontSize: buttonFont,
    optionHeight: Math.ceil(
      Math.max(
        size.option * config.spaceScale,
        menu.fontSize * config.fontScale * menu.lineHeight + 16 * config.spaceScale,
      ),
    ),
    richOptionHeight: Math.ceil(
      Math.max(
        size.rich * config.spaceScale,
        (menu.fontSize * menu.lineHeight + description.fontSize * description.lineHeight) *
          config.fontScale +
          20 * config.spaceScale,
      ),
    ),
    checkboxSize: size.checkbox,
    switchHeight: size.toggle,
  }
}
