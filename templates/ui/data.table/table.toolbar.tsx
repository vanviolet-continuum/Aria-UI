import type { ComponentProps, ReactNode } from 'react'
import { useI18n } from '../../i18n/use.i18n'
import { SearchInput } from '../search.input/search.input'
import { TableFilterControl, TableFilterChips } from '../table.filter/table.filter'
import type { TableFilterDef, TableFilterValue } from '../table.filter/types'
import { Button } from '../button/button'
import { TableColumnMenu } from './table.column.menu'
import type { ColumnDef, ColumnVisibility } from './types'

export interface TableToolbarProps<T> {
  search?: ComponentProps<typeof SearchInput>
  filters?: TableFilterDef<T>[]
  filterValue?: TableFilterValue
  onFilterChange?: (value: TableFilterValue) => void
  columns?: ColumnDef<T>[]
  columnVisibility?: ColumnVisibility
  onColumnVisibilityChange?: (value: ColumnVisibility) => void
  actions?: ReactNode
  onClear?: () => void
  className?: string
}
export function TableToolbar<T>({
  search,
  filters,
  filterValue = {},
  onFilterChange,
  columns,
  columnVisibility = {},
  onColumnVisibilityChange,
  actions,
  onClear,
  className = '',
}: TableToolbarProps<T>) {
  const { t } = useI18n()
  return (
    <div
      className={'ui-table-toolbar ' + className}
      role="group"
      aria-label={t('Table filters and actions')}
    >
      {search && <SearchInput {...search} />}
      {!!filters?.length && (
        <TableFilterControl
          filters={filters}
          value={filterValue}
          onChange={onFilterChange ?? (() => {})}
          disabled={!onFilterChange}
        />
      )}
      <div className="ui-table-toolbar-actions">
        {onClear && (
          <Button variant="text" size="sm" onClick={onClear}>
            {t('Clear filters')}
          </Button>
        )}
        {actions}
        {columns && onColumnVisibilityChange && (
          <TableColumnMenu
            columns={columns}
            visibility={columnVisibility}
            onVisibilityChange={onColumnVisibilityChange}
            onReset={() => onColumnVisibilityChange({})}
          />
        )}
      </div>
      {!!filters?.length && (
        <TableFilterChips
          filters={filters}
          value={filterValue}
          onChange={onFilterChange ?? (() => {})}
          disabled={!onFilterChange}
        />
      )}
    </div>
  )
}
