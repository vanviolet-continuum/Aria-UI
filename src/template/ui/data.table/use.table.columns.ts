import { useState } from 'react'
import type { ColumnPinning, ColumnVisibility } from './types'

export function useTableColumns(
  defaults: { visibility?: ColumnVisibility; pinning?: ColumnPinning } = {},
) {
  const [visibility, setVisibility] = useState<ColumnVisibility>(defaults.visibility ?? {})
  const [pinning, setPinning] = useState<ColumnPinning>(defaults.pinning ?? { left: [], right: [] })
  return {
    visibility,
    pinning,
    setVisibility,
    setPinning,
    reset: () => {
      setVisibility(defaults.visibility ?? {})
      setPinning(defaults.pinning ?? { left: [], right: [] })
    },
  }
}
