import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useMediaQuery } from '../hooks/use-media-query'
import { applyTheme } from './apply-theme'
import { readThemeConfig, THEME_STORAGE_KEY } from './config'
import { defaultTheme } from './defaults'
import { selectThemePreset } from './select-preset'
import type { ThemeConfig, ThemeMode } from './types'

export type { ThemeMode } from './types'
export interface ThemeExportTarget {
  filePath: string
  typeImport: string
}
export const defaultExportTarget: ThemeExportTarget = {
  filePath: 'src/app/config/theme.config.ts',
  typeImport: '../../template/theme/types',
}
export interface ThemeProviderProps {
  children: ReactNode
  initialConfig?: ThemeConfig
  storageKey?: string
  legacyModeKey?: string
  exportTarget?: ThemeExportTarget
}
interface ThemeContextValue {
  theme: ThemeMode
  resolvedTheme: 'light' | 'dark'
  config: ThemeConfig
  exportTarget: ThemeExportTarget
  setTheme: (theme: ThemeMode) => void
  updateConfig: (changes: Partial<ThemeConfig>) => void
  selectPreset: (id: string) => void
  resetConfig: () => void
}
const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({
  children,
  initialConfig = defaultTheme,
  storageKey = THEME_STORAGE_KEY,
  legacyModeKey,
  exportTarget = defaultExportTarget,
}: ThemeProviderProps) {
  const [config, setConfig] = useState<ThemeConfig>(() =>
    readThemeConfig(initialConfig, storageKey, legacyModeKey),
  )
  const systemDark = useMediaQuery('(prefers-color-scheme: dark)')
  const resolvedTheme = config.mode === 'system' ? (systemDark ? 'dark' : 'light') : config.mode
  useLayoutEffect(() => {
    applyTheme(config, resolvedTheme)
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ source: JSON.stringify(initialConfig), config }),
      )
      if (legacyModeKey) localStorage.setItem(legacyModeKey, JSON.stringify(config.mode))
    } catch {
      /* The current session remains usable when browser storage is unavailable. */
    }
  }, [config, resolvedTheme, initialConfig, storageKey, legacyModeKey])
  const value = useMemo(
    () => ({
      theme: config.mode,
      resolvedTheme,
      config,
      exportTarget,
      setTheme: (mode: ThemeMode) => setConfig((previous) => ({ ...previous, mode })),
      updateConfig: (changes: Partial<ThemeConfig>) =>
        setConfig((previous) => ({ ...previous, ...changes })),
      selectPreset: (id: string) => {
        setConfig((previous) => selectThemePreset(previous, id))
      },
      resetConfig: () => setConfig(initialConfig),
    }),
    [config, resolvedTheme, initialConfig, exportTarget],
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme requires ThemeProvider')
  return context
}
