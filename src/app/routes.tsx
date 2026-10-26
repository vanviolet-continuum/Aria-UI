import { useI18n } from '../template/i18n'
import { lazy, Suspense } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Button, LoadingIllustration, NotFoundState } from '../template'
import { StarterLayout } from './layout'
import { HomePage } from './pages/home-page'

const ThemeStudio = lazy(() =>
  import('../template/theme/studio').then((module) => ({ default: module.ThemeStudio })),
)
function MissingPage() {
  const { t: tr } = useI18n()

  const navigate = useNavigate()
  return (
    <NotFoundState action={<Button onClick={() => navigate('/')}>{tr('Back to home')}</Button>} />
  )
}
export function AppRoutes() {
  const { t: tr } = useI18n()

  return (
    <Routes>
      <Route element={<StarterLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="settings/appearance"
          element={
            <Suspense
              fallback={
                <div className="app-loading" role="status">
                  <LoadingIllustration size={65} label={tr('')} />
                  {tr('Preparing your workspace…')}
                </div>
              }
            >
              <ThemeStudio />
            </Suspense>
          }
        />
        <Route path="*" element={<MissingPage />} />
      </Route>
    </Routes>
  )
}
