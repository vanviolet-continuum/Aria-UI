import { Navigate, Route, Routes } from 'react-router-dom'
import { appConfig } from './config/app.config'
import { AdminRoot } from './layouts/admin/root'
import { HomePage } from './pages/home/root'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AdminRoot />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Navigate to={appConfig.home} replace />} />
      </Route>
    </Routes>
  )
}
