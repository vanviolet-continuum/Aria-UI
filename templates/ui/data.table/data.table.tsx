import { useI18n } from '../../i18n/use.i18n'
import clsx from 'clsx'
import { useMemo, useState, type ReactNode } from 'react'
import { TablePagination } from './table.pagination'
import { TableHead } from './table.head'
import { TableBody } from './table.body'
import { useDataTable } from './use.data.table'
import type {
  ColumnDef,
  ColumnVisibility,
  ColumnPinning,
  RowSelection,
  ServerTableState,
  SortState,
} from './types'
import { getColumnLayout } from './column.layout'
import { TableScrollArea } from './table.scroll.area'
import { getDefaultColumnPinning, resolveColumnPinning } from './column.pinning'

export interface DataTableProps<T> {
  data: T[]
  columns: ColumnDef<T>[]
  columnVisibility?: ColumnVisibility
  columnPinning?: ColumnPinning
  onColumnPinningChange?: (pinning: ColumnPinning) => void
  pinable?: boolean
  getRowId: (row: T) => string
  selection?: RowSelection
  defaultSort?: SortState
  initialPageSize?: number
  pagination?: boolean
  server?: ServerTableState
  loading?: boolean
  loadingLabel?: string
  error?: unknown
  onRetry?: () => void
  emptyState?: ReactNode
  resetKey?: string
  itemLabel?: string
  className?: string
  'aria-label'?: string
}
export function DataTable<T>({
  data,
  columns,
  columnVisibility,
  columnPinning,
  onColumnPinningChange,
  pinable = false,
  getRowId,
  selection,
  defaultSort,
  initialPageSize = 8,
  pagination = true,
  server,
  loading,
  loadingLabel,
  error,
  onRetry,
  emptyState,
  resetKey,
  itemLabel,
  className,
  'aria-label': label = 'Data table',
}: DataTableProps<T>) {
  const { text: localize } = useI18n()
  const [internalPinning, setInternalPinning] = useState<ColumnPinning>(() =>
    getDefaultColumnPinning(columns),
  )
  const supportsPinning = pinable || columns.some((column) => column.pinable || column.defaultPin)
  const pinning = useMemo(
    () =>
      columnPinning !== undefined || supportsPinning
        ? resolveColumnPinning(columns, columnPinning ?? internalPinning, pinable)
        : undefined,
    [columns, columnPinning, internalPinning, pinable, supportsPinning],
  )
  const changePin = (id: string, side: 'left' | 'right' | 'none') => {
    const column = columns.find((item) => item.id === id)
    if (!column || !(column.pinable ?? pinable)) return
    const current = pinning ?? { left: [], right: [] }
    const next: ColumnPinning = {
      left: current.left.filter((value) => value !== id),
      right: current.right.filter((value) => value !== id),
    }
    if (side !== 'none') next[side].push(id)
    const resolved = resolveColumnPinning(columns, next, pinable)
    if (columnPinning === undefined) setInternalPinning(resolved)
    onColumnPinningChange?.(resolved)
  }

  const table = useDataTable({
    data: server ? [] : data,
    columns,
    initialPageSize: pagination ? initialPageSize : Math.max(1, data.length),
    defaultSort,
    resetKey,
  })
  const rows = server ? data : pagination ? table.rows : table.allRows
  const layout = useMemo(
    () => getColumnLayout(columns, columnVisibility, pinning, !!selection),
    [columns, columnVisibility, pinning, !!selection],
  )
  const minWidth = pinning
    ? layout.reduce((sum, item) => sum + Number(item.style.width), selection ? 44 : 0)
    : undefined
  // One column absorbs spare space; every table still fills its container.
  const flexibleColumn = layout.find((item) => !item.pin)?.column.id ?? layout[0]?.column.id
  const renderedLayout = layout.map((item, index) => ({
    ...item,
    style: {
      ...item.style,
      ...(pinning && item.column.id === flexibleColumn ? { width: undefined } : {}),
      ...(item.pin
        ? { [item.pin]: `var(--table-pin-offset-${index}, ${item.style[item.pin]}px)` }
        : {}),
    },
  }))
  const ids = rows.map(getRowId)
  const selected = selection?.selectedIds ?? []
  const allSelected = !!ids.length && ids.every((id) => selected.includes(id))
  const toggleAll = (checked: boolean) =>
    selection?.onChange(
      checked ? [...new Set([...selected, ...ids])] : selected.filter((id) => !ids.includes(id)),
    )
  return (
    <div className="ui-table-container" aria-busy={loading}>
      <TableScrollArea
        label={localize(label)}
        layoutKey={
          layout
            .map((item) => `${item.column.id}:${item.pin ?? ''}:${item.style.width}`)
            .join('|') + Number(!!selection)
        }
        leftWidth={layout
          .filter((item) => item.pin === 'left')
          .reduce((sum, item) => sum + Number(item.style.width), pinning && selection ? 44 : 0)}
        rightWidth={layout
          .filter((item) => item.pin === 'right')
          .reduce((sum, item) => sum + Number(item.style.width), 0)}
      >
        <table
          aria-label={localize(label)}
          className={clsx(
            'data-table ui-data-table',
            pinning && 'ui-data-table--pinned',
            className,
          )}
          style={{ minWidth, width: '100%' }}
        >
          {pinning && (
            <colgroup>
              {selection && <col style={{ width: 44 }} />}
              {renderedLayout.map(({ column, style }) => (
                <col key={column.id} style={{ width: style.width }} />
              ))}
            </colgroup>
          )}
          <TableHead
            layout={renderedLayout}
            pinSelection={!!pinning}
            pinable={pinable}
            onPin={columnPinning === undefined || onColumnPinningChange ? changePin : undefined}
            selection={selection}
            allSelected={allSelected}
            someSelected={ids.some((id) => selected.includes(id))}
            onToggleAll={toggleAll}
            sort={server?.sort ?? table.sort}
            onSort={server?.onSortChange ?? table.setSort}
            loading={loading}
          />
          <TableBody
            rows={rows}
            layout={renderedLayout}
            pinSelection={!!pinning}
            getRowId={getRowId}
            selection={selection}
            loading={loading}
            loadingLabel={localize(loadingLabel)}
            error={error}
            emptyState={emptyState}
            onRetry={onRetry}
          />
        </table>
      </TableScrollArea>
      {pagination && (
        <TablePagination
          page={server?.page ?? table.page}
          pageSize={server?.pageSize ?? table.pageSize}
          totalItems={server?.totalItems ?? data.length}
          onPageChange={server?.onPageChange ?? table.setPage}
          onPageSizeChange={server?.onPageSizeChange ?? table.setPageSize}
          itemLabel={localize(itemLabel)}
          disabled={loading || !!error}
        />
      )}
    </div>
  )
}
