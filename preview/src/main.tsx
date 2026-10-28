import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TemplateProvider } from '@templates/providers'
import { initializeTheme } from '@templates/theme'
import './styles.css'
import themeConfig, { themeStorageKey } from './config/theme.config'
import { demoI18n } from './config/i18n.config'
import { DemoApp } from './app'

initializeTheme(themeConfig, themeStorageKey)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TemplateProvider
      initialConfig={themeConfig}
      storageKey={themeStorageKey}
      i18n={demoI18n}
      exportTarget={{
        filePath: 'preview/src/config/theme.config.ts',
        typeImport: '@templates/theme',
      }}
    >
      <DemoApp />
    </TemplateProvider>
  </StrictMode>,
)
