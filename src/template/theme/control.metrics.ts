import type { ThemeConfig } from './types'

export function controlMetrics(
  config: Pick<ThemeConfig, 'controlSize' | 'fontScale' | 'spaceScale'> &
    Pick<ThemeConfig, 'borderWidth'>,
) {
  const size = {
    sm: { control: 33, button: 33, font: 11, option: 32, rich: 48, checkbox: 15, toggle: 18 },
    md: { control: 40, button: 37, font: 12, option: 36, rich: 56, checkbox: 17, toggle: 20 },
    lg: { control: 46, button: 44, font: 13, option: 42, rich: 64, checkbox: 20, toggle: 24 },
  }[config.controlSize]
  const border = (config.borderWidth ?? 1) * 2
  return {
    controlHeight: Math.ceil(
      Math.max(
        size.control * config.spaceScale,
        size.font * config.fontScale * 1.5 + 12 * config.spaceScale + border,
      ),
    ),
    buttonHeight: Math.ceil(
      Math.max(
        size.button * config.spaceScale,
        (size.font - 1) * config.fontScale * 1.5 + 12 * config.spaceScale + border,
      ),
    ),
    fontSize: size.font,
    optionHeight: Math.ceil(
      Math.max(
        size.option * config.spaceScale,
        size.font * config.fontScale * 1.4 + 16 * config.spaceScale,
      ),
    ),
    richOptionHeight: Math.ceil(
      Math.max(
        size.rich * config.spaceScale,
        (size.font + 9) * config.fontScale * 1.4 + 20 * config.spaceScale,
      ),
    ),
    checkboxSize: size.checkbox,
    switchHeight: size.toggle,
  }
}
