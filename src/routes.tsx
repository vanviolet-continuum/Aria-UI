import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { appConfig } from './config/app.config'
import { AdminRoot } from './layouts/admin/root'
import { HomePage } from './pages/home/root'

// A data router supports optional useUnsavedRouteGuard without changing the starter menu.
const router = createBrowserRouter([
  {
    element: <AdminRoot />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <Navigate to={appConfig.home} replace /> },
    ],
  },
])
export function AppRoutes() {
  return <RouterProvider router={router} />
}
