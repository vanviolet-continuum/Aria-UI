import { ThemeProvider, useTheme, type ThemeProviderProps } from '../theme/theme.provider'
import { MutationProvider } from './mutation.provider'
import { Toaster } from '../ui/toast/toast'
import { LocaleProvider } from '../i18n/locale.provider'
import type { i18n as I18nInstance } from 'i18next'

function ThemedToaster() {
  const { resolvedTheme } = useTheme()
  return <Toaster theme={resolvedTheme} />
}
export interface TemplateProviderProps extends ThemeProviderProps {
  i18n?: I18nInstance
}
export function TemplateProvider({ children, i18n, ...theme }: TemplateProviderProps) {
  return (
    <LocaleProvider instance={i18n}>
      <ThemeProvider {...theme}>
        <MutationProvider>
          {children}
          <ThemedToaster />
        </MutationProvider>
      </ThemeProvider>
    </LocaleProvider>
  )
}
