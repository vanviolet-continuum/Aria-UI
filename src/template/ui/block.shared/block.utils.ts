import type { ReactNode } from 'react'

/** Keep numeric values such as 0; omit empty optional regions. */
export function hasContent(value: ReactNode): boolean {
  if (Array.isArray(value)) return value.some(hasContent)
  return value !== undefined && value !== null && typeof value !== 'boolean' && value !== ''
}

export function mergeIds(...values: (string | undefined)[]) {
  return (
    [...new Set(values.flatMap((value) => value?.split(/\s+/).filter(Boolean) ?? []))].join(' ') ||
    undefined
  )
}
