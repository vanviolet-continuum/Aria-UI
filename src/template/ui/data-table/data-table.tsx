import { useI18n } from '../../i18n/use-i18n'
import clsx from 'clsx'
import { useMemo, type ReactNode } from 'react'
import { EmptyState } from '../empty-state/empty-state'
import { TablePagination } from './table-pagination'
import { TableHead } from './table-head'
import { TableBody } from './table-body'
import { useDataTable } from './use-data-table'
import type {
  ColumnDef,
  ColumnVisibility,
  ColumnPinning,
  RowSelection,
  ServerTableState,
  SortState,
} from './types'
import { getColumnLayout } from './column-layout'
import { TableScrollArea } from './table-scroll-area'

export interface DataTableProps<T> {
  data: T[]
  columns: ColumnDef<T>[]
  columnVisibility?: ColumnVisibility
  columnPinning?: ColumnPinning
  getRowId: (row: T) => string
  selection?: RowSelection
  defaultSort?: SortState
  initialPageSize?: number
  pagination?: boolean
  server?: ServerTableState
  loading?: boolean
  loadingLabel?: string
  error?: string | null
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

  const table = useDataTable({
    data: server ? [] : data,
    columns,
    initialPageSize: pagination ? initialPageSize : Math.max(1, data.length),
    defaultSort,
    resetKey,
  })
  const rows = server ? data : pagination ? table.rows : table.allRows
  const layout = useMemo(
    () => getColumnLayout(columns, columnVisibility, columnPinning, !!selection),
    [columns, columnVisibility, columnPinning, !!selection],
  )
  const minWidth = columnPinning
    ? layout.reduce((sum, item) => sum + Number(item.style.width), selection ? 44 : 0)
    : undefined
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
        leftWidth={layout
          .filter((item) => item.pin === 'left')
          .reduce(
            (sum, item) => sum + Number(item.style.width),
            columnPinning && selection ? 44 : 0,
          )}
        rightWidth={layout
          .filter((item) => item.pin === 'right')
          .reduce((sum, item) => sum + Number(item.style.width), 0)}
      >
        <table
          aria-label={localize(label)}
          className={clsx(
            'data-table ui-data-table',
            columnPinning && 'ui-data-table--pinned',
            className,
          )}
          style={{ minWidth, width: minWidth }}
        >
          {columnPinning && (
            <colgroup>
              {selection && <col style={{ width: 44 }} />}
              {layout.map(({ column, style }) => (
                <col key={column.id} style={{ width: style.width }} />
              ))}
            </colgroup>
          )}
          <TableHead
            layout={layout}
            pinSelection={!!columnPinning}
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
            layout={layout}
            pinSelection={!!columnPinning}
            getRowId={getRowId}
            selection={selection}
            loading={loading}
            loadingLabel={localize(loadingLabel)}
            error={localize(error)}
            onRetry={onRetry}
          />
        </table>
      </TableScrollArea>
      {!loading && !error && !data.length && (emptyState ?? <EmptyState />)}
      {pagination && (
        <TablePagination
          page={server?.page ?? table.page}
          pageSize={server?.pageSize ?? table.pageSize}
          totalItems={server?.totalItems ?? data.length}
          onPageChange={server?.onPageChange ?? table.setPage}
          onPageSizeChange={server?.onPageSizeChange ?? table.setPageSize}
          itemLabel={localize(itemLabel)}
          disabled={loading}
        />
      )}
    </div>
  )
}
