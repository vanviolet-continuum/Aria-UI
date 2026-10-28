import { useI18n } from '@templates/i18n'
import { useNavigate, useRouteError } from 'react-router-dom'
import { EmptyState } from '@templates/ui/empty.state'
import { Button } from '@templates/ui/button'
import { LoadingIllustration } from '@templates/ui/illustrations/states/loading.illustration'
export function LoadingPage() {
  const { t } = useI18n()
  return (
    <div className="grid min-h-96 place-items-center p-aria-xl" role="status">
      <LoadingIllustration size={90} label={t('Loading workspace…')} />
    </div>
  )
}
export function NotFoundPage() {
  const { t } = useI18n(),
    navigate = useNavigate()
  return (
    <EmptyState
      title={t('Page not found')}
      description={t('Let’s get you back to the workspace.')}
      action={
        <Button onClick={() => navigate('/preview/')} variant="contained">
          {t('Back to overview')}
        </Button>
      }
    />
  )
}
export function RouteError() {
  useRouteError()
  const { t } = useI18n()
  return (
    <EmptyState
      title={t('This page could not be loaded.')}
      description={t('Reload the page to try again.')}
      action={<Button onClick={() => window.location.reload()}>{t('Reload page')}</Button>}
    />
  )
}
