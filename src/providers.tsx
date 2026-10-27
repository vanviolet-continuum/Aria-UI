import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { TemplateProvider } from '@templates/providers'
import { appI18n } from './config/i18n.config'
import themeConfig from './config/theme.config'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <TemplateProvider
        initialConfig={themeConfig}
        i18n={appI18n}
        exportTarget={{ filePath: 'src/config/theme.config.ts', typeImport: '@templates/theme' }}
      >
        {children}
      </TemplateProvider>
    </BrowserRouter>
  )
}
