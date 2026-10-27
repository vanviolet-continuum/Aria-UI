import { useI18n } from '../template/i18n'
import { lazy, Suspense, type ReactNode } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Button, LoadingIllustration, NotFoundState } from '../template'
import { StarterLayout } from './layout'
import { HomePage } from './pages/home.page'
import { DetailsPage } from './pages/details.page'

const ThemeStudio = lazy(() =>
  import('../template/theme/studio').then((module) => ({ default: module.ThemeStudio })),
)
const TableExamplePage = lazy(() =>
  import('./pages/table.example.page').then((module) => ({ default: module.TableExamplePage })),
)
const WizardExamplePage = lazy(() =>
  import('./pages/wizard.example.page').then((module) => ({ default: module.WizardExamplePage })),
)
const ComponentsPage = lazy(() =>
  import('./pages/components.page').then((module) => ({ default: module.ComponentsPage })),
)
const IllustrationsPage = lazy(() =>
  import('./pages/illustrations.page').then((module) => ({ default: module.IllustrationsPage })),
)

function DeferredPage({ children }: { children: ReactNode }) {
  const { t: tr } = useI18n()
  return (
    <Suspense
      fallback={
        <div className="app-loading" role="status">
          <LoadingIllustration size={65} label={tr('')} />
          {tr('Preparing your workspace…')}
        </div>
      }
    >
      {children}
    </Suspense>
  )
}
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
        <Route path="details" element={<DetailsPage />} />
        <Route
          path="illustrations"
          element={
            <DeferredPage>
              <IllustrationsPage />
            </DeferredPage>
          }
        />
        <Route
          path="table-example"
          element={
            <DeferredPage>
              <TableExamplePage />
            </DeferredPage>
          }
        />
        <Route
          path="wizard"
          element={
            <DeferredPage>
              <WizardExamplePage />
            </DeferredPage>
          }
        />
        <Route
          path="components"
          element={
            <DeferredPage>
              <ComponentsPage />
            </DeferredPage>
          }
        />
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
