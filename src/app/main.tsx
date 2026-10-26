import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeTheme } from '../template/theme'
import theme from './config/theme.config'
import App from './app'
import './styles.css'

initializeTheme(theme)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
