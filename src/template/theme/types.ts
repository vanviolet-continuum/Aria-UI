export type ThemeMode = 'light' | 'dark' | 'system'
export type ColorMode = 'light' | 'dark'
export type ControlSize = 'sm' | 'md' | 'lg'
export type ThemeFont = 'hanken' | 'inter' | 'system' | 'humanist' | 'serif' | 'mono'
export type ThemeMotion = 'system' | 'reduced' | 'none'
export interface ThemePalette {
  primary: string
  secondary: string
  success: string
  warning: string
  error: string
  info: string
  violet: string
  mint: string
  surface: string
  surfaceSubtle: string
  surfaceHover: string
  text: string
  textSecondary: string
  muted: string
  border: string
  borderStrong: string
  shadow: string
}
export interface ThemeConfig {
  version: 1
  mode: ThemeMode
  preset: string
  radius: number
  font: ThemeFont
  fontScale: number
  spaceScale: number
  controlSize: ControlSize
  density: 'comfortable' | 'compact'
  sidebarWidth: number
  /** Optional on older exported configurations; normalized by the provider. */
  headerHeight?: number
  sidebarCollapsed?: boolean
  borderWidth?: number
  shadowStrength?: number
  motion?: ThemeMotion
  motionScale?: number
  colors: Record<ColorMode, Partial<ThemePalette>>
}
export interface ResolvedThemeConfig extends ThemeConfig {
  headerHeight: number
  sidebarCollapsed: boolean
  borderWidth: number
  shadowStrength: number
  motion: ThemeMotion
  motionScale: number
}
export interface ThemePreset {
  id: string
  name: string
  description: string
  colors: Record<ColorMode, Partial<ThemePalette>>
  radius?: number
  font?: ThemeFont
}
