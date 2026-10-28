import { useCallback, useMemo, useState } from 'react'
import type { z } from 'zod'

/** Sync Zod form: validate on every change; expose errors from the first interaction. */
export function useZodValidation<T extends z.ZodType>(schema: T, values: z.input<T>) {
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)
  const parsed = useMemo(() => schema.safeParse(values), [schema, values])
  const issues: Record<string, string> = {}
  if (!parsed.success)
    for (const issue of parsed.error.issues) {
      const name = issue.path.map(String).join('.') || '_form'
      issues[name] ??= issue.message
    }
  const errors = Object.fromEntries(
    Object.entries(issues).filter(
      ([name]) => submitted || touched[name] || touched[name.split('.')[0]],
    ),
  )
  const touch = useCallback(
    (name: string) =>
      setTouched((previous) => (previous[name] ? previous : { ...previous, [name]: true })),
    [],
  )
  const reset = useCallback(() => {
    setTouched({})
    setSubmitted(false)
  }, [])
  const validate = () => {
    setSubmitted(true)
    return schema.safeParse(values)
  }
  return { errors, issues, isValid: parsed.success, touch, reset, validate }
}

/** Use with TanStack Form so errors appear and clear during typing. */
export function liveFormValidators<T extends z.ZodType>(schema: T) {
  // TanStack runs onChange validators on submit too. One error channel prevents stale
  // blur/submit messages from surviving after a value becomes valid during typing.
  return { onChange: schema }
}
