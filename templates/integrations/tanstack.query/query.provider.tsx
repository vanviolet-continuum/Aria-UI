import type { ReactNode } from 'react'
import { QueryClientProvider, type QueryClient } from '@tanstack/react-query'
import { MutationActivity } from './mutation.activity'

export interface AriaQueryProviderProps {
  client: QueryClient
  children: ReactNode
}

/** Render inside TemplateProvider so feedback shares its existing overlay and toaster. */
export function AriaQueryProvider({ client, children }: AriaQueryProviderProps) {
  return (
    <QueryClientProvider client={client}>
      <MutationActivity />
      {children}
    </QueryClientProvider>
  )
}
