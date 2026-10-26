import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { TemplateProvider } from '@/template/providers'
import { WorkspaceProvider } from '../clinic/workspace/workspace-context'
import theme from './theme.config'
import { exampleI18n } from './i18n'

export const exampleTheme = {
  initialConfig: theme,
  storageKey: 'zendenta-appearance-v1',
  legacyModeKey: 'zendenta-theme',
  exportTarget: {
    filePath: 'examples/app/theme.config.ts',
    typeImport: '../../src/template/theme/types',
  },
}
export function ExampleProviders({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <TemplateProvider {...exampleTheme} i18n={exampleI18n}>
        <WorkspaceProvider>{children}</WorkspaceProvider>
      </TemplateProvider>
    </BrowserRouter>
  )
}
