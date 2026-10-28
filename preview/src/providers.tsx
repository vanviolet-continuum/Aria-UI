import type { ReactNode } from 'react'
import { WorkspaceProvider } from './data/workspace/workspace.provider'
import { OperationsProvider } from './data/operations/operations.provider'
import { ScenariosProvider } from './data/scenarios/scenarios.provider'
export function DemoProviders({ children }: { children: ReactNode }) {
  return (
    <WorkspaceProvider>
      <OperationsProvider>
        <ScenariosProvider>{children}</ScenariosProvider>
      </OperationsProvider>
    </WorkspaceProvider>
  )
}
