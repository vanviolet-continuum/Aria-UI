import { useEffect, useMemo, useState } from 'react'
import type { ColumnDef, SortState } from './types'

export function pageBounds(total: number, page: number, pageSize: number) {
  const size = Math.max(1, Math.floor(pageSize))
  const pageCount = Math.max(1, Math.ceil(total / size))
  const current = Math.max(1, Math.min(page, pageCount))
  return {
    page: current,
    pageCount,
    start: total ? (current - 1) * size + 1 : 0,
    end: Math.min(current * size, total),
    offset: (current - 1) * size,
  }
}

export function getCellValue<T>(row: T, accessor?: ColumnDef<T>['accessor']) {
  return typeof accessor === 'function' ? accessor(row) : accessor ? row[accessor] : ''
}

export function useDataTable<T>({
  data,
  columns,
  initialPageSize = 8,
  defaultSort,
  resetKey,
}: {
  data: T[]
  columns: ColumnDef<T>[]
  initialPageSize?: number
  defaultSort?: SortState
  resetKey?: string
}) {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [sort, setSort] = useState<SortState | undefined>(defaultSort)
  useEffect(() => {
    setPage(1)
  }, [resetKey])
  const sorted = useMemo(() => {
    const column = columns.find((item) => item.id === sort?.column)
    if (!sort || !column?.accessor) return data
    return [...data].sort((first, second) => {
      const a = getCellValue(first, column.accessor)
      const b = getCellValue(second, column.accessor)
      const result =
        typeof a === 'number' && typeof b === 'number'
          ? a - b
          : String(a).localeCompare(String(b), undefined, { numeric: true })
      return result * (sort.direction === 'asc' ? 1 : -1)
    })
  }, [data, columns, sort])
  const bounds = pageBounds(sorted.length, page, pageSize)
  return {
    ...bounds,
    pageSize,
    sort,
    setSort,
    setPage,
    setPageSize: (size: number) => {
      setPageSize(size)
      setPage(1)
    },
    rows: sorted.slice(bounds.offset, bounds.offset + pageSize),
    allRows: sorted,
  }
}
