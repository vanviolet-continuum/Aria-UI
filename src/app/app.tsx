import { TextLink } from '../template/ui/text.link/text.link'
import { useI18n } from '../template/i18n'
import { AppProviders } from './providers'
import { AppRoutes } from './routes'

function AppContent() {
  const { t: tr } = useI18n()

  return (
    <>
      <TextLink as="a" variant="link" href="#main-content" className="skip-link">
        {tr('Skip to content')}
      </TextLink>
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
