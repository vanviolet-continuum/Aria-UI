import type { QueryClient } from '@tanstack/react-query'
import type { PersistQueryClientProviderProps } from '@tanstack/react-query-persist-client'
import { getQuerySession } from './query.runtime'

type Persistence = PersistQueryClientProviderProps['persistOptions']
export function createQueryPersistence(
  client: QueryClient,
  {
    key,
    storage,
    maxAge = 60 * 60_000,
    buster = 'v1',
  }: {
    /** Include application, account and tenant in this key. */
    key: string
    storage?: Storage
    maxAge?: number
    buster?: string
  },
): Persistence | undefined {
  let target = storage
  if (!target) {
    try {
      target = window.localStorage
    } catch {
      return
    }
  }
  const session = getQuerySession(client)
  const snapshot = session.getSnapshot()
  const usable = () => session.isCurrent(snapshot)
  const defaults = client.getDefaultOptions()
  client.setDefaultOptions({
    ...defaults,
    queries: {
      ...defaults.queries,
      gcTime: Math.max(defaults.queries?.gcTime ?? 5 * 60_000, maxAge),
    },
  })
  return {
    // Synchronous writes have no delayed throttle that could resurrect a cleared session.
    persister: {
      persistClient(value) {
        if (!usable()) return
        try {
          target.setItem(key, JSON.stringify(value))
        } catch {
          /* Persistence is best effort. */
        }
      },
      restoreClient() {
        if (!usable()) return
        try {
          const value = target.getItem(key)
          return value ? JSON.parse(value) : undefined
        } catch {
          try {
            target.removeItem(key)
          } catch {
            /* Restricted storage. */
          }
          return
        }
      },
      removeClient() {
        try {
          target.removeItem(key)
        } catch {
          /* Restricted storage. */
        }
      },
    },
    maxAge,
    buster,
    dehydrateOptions: {
      shouldDehydrateMutation: () => false,
      shouldDehydrateQuery: (query) =>
        usable() && query.state.status === 'success' && query.meta?.persist === true,
    },
  }
}

/** Old writes may still finish on the server; their UI effects are invalidated immediately. */
export async function clearQuerySession(
  client: QueryClient,
  persistence?: Persistence,
  nextKey: string | null = null,
) {
  getQuerySession(client).advance(nextKey)
  const cancel = client.cancelQueries()
  client.clear()
  await persistence?.persister.removeClient()
  await cancel
}
