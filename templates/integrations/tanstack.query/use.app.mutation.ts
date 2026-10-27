import {
  useMutation,
  useQueryClient,
  type MutateOptions,
  type MutationFunctionContext,
  type UseMutationOptions,
} from '@tanstack/react-query'
import { useSyncExternalStore } from 'react'
import { executeApi, isApiCancellation, type ApiError } from '../../lib/api.error'
import type { SessionSnapshot } from '../../lib/session'
import { mutationFeedback, type MutationFeedback } from './query.meta'
import { queryRuntime, runMutationCallback } from './query.runtime'

export interface AppMutationOptions<TData, TVariables, TContext> extends Omit<
  UseMutationOptions<TData, ApiError, TVariables, TContext>,
  'mutationFn'
> {
  mutationFn: NonNullable<UseMutationOptions<TData, ApiError, TVariables, TContext>['mutationFn']>
  feedback?: MutationFeedback
}

export function useAppMutation<TData = unknown, TVariables = void, TContext = unknown>({
  mutationFn,
  feedback,
  meta,
  onMutate,
  onSuccess,
  onError,
  onSettled,
  ...options
}: AppMutationOptions<TData, TVariables, TContext>) {
  const client = useQueryClient()
  const runtime = queryRuntime(client)
  const retry =
    options.retry ??
    client.getMutationDefaults(options.mutationKey ?? []).retry ??
    client.getDefaultOptions().mutations?.retry ??
    false
  const snapshot = useSyncExternalStore(
    runtime.session.subscribe,
    runtime.session.getSnapshot,
    runtime.session.getSnapshot,
  )
  const current = (context: MutationFunctionContext) =>
    runtime.session.isCurrent(context.meta?.ariaSession as SessionSnapshot)
  const result = useMutation<TData, ApiError, TVariables, TContext>({
    ...options,
    retry: (count, error) => {
      if (isApiCancellation(error)) return false
      return typeof retry === 'function'
        ? retry(count, error)
        : retry === true || (typeof retry === 'number' && count < retry)
    },
    meta: { ...meta, ariaSession: snapshot, aria: { ...mutationFeedback(meta), ...feedback } },
    mutationFn: async (variables, context) => {
      const started = context.meta?.ariaSession as SessionSnapshot
      runtime.session.assertCurrent(started)
      try {
        const data = await executeApi(() => mutationFn(variables, context), runtime.apiErrorOptions)
        runtime.session.assertCurrent(started)
        return data
      } catch (error) {
        runtime.session.assertCurrent(started)
        throw error
      }
    },
    onMutate: async (variables, context) => {
      runtime.session.assertCurrent(context.meta?.ariaSession as SessionSnapshot)
      return onMutate ? await onMutate(variables, context) : (undefined as TContext)
    },
    onSuccess: (...args) =>
      current(args[3])
        ? runMutationCallback(runtime, () => onSuccess?.(...args)).then(() => {})
        : undefined,
    onError: (...args) =>
      current(args[3])
        ? runMutationCallback(runtime, () => onError?.(...args)).then(() => {})
        : undefined,
    onSettled: (...args) =>
      current(args[4])
        ? runMutationCallback(runtime, () => onSettled?.(...args)).then(() => {})
        : undefined,
  })
  const guarded = (
    callbacks?: MutateOptions<TData, ApiError, TVariables, TContext>,
  ): MutateOptions<TData, ApiError, TVariables, TContext> => {
    const started = runtime.session.getSnapshot()
    return {
      onSuccess: (...args) => {
        if (runtime.session.isCurrent(started))
          void runMutationCallback(runtime, () => callbacks?.onSuccess?.(...args))
      },
      onError: (...args) => {
        if (runtime.session.isCurrent(started))
          void runMutationCallback(runtime, () => callbacks?.onError?.(...args))
      },
      onSettled: (...args) => {
        if (runtime.session.isCurrent(started))
          void runMutationCallback(runtime, () => callbacks?.onSettled?.(...args))
      },
    }
  }
  return {
    ...result,
    mutate: (
      variables: TVariables,
      callbacks?: MutateOptions<TData, ApiError, TVariables, TContext>,
    ) => result.mutate(variables, guarded(callbacks)),
    mutateAsync: async (
      variables: TVariables,
      callbacks?: MutateOptions<TData, ApiError, TVariables, TContext>,
    ) => {
      const started = runtime.session.getSnapshot()
      const data = await result.mutateAsync(variables, guarded(callbacks))
      runtime.session.assertCurrent(started)
      return data
    },
  }
}
