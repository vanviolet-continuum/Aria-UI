import { useState } from 'react'

export function useControllableState<T>(
  value: T | undefined,
  initial: T,
  onChange?: (value: T) => void,
) {
  const [internal, setInternal] = useState(initial)
  const current = value === undefined ? internal : value
  const set = (next: T) => {
    if (value === undefined) setInternal(next)
    if (!Object.is(current, next)) onChange?.(next)
  }
  return [current, set] as const
}
