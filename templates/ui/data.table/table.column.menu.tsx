import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { Columns3, LockKeyhole, RotateCcw } from 'lucide-react'
import { Button } from '../button/button'
import { CheckboxField } from '../checkbox/checkbox.field'
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
            <Text as="span" variant="menu" className="column-hidden-count">
              {hidden} {tr('hidden')}
            </Text>
          )}
        </Button>
      }
    >
      <div className="column-menu-heading">
        <Text as="strong" variant="label">
          {tr('Customize columns')}
        </Text>
        <Text as="small" variant="caption">
          {tr('Choose which columns are visible.')}
        </Text>
      </div>
      {columns.map((column) => {
        const checked = visible.includes(column)
        const locked = column.enableHiding === false
        const lastVisible = checked && visible.length === 1
        const label =
          column.label ?? (typeof column.header === 'string' ? column.header : column.id)
        if (!locked)
          return (
            <CheckboxField
              key={column.id}
              variant="row"
              className="column-menu-row"
              label={localize(label)}
              checked={checked}
              disabled={lastVisible}
              containerProps={{
                title: lastVisible ? tr('At least one column must stay visible.') : undefined,
              }}
              onChange={(event) =>
                onVisibilityChange({ ...visibility, [column.id]: event.target.checked })
              }
              trailing={
                lastVisible ? (
                  <LockKeyhole
                    size={13}
                    aria-label={tr('At least one column must stay visible.')}
                  />
                ) : undefined
              }
            />
          )
        return (
          <div className="column-menu-row" data-locked={locked || undefined} key={column.id}>
            <div className="column-menu-locked-label" title={tr('This column is always visible.')}>
              <Text
                as="span"
                variant="menu"
                tone="inherit"
                className="column-menu-lock"
                aria-hidden="true"
              >
                <LockKeyhole size={14} />
              </Text>
              <Text as="span" variant="menu">
                {localize(label)}
              </Text>
              <Text as="small" variant="caption">
                {tr('Locked')}
              </Text>
            </div>
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
