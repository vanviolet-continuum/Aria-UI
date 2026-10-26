import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeTheme } from '@/template/theme'
import { exampleTheme } from './providers'
import App from './app'
import './styles.css'

initializeTheme(exampleTheme.initialConfig, exampleTheme.storageKey, exampleTheme.legacyModeKey)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
