import { useI18n } from '../../i18n/use-i18n'
import { Columns3, LockKeyhole, RotateCcw } from 'lucide-react'
import { Button } from '../button/button'
import { Checkbox } from '../checkbox/checkbox'
import { Popover } from '../popover/popover'
import type { ColumnDef, ColumnPinning, ColumnVisibility } from './types'

export interface TableColumnMenuProps<T> {
  columns: ColumnDef<T>[]
  visibility: ColumnVisibility
  onVisibilityChange: (value: ColumnVisibility) => void
  /** @deprecated Pinning is controlled by DataTable header actions. */
  pinning?: ColumnPinning
  /** @deprecated Use DataTable.onColumnPinningChange. */
  onPinningChange?: (value: ColumnPinning) => void
  onReset?: () => void
}
export function TableColumnMenu<T>({
  columns,
  visibility,
  onVisibilityChange,
  onReset,
}: TableColumnMenuProps<T>) {
  const { t: tr, text: localize } = useI18n()
  const visible = columns.filter(
    (column) => column.enableHiding === false || visibility[column.id] !== false,
  )
  const hidden = columns.length - visible.length
  return (
    <Popover
      variant="form"
      align="end"
      className="table-column-menu"
      trigger={
        <Button variant="outlined" size="sm">
          <Columns3 size={14} />
          {tr('Columns')}
          {hidden > 0 && (
            <span className="column-hidden-count">
              {hidden} {tr('hidden')}
            </span>
          )}
        </Button>
      }
    >
      <div className="column-menu-heading">
        <strong>{tr('Customize columns')}</strong>
        <small>{tr('Choose which columns are visible.')}</small>
      </div>
      {columns.map((column) => {
        const checked = visible.includes(column)
        const locked = column.enableHiding === false
        const lastVisible = checked && visible.length === 1
        const label =
          column.label ?? (typeof column.header === 'string' ? column.header : column.id)
        return (
          <div className="column-menu-row" data-locked={locked || undefined} key={column.id}>
            {locked ? (
              <div
                className="column-menu-locked-label"
                title={tr('This column is always visible.')}
              >
                <span className="column-menu-lock" aria-hidden="true">
                  <LockKeyhole size={14} />
                </span>
                <span>{localize(label)}</span>
                <small>{tr('Locked')}</small>
              </div>
            ) : (
              <label title={lastVisible ? tr('At least one column must stay visible.') : undefined}>
                <Checkbox
                  checked={checked}
                  disabled={lastVisible}
                  onChange={(event) =>
                    onVisibilityChange({ ...visibility, [column.id]: event.target.checked })
                  }
                />
                <span>{localize(label)}</span>
                {lastVisible && (
                  <LockKeyhole
                    size={13}
                    aria-label={tr('At least one column must stay visible.')}
                  />
                )}
              </label>
            )}
          </div>
        )
      })}
      {onReset && (
        <div className="column-menu-footer">
          <Button variant="text" size="sm" disabled={!hidden} onClick={onReset}>
            <RotateCcw size={13} />
            {tr('Reset columns')}
          </Button>
        </div>
      )}
    </Popover>
  )
}
