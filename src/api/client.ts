import { executeApi, type ApiRequestOptions } from '@templates/lib/api.error'
import { apiConfig } from '@/config/api.config'

/** Supply the generated SDK call here; no endpoint or generated DTO is invented by the starter. */
export function apiRequest<T>(operation: () => Promise<T>, options?: ApiRequestOptions<T>) {
  return executeApi(operation, { ...apiConfig.errors, ...options })
}
