import { useI18n } from '../../src/template/i18n'
import { lazy, Suspense } from 'react'
import { ExampleProviders } from './providers'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../clinic/layout/app-layout'
import { StocksPage } from '../clinic/stocks/pages/stocks-page'
import { directories } from '../clinic/data/directories'
import { LoadingIllustration } from '@/template/ui/illustrations'
import { NotFoundPage } from '../clinic/not-found/pages/not-found-page'

const DashboardPage = lazy(() =>
  import('../clinic/dashboard/pages/dashboard-page').then((module) => ({
    default: module.DashboardPage,
  })),
)
const DirectoryPage = lazy(() =>
  import('../clinic/directory/pages/directory-page').then((module) => ({
    default: module.DirectoryPage,
  })),
)
const ReportsPage = lazy(() =>
  import('../clinic/reports/pages/reports-page').then((module) => ({
    default: module.ReportsPage,
  })),
)
const SupportPage = lazy(() =>
  import('../clinic/support/pages/support-page').then((module) => ({
    default: module.SupportPage,
  })),
)
const ComponentsPage = lazy(() =>
  import('../playground/pages/components-page').then((module) => ({
    default: module.ComponentsPage,
  })),
)
const CalendarPage = lazy(() =>
  import('../workflows/calendar/calendar-page').then((module) => ({
    default: module.CalendarPage,
  })),
)
const WizardPage = lazy(() =>
  import('../workflows/wizard/wizard-page').then((module) => ({ default: module.WizardPage })),
)
const ThemeSettingsPage = lazy(() =>
  import('@/template/theme/studio/theme-studio').then((module) => ({
    default: module.ThemeStudio,
  })),
)

function AppContent() {
  const { t: tr } = useI18n()

  return (
    <>
      <a href="#main-content" className="skip-link">
        {tr('Skip to content')}
      </a>
      <Suspense
        fallback={
          <div className="app-loading" role="status">
            <LoadingIllustration size={65} label={tr('')} />
            {tr('Preparing your workspace…')}
          </div>
        }
      >
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/stocks" replace />} />
            <Route path="stocks" element={<StocksPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            {Object.keys(directories).map((page) => (
              <Route key={page} path={page} element={<DirectoryPage key={page} page={page} />} />
            ))}
            <Route path="components" element={<ComponentsPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="wizard" element={<WizardPage />} />
            <Route path="settings/appearance" element={<ThemeSettingsPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default function App() {
  return (
    <ExampleProviders>
      <AppContent />
    </ExampleProviders>
  )
}
