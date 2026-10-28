import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import {
  ArrowDown,
  ArrowDownUp,
  ArrowLeftToLine,
  ArrowRightToLine,
  ArrowUp,
  Pin,
  PinOff,
} from 'lucide-react'
import { CheckboxField } from '../checkbox/checkbox.field'
import { Menu } from '../menu/menu'
import type { RowSelection, SortState } from './types'
import type { ColumnLayout } from './column.layout'

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
          <Text
            as="th"
            variant="eyebrow"
            className={`checkbox-cell${pinSelection ? ' table-selection-pinned' : ''}`}
          >
            <CheckboxField
              label={tr('Select all rows on this page')}
              labelHidden
              className="table-checkbox-field"
              checked={allSelected}
              indeterminate={!allSelected && someSelected}
              disabled={loading}
              onChange={(event) => onToggleAll(event.target.checked)}
            />
          </Text>
        )}
        {layout.map(({ column, style, pin, edge }, index) => {
          const sorted = sort?.column === column.id
          const label =
            column.label ?? (typeof column.header === 'string' ? column.header : column.id)
          return (
            <Text
              as="th"
              variant="eyebrow"
              key={column.id}
              className={column.className}
              style={style}
              data-pin={pin}
              data-column-kind={column.kind}
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
                <Text as="div" variant="eyebrow" tone="inherit" className="table-header-label">
                  {localize(column.header)}
                </Text>
                {(column.sortable || (column.pinable ?? pinable)) && (
                  <div className="table-header-actions">
                    {column.sortable && (
                      <Text
                        as="button"
                        variant="eyebrow"
                        tone="inherit"
                        type="button"
                        className="table-sort"
                        disabled={loading}
                        data-active={sorted || undefined}
                        aria-label={tr(
                          sorted && sort?.direction === 'asc'
                            ? 'Sort {{column}} descending'
                            : 'Sort {{column}} ascending',
                          { column: localize(label) },
                        )}
                        title={tr(
                          sorted && sort?.direction === 'asc'
                            ? 'Sort {{column}} descending'
                            : 'Sort {{column}} ascending',
                          { column: localize(label) },
                        )}
                        onClick={() =>
                          onSort({
                            column: column.id,
                            direction: sorted && sort?.direction === 'asc' ? 'desc' : 'asc',
                          })
                        }
                      >
                        {sorted ? (
                          sort?.direction === 'asc' ? (
                            <ArrowUp size={12} />
                          ) : (
                            <ArrowDown size={12} />
                          )
                        ) : (
                          <ArrowDownUp size={12} />
                        )}
                      </Text>
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
                          <Text
                            as="button"
                            variant="eyebrow"
                            tone="inherit"
                            type="button"
                            className={`table-header-pin${pin ? ' table-header-pin--active' : ''}`}
                            disabled={loading || !onPin}
                            aria-label={tr('Pin column {{column}}', { column: localize(label) })}
                            title={tr(pin ? 'Change column pin' : 'Pin column')}
                          >
                            <Pin size={12} />
                          </Text>
                        }
                        items={[
                          { id: 'left', label: 'Pin to left', icon: <ArrowLeftToLine size={14} /> },
                          {
                            id: 'right',
                            label: 'Pin to right',
                            icon: <ArrowRightToLine size={14} />,
                          },
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
                )}
              </div>
            </Text>
          )
        })}
      </tr>
    </thead>
  )
}
