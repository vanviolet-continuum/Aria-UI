import type { FormMessage } from '../zod/form.validation'

export interface ServerFieldProps {
  serverError?: FormMessage
  onServerErrorClear?: () => void
}

export function fieldMessage(
  errors: readonly unknown[],
  touched: boolean,
  serverError?: FormMessage,
): FormMessage | undefined {
  if (serverError) return serverError
  if (!touched) return
  for (const error of errors) {
    if (typeof error === 'string' && error) return { message: error, source: 'local' }
    if (
      error &&
      typeof error === 'object' &&
      'message' in error &&
      typeof error.message === 'string'
    )
      return {
        message: error.message,
        source: 'source' in error && error.source === 'api' ? 'api' : 'local',
      }
  }
}
