import { useCallback, useRef, useState } from 'react'
import type { AnyFormApi } from '@tanstack/react-form'
import { z } from 'zod'
import { isApiCancellation, normalizeApiError } from '../../lib/api.error'
import { apiFieldMessages, zodFieldMessages, type FormMessage } from '../zod/form.validation'
import { FormSubmissionError } from './submit.form'

/** Stores raw server messages in both the rendering adapter and TanStack field meta. */
export function useApiFormErrors() {
  const [errors, setErrors] = useState<Record<string, FormMessage>>({})
  const target = useRef<AnyFormApi | undefined>(undefined)
  const current = useRef<Record<string, FormMessage>>({})
  const replace = useCallback((next: Record<string, FormMessage>, form?: AnyFormApi) => {
    if (form) target.current = form
    const api = target.current
    for (const name of new Set([...Object.keys(current.current), ...Object.keys(next)])) {
      if (name === '_form') continue
      api?.setFieldMeta(name, (previous) => ({
        ...previous,
        isTouched: true,
        errorMap: { ...previous.errorMap, onServer: next[name] },
        errorSourceMap: { ...previous.errorSourceMap, onServer: 'form' },
      }))
    }
    current.current = next
    setErrors(next)
    return next
  }, [])
  const clear = useCallback(
    (name?: string) => {
      if (!name) return replace({})
      const next = { ...current.current }
      delete next[name]
      // Non-field request errors must not permanently disable retry.
      delete next._form
      return replace(next)
    },
    [replace],
  )
  const apply = useCallback(
    (reason: unknown, fields?: Record<string, string>, form?: AnyFormApi) =>
      replace(apiFieldMessages(reason, fields), form),
    [replace],
  )
  const run = useCallback(
    async <T>(
      form: AnyFormApi,
      operation: () => Promise<T>,
      fields?: Record<string, string>,
    ): Promise<T> => {
      target.current = form
      clear()
      try {
        return await operation()
      } catch (reason) {
        if (isApiCancellation(reason)) throw reason
        const local = reason instanceof z.ZodError
        const next = local ? zodFieldMessages(reason) : apiFieldMessages(reason, fields)
        if (!Object.keys(next).length) {
          const error = normalizeApiError(reason)
          next._form = { message: error.message, source: error.source === 'api' ? 'api' : 'local' }
        }
        replace(next, form)
        // Rejection keeps isSubmitSuccessful=false. The native submit adapter consumes this marker.
        throw new FormSubmissionError(reason)
      }
    },
    [clear, replace],
  )
  return { errors, apply, clear, run }
}
