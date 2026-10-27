import type { QueryKey } from '@tanstack/react-query'

export function createQueryKeys(scope: QueryKey) {
  const all = [...scope] as const
  return {
    all,
    lists: () => [...all, 'list'] as const,
    list: <T extends object>(parameters: T) => [...all, 'list', parameters] as const,
    details: () => [...all, 'detail'] as const,
    detail: (id: string | number) => [...all, 'detail', id] as const,
  }
}
