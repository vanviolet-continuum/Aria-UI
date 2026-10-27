import type { CSSProperties } from 'react'
import type { ColumnDef, ColumnPinning, ColumnVisibility } from './types'

export interface ColumnLayout<T> {
  column: ColumnDef<T>
  style: CSSProperties
  pin?: 'left' | 'right'
  edge?: boolean
}
export function getColumnLayout<T>(
  columns: ColumnDef<T>[],
  visibility: ColumnVisibility = {},
  pinning?: ColumnPinning,
  selection = false,
): ColumnLayout<T>[] {
  const visible = columns.filter(
    (column) => column.enableHiding === false || visibility[column.id] !== false,
  )
  const left = visible.filter((column) => pinning?.left.includes(column.id))
  const right = visible.filter(
    (column) => pinning?.right.includes(column.id) && !pinning.left.includes(column.id),
  )
  const middle = visible.filter((column) => !left.includes(column) && !right.includes(column))
  const ordered = [...left, ...middle, ...right]
  const widthOf = (column: ColumnDef<T>) => {
    const width =
      typeof column.width === 'number'
        ? column.width
        : /^\d+(?:\.\d+)?px$/.test(column.width ?? '')
          ? parseFloat(column.width!)
          : 180
    return Math.max(44, width)
  }
  return ordered.map((column) => {
    const pin = left.includes(column) ? 'left' : right.includes(column) ? 'right' : undefined
    const side =
      pin === 'left' ? left.slice(0, left.indexOf(column)) : right.slice(right.indexOf(column) + 1)
    const offset = side.reduce(
      (sum, item) => sum + widthOf(item),
      pin === 'left' && selection ? 44 : 0,
    )
    return {
      column,
      pin,
      edge: pin === 'left' ? column === left.at(-1) : pin === 'right' && column === right[0],
      style: {
        width: pinning ? widthOf(column) : column.width,
        textAlign: column.align,
        ...(pin ? { position: 'sticky', [pin]: offset } : {}),
      },
    }
  })
}
