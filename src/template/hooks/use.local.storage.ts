import { useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initial: T,
  validate: (value: unknown) => value is T,
) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      const parsed: unknown = raw ? JSON.parse(raw) : null
      return validate(parsed) ? parsed : initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* The workspace remains usable when browser storage is unavailable. */
    }
  }, [key, value])

  return [value, setValue] as const
}
