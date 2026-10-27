import type { ResolvedThemeConfig } from './types'
import { defaultTypography } from './typography.defaults'

export const defaultTheme: ResolvedThemeConfig = {
  version: 1,
  mode: 'light',
  preset: 'zendenta',
  radius: 8,
  font: 'hanken',
  fontScale: 1,
  typography: defaultTypography,
  spaceScale: 1,
  layoutGap: 16,
  layoutPadding: 24,
  controlSize: 'md',
  density: 'comfortable',
  sidebarWidth: 232,
  headerHeight: 70,
  sidebarCollapsed: false,
  borderWidth: 1,
  shadowStrength: 1,
  motion: 'system',
  motionScale: 1,
  colors: { light: {}, dark: {} },
}
