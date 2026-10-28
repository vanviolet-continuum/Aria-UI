import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { DemoProviders } from './providers'
export function DemoApp() {
  return (
    <DemoProviders>
      <RouterProvider router={router} />
    </DemoProviders>
  )
}
