import type { ReactNode } from 'react'

export interface ColumnDef<T> {
  id: string
  header: ReactNode
  accessor?: keyof T | ((row: T) => string | number)
  cell?: (row: T, index: number) => ReactNode
  sortable?: boolean
  className?: string
  width?: string | number
  align?: 'left' | 'center' | 'right'
  /** Plain text for column controls when the header is JSX. */
  label?: string
  enableHiding?: boolean
}
export type ColumnVisibility = Record<string, boolean>
export interface ColumnPinning {
  left: string[]
  right: string[]
}
export interface SortState {
  column: string
  direction: 'asc' | 'desc'
}
export interface RowSelection {
  selectedIds: string[]
  onChange: (ids: string[]) => void
}
export interface ServerTableState {
  page: number
  pageSize: number
  totalItems: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
  sort?: SortState
  onSortChange?: (sort: SortState) => void
}
