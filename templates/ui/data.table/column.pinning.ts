import type { ColumnDef, ColumnPinning } from './types'

export function getDefaultColumnPinning<T>(columns: ColumnDef<T>[]): ColumnPinning {
  return {
    left: columns.filter((column) => column.defaultPin === 'left').map((column) => column.id),
    right: columns.filter((column) => column.defaultPin === 'right').map((column) => column.id),
  }
}

/** Fixed defaults take precedence over both internal and controlled pinning state. */
export function resolveColumnPinning<T>(
  columns: ColumnDef<T>[],
  pinning: ColumnPinning,
  pinable = false,
): ColumnPinning {
  const fixed = columns.filter((column) => column.defaultPin && !(column.pinable ?? pinable))
  const fixedIds = new Set(fixed.map((column) => column.id))
  const left = [
    ...new Set([
      ...fixed.filter((column) => column.defaultPin === 'left').map((column) => column.id),
      ...pinning.left.filter((id) => !fixedIds.has(id)),
    ]),
  ]
  const right = [
    ...new Set([
      ...pinning.right.filter((id) => !fixedIds.has(id)),
      ...fixed.filter((column) => column.defaultPin === 'right').map((column) => column.id),
    ]),
  ].filter((id) => !left.includes(id))
  return { left, right }
}
