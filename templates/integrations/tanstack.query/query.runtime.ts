import type { MutationFunctionContext, QueryClient } from '@tanstack/react-query'
import { isApiCancellation, type ApiErrorOptions } from '../../lib/api.error'
import { createSessionScope, type SessionScope, type SessionSnapshot } from '../../lib/session'

export interface QueryRuntime {
  session: SessionScope
  apiErrorOptions?: ApiErrorOptions
  onCallbackError: (error: unknown) => void
}
const runtimes = new WeakMap<QueryClient, QueryRuntime>()
export function queryRuntime(client: QueryClient): QueryRuntime {
  let runtime = runtimes.get(client)
  if (!runtime) {
    runtime = {
      session: createSessionScope(),
      onCallbackError: (error) => console.error('Aria UI mutation callback failed:', error),
    }
    runtimes.set(client, runtime)
  }
  return runtime
}
export function getQuerySession(client: QueryClient): SessionScope {
  return queryRuntime(client).session
}
export function assertMutationSession(context: MutationFunctionContext): void {
  getQuerySession(context.client).assertCurrent(context.meta?.ariaSession as SessionSnapshot)
}

/** A UI callback cannot turn a completed write into an API failure. */
export async function runMutationCallback<T>(
  runtime: QueryRuntime,
  callback: (() => T | Promise<T>) | undefined,
): Promise<T | undefined> {
  try {
    return await callback?.()
  } catch (error) {
    if (isApiCancellation(error)) return
    try {
      runtime.onCallbackError(error)
    } catch (reportError) {
      console.error(reportError)
    }
  }
}
