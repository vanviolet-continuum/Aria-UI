import { useI18n } from '../../i18n/use-i18n'
import {
  ArrowDown,
  ArrowDownUp,
  ArrowLeftToLine,
  ArrowRightToLine,
  ArrowUp,
  Pin,
  PinOff,
} from 'lucide-react'
import { Checkbox } from '../checkbox/checkbox'
import { Menu } from '../menu/menu'
import type { RowSelection, SortState } from './types'
import type { ColumnLayout } from './column-layout'

export function TableHead<T>({
  layout,
  pinSelection,
  pinable,
  onPin,
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
  pinable?: boolean
  onPin?: (id: string, side: 'left' | 'right' | 'none') => void
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
        {layout.map(({ column, style, pin, edge }, index) => {
          const sorted = sort?.column === column.id
          const label =
            column.label ?? (typeof column.header === 'string' ? column.header : column.id)
          return (
            <th
              key={column.id}
              className={column.className}
              style={style}
              data-pin={pin}
              data-layout-index={index}
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
              <div className="table-header-content" data-align={column.align}>
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
                {(column.pinable ?? pinable) && (
                  <Menu
                    label={localize(label)}
                    variant="compact"
                    size="sm"
                    selection="single"
                    value={pin ?? 'none'}
                    onValueChange={(side) => {
                      if (side === 'left' || side === 'right' || side === 'none')
                        onPin?.(column.id, side)
                    }}
                    trigger={
                      <button
                        type="button"
                        className={`table-header-pin${pin ? ' table-header-pin--active' : ''}`}
                        disabled={loading || !onPin}
                        aria-label={tr('Pin column {{column}}', { column: localize(label) })}
                        title={tr(pin ? 'Change column pin' : 'Pin column')}
                      >
                        <Pin size={12} />
                      </button>
                    }
                    items={[
                      { id: 'left', label: 'Pin to left', icon: <ArrowLeftToLine size={14} /> },
                      { id: 'right', label: 'Pin to right', icon: <ArrowRightToLine size={14} /> },
                      {
                        id: 'none',
                        label: 'Unpin column',
                        icon: <PinOff size={14} />,
                        separator: true,
                      },
                    ]}
                  />
                )}
              </div>
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
