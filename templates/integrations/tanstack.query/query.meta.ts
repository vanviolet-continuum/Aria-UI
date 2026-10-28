import type { MutationMeta, QueryKey } from '@tanstack/react-query'

export interface MutationFeedback {
  overlay?: boolean
  label?: string
  successMessage?: string
  successDescription?: string
  errorToast?: boolean
  invalidates?: readonly QueryKey[]
}

export function mutationFeedback(meta?: MutationMeta): MutationFeedback {
  const value = meta?.aria
  return value !== null && typeof value === 'object' ? (value as MutationFeedback) : {}
}
