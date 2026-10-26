import type { ResolvedThemeConfig } from './types'

export const defaultTheme: ResolvedThemeConfig = {
  version: 1,
  mode: 'light',
  preset: 'zendenta',
  radius: 8,
  font: 'hanken',
  fontScale: 1,
  spaceScale: 1,
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
