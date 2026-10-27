import {
  PersistQueryClientProvider,
  type PersistQueryClientProviderProps,
} from '@tanstack/react-query-persist-client'
import { MutationActivity } from './mutation.activity'
import type { AriaQueryProviderProps } from './query.provider'

export interface AriaPersistQueryProviderProps extends AriaQueryProviderProps {
  persistence: PersistQueryClientProviderProps['persistOptions']
}

/** Separate opt-in entry keeps persistence runtime out of ordinary provider consumers. */
export function AriaPersistQueryProvider({
  client,
  persistence,
  children,
}: AriaPersistQueryProviderProps) {
  return (
    <PersistQueryClientProvider client={client} persistOptions={persistence}>
      <MutationActivity />
      {children}
    </PersistQueryClientProvider>
  )
}
