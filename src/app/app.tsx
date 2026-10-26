import { useI18n } from '../template/i18n'
import { AppProviders } from './providers'
import { AppRoutes } from './routes'

function AppContent() {
  const { t: tr } = useI18n()

  return (
    <>
      <a href="#main-content" className="skip-link">
        {tr('Skip to content')}
      </a>
      <AppRoutes />
    </>
  )
}

export default function App() {
  return (
    <AppProviders>
      <AppContent />
    </AppProviders>
  )
}
