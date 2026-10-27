import { useState } from 'react'
import type { ColumnDef, ColumnPinning, ColumnVisibility } from './types'
import { getDefaultColumnPinning } from './column.pinning'

export function useTableColumns<T = unknown>(
  defaults: {
    columns?: ColumnDef<T>[]
    visibility?: ColumnVisibility
    pinning?: ColumnPinning
  } = {},
) {
  const [visibility, setVisibility] = useState<ColumnVisibility>(defaults.visibility ?? {})
  const [pinning, setPinning] = useState<ColumnPinning>(
    () => defaults.pinning ?? getDefaultColumnPinning(defaults.columns ?? []),
  )
  return {
    visibility,
    pinning,
    setVisibility,
    setPinning,
    reset: () => {
      setVisibility(defaults.visibility ?? {})
      setPinning(defaults.pinning ?? getDefaultColumnPinning(defaults.columns ?? []))
    },
  }
}
