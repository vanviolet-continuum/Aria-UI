import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeTheme } from '@templates/theme'
import '@templates/styles.css'
import themeConfig from './config/theme.config'
import App from './app'

initializeTheme(themeConfig)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
