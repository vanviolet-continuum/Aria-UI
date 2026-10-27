import { useI18n } from '@templates/i18n'
import { TextLink } from '@templates/ui/text.link'
import { AppProviders } from './providers'
import { AppRoutes } from './routes'

function AppContent() {
  const { t } = useI18n()

  return (
    <>
      <TextLink href="#main-content" className="skip-link">
        {t('Skip to content')}
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
