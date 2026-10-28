import { createElement } from 'react'
import { normalizeApiError, type ApiErrorOptions } from '../../lib/api.error'
import { useI18n } from '../../i18n/use.i18n'
import { toast } from './toast'

function FailureTitle() {
  return useI18n().t('Unable to complete the action.')
}
/** API text stays intact in the description. GET errors stay in the result area. */
export function showApiErrorToast(
  reason: unknown,
  options?: ApiErrorOptions & { id?: string | number },
) {
  const error = normalizeApiError(reason, options)
  if (error.source === 'cancelled') return
  return toast.error(createElement(FailureTitle), { id: options?.id, description: error.message })
}
