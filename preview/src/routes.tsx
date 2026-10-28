import { lazy } from 'react'
import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom'
import DemoLayout from './layouts/admin/root'
import { NotFoundPage, RouteError } from './components/route.fallback'
const Home = lazy(() => import('./pages/home/root'))
const Dashboard = lazy(() => import('./pages/workspace/dashboard/root'))
const Users = lazy(() => import('./pages/workspace/users/root'))
const Projects = lazy(() => import('./pages/workspace/projects/root'))
const Tasks = lazy(() => import('./pages/workspace/tasks/root'))
const Calendar = lazy(() => import('./pages/workspace/calendar/root'))
const Clients = lazy(() => import('./pages/workspace/clients/root'))
const Invoices = lazy(() => import('./pages/workspace/invoices/root'))
const Documents = lazy(() => import('./pages/workspace/documents/root'))
const Activity = lazy(() => import('./pages/workspace/activity/root'))
const Settings = lazy(() => import('./pages/workspace/settings/root'))
const Commerce = lazy(() => import('./pages/commerce/overview/root'))
const Products = lazy(() => import('./pages/commerce/products/root'))
const Orders = lazy(() => import('./pages/commerce/orders/root'))
const Inventory = lazy(() => import('./pages/commerce/inventory/root'))
const Customers = lazy(() => import('./pages/commerce/customers/root'))
const Learning = lazy(() => import('./pages/learning/overview/root'))
const Courses = lazy(() => import('./pages/learning/courses/root'))
const Students = lazy(() => import('./pages/learning/students/root'))
const Enrollments = lazy(() => import('./pages/learning/enrollments/root'))
const Classroom = lazy(() => import('./pages/learning/classroom/root'))
const CourseBuilder = lazy(() => import('./pages/learning/course.builder/root'))
const Components = lazy(() => import('./pages/catalog/components/root'))
const Icons = lazy(() => import('./pages/catalog/icons/root'))
const Illustrations = lazy(() => import('./pages/catalog/illustrations/root'))
const Theme = lazy(() => import('./pages/catalog/theme/root'))
const Kit = lazy(() =>
  import('./pages/catalog/overview/root').then((module) => ({ default: module.OverviewPage })),
)
function PreviousLink({ to }: { to: string }) {
  const location = useLocation()
  return <Navigate replace to={to + location.search + location.hash} />
}
export const router = createBrowserRouter([
  {
    path: '/preview',
    element: <DemoLayout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home /> },
      { path: 'workspace', element: <Dashboard /> },
      { path: 'workspace/users', element: <Users /> },
      { path: 'workspace/projects', element: <Projects /> },
      { path: 'workspace/tasks', element: <Tasks /> },
      { path: 'workspace/calendar', element: <Calendar /> },
      { path: 'workspace/clients', element: <Clients /> },
      { path: 'workspace/invoices', element: <Invoices /> },
      { path: 'workspace/documents', element: <Documents /> },
      { path: 'workspace/activity', element: <Activity /> },
      { path: 'workspace/settings', element: <Settings /> },
      { path: 'commerce', element: <Commerce /> },
      { path: 'commerce/products', element: <Products /> },
      { path: 'commerce/orders', element: <Orders /> },
      { path: 'commerce/inventory', element: <Inventory /> },
      { path: 'commerce/customers', element: <Customers /> },
      { path: 'learning', element: <Learning /> },
      { path: 'learning/courses', element: <Courses /> },
      { path: 'learning/students', element: <Students /> },
      { path: 'learning/enrollments', element: <Enrollments /> },
      { path: 'learning/classroom', element: <Classroom /> },
      { path: 'learning/course.builder', element: <CourseBuilder /> },
      { path: 'catalog/overview', element: <Kit /> },
      { path: 'catalog/components', element: <Components /> },
      { path: 'catalog/icons', element: <Icons /> },
      { path: 'catalog/illustrations', element: <Illustrations /> },
      { path: 'catalog/theme', element: <Theme /> },
      ...[
        'users',
        'projects',
        'tasks',
        'calendar',
        'clients',
        'invoices',
        'documents',
        'activity',
        'settings',
      ].map((path) => ({ path, element: <PreviousLink to={'/preview/workspace/' + path} /> })),
      ...['components', 'icons', 'illustrations', 'theme', 'playground'].map((path) => ({
        path,
        element: (
          <PreviousLink to={'/preview/catalog/' + (path === 'playground' ? 'overview' : path)} />
        ),
      })),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
