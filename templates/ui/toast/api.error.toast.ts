import { normalizeApiError, type ApiErrorOptions } from '../../lib/api.error'
import { toast } from './toast'

/** Call once from mutation feedback. GET failures belong in their result area. */
export function showApiErrorToast(
  reason: unknown,
  options?: ApiErrorOptions & { id?: string | number },
) {
  const error = normalizeApiError(reason, options)
  if (error.source === 'cancelled') return
  return toast.error(error.message, { id: options?.id })
}
