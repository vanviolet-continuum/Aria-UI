import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { TemplateProvider } from '../template'
import theme from './config/theme.config'
import { appI18n } from './i18n'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <TemplateProvider initialConfig={theme} i18n={appI18n}>
        {children}
      </TemplateProvider>
    </BrowserRouter>
  )
}
