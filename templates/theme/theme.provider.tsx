import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useMediaQuery } from '../hooks/use.media.query'
import { applyTheme } from './apply.theme'
import { isThemeConfig, normalizeThemeConfig, readThemeConfig, THEME_STORAGE_KEY } from './config'
import { defaultTheme } from './defaults'
import { selectThemePreset } from './select.preset'
import { mergeTypography } from './typography.config'
import type { ResolvedThemeConfig, ThemeConfig, ThemeMode } from './types'

export type { ThemeMode } from './types'
export interface ThemeExportTarget {
  filePath: string
  typeImport: string
}
export const defaultExportTarget: ThemeExportTarget = {
  filePath: 'src/config/theme.config.ts',
  typeImport: '../../templates/theme/types',
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
  config: ResolvedThemeConfig
  storageStatus: 'saved' | 'unavailable'
  exportTarget: ThemeExportTarget
  setTheme: (theme: ThemeMode) => void
  updateConfig: (changes: Partial<ThemeConfig>) => void
  selectPreset: (id: string) => void
  resetConfig: () => void
  replaceConfig: (config: ThemeConfig) => void
}
const ThemeContext = /* @__PURE__ */ createContext<ThemeContextValue | null>(null)

export function ThemeProvider({
  children,
  initialConfig = defaultTheme,
  storageKey = THEME_STORAGE_KEY,
  legacyModeKey,
  exportTarget = defaultExportTarget,
}: ThemeProviderProps) {
  const projectConfig = useMemo(() => normalizeThemeConfig(initialConfig), [initialConfig])
  const [storageStatus, setStorageStatus] = useState<'saved' | 'unavailable'>('saved')
  const [config, setConfig] = useState<ResolvedThemeConfig>(() =>
    readThemeConfig(projectConfig, storageKey, legacyModeKey),
  )
  const systemDark = useMediaQuery('(prefers-color-scheme: dark)')
  const resolvedTheme = config.mode === 'system' ? (systemDark ? 'dark' : 'light') : config.mode
  useLayoutEffect(() => {
    applyTheme(config, resolvedTheme)
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ source: JSON.stringify(projectConfig), config }),
      )
      if (legacyModeKey) localStorage.setItem(legacyModeKey, JSON.stringify(config.mode))
      setStorageStatus('saved')
    } catch {
      setStorageStatus('unavailable')
      /* The current session remains usable when browser storage is unavailable. */
    }
  }, [config, resolvedTheme, projectConfig, storageKey, legacyModeKey])
  const value = useMemo(
    () => ({
      theme: config.mode,
      resolvedTheme,
      config,
      storageStatus,
      exportTarget,
      setTheme: (mode: ThemeMode) => setConfig((previous) => ({ ...previous, mode })),
      updateConfig: (changes: Partial<ThemeConfig>) =>
        setConfig((previous) => {
          const next = {
            ...previous,
            ...changes,
            typography: changes.typography
              ? mergeTypography(previous.typography, changes.typography)
              : previous.typography,
          }
          return isThemeConfig(next) ? normalizeThemeConfig(next) : previous
        }),
      selectPreset: (id: string) => {
        setConfig((previous) => normalizeThemeConfig(selectThemePreset(previous, id)))
      },
      resetConfig: () => setConfig(projectConfig),
      replaceConfig: (next: ThemeConfig) => {
        if (isThemeConfig(next)) setConfig(normalizeThemeConfig(next))
      },
    }),
    [config, resolvedTheme, projectConfig, exportTarget, storageStatus],
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export function useTheme() {
  const context = useOptionalTheme()
  if (!context) throw new Error('useTheme requires ThemeProvider')
  return context
}
export function useOptionalTheme() {
  return useContext(ThemeContext)
}
