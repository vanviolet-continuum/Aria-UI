import type { ReactNode } from 'react'
import { TemplateProvider } from '@templates/providers'
import { appI18n } from './config/i18n.config'
import themeConfig from './config/theme.config'
import { AriaQueryProvider } from '@templates/integrations/tanstack.query'
import { queryClient } from './config/query.config'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <TemplateProvider
      initialConfig={themeConfig}
      i18n={appI18n}
      exportTarget={{ filePath: 'src/config/theme.config.ts', typeImport: '@templates/theme' }}
    >
      <AriaQueryProvider client={queryClient}>{children}</AriaQueryProvider>
    </TemplateProvider>
  )
}
