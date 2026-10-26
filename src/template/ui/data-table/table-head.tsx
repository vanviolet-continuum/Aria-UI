import { useI18n } from '../../i18n/use-i18n'
import { ArrowDown, ArrowDownUp, ArrowUp } from 'lucide-react'
import { Checkbox } from '../checkbox/checkbox'
import type { RowSelection, SortState } from './types'
import type { ColumnLayout } from './column-layout'

export function TableHead<T>({
  layout,
  pinSelection,
  selection,
  allSelected,
  someSelected,
  onToggleAll,
  sort,
  onSort,
  loading,
}: {
  layout: ColumnLayout<T>[]
  pinSelection?: boolean
  selection?: RowSelection
  allSelected: boolean
  someSelected: boolean
  onToggleAll: (checked: boolean) => void
  sort?: SortState
  onSort: (sort: SortState) => void
  loading?: boolean
}) {
  const { t: tr, text: localize } = useI18n()

  return (
    <thead>
      <tr>
        {selection && (
          <th className={`checkbox-cell${pinSelection ? ' table-selection-pinned' : ''}`}>
            <Checkbox
              aria-label={tr('Select all rows on this page')}
              checked={allSelected}
              indeterminate={!allSelected && someSelected}
              disabled={loading}
              onChange={(event) => onToggleAll(event.target.checked)}
            />
          </th>
        )}
        {layout.map(({ column, style, pin, edge }) => {
          const sorted = sort?.column === column.id
          return (
            <th
              key={column.id}
              className={column.className}
              style={style}
              data-pin={pin}
              data-pin-edge={edge || undefined}
              aria-sort={
                column.sortable
                  ? sorted
                    ? sort?.direction === 'asc'
                      ? 'ascending'
                      : 'descending'
                    : 'none'
                  : undefined
              }
            >
              {column.sortable ? (
                <button
                  type="button"
                  className="table-sort"
                  disabled={loading}
                  onClick={() =>
                    onSort({
                      column: column.id,
                      direction: sorted && sort?.direction === 'asc' ? 'desc' : 'asc',
                    })
                  }
                >
                  {localize(column.header)}
                  {sorted ? (
                    sort?.direction === 'asc' ? (
                      <ArrowUp size={12} />
                    ) : (
                      <ArrowDown size={12} />
                    )
                  ) : (
                    <ArrowDownUp size={12} />
                  )}
                </button>
              ) : (
                localize(column.header)
              )}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
