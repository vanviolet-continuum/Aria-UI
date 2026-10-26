import { useI18n } from '../../i18n/use-i18n'
import { Columns3, Pin, RotateCcw } from 'lucide-react'
import { Button } from '../button/button'
import { Checkbox } from '../checkbox/checkbox'
import { IconButton } from '../icon-button/icon-button'
import { Popover } from '../popover/popover'
import type { ColumnDef, ColumnPinning, ColumnVisibility } from './types'

export interface TableColumnMenuProps<T> {
  columns: ColumnDef<T>[]
  visibility: ColumnVisibility
  onVisibilityChange: (value: ColumnVisibility) => void
  pinning?: ColumnPinning
  onPinningChange?: (value: ColumnPinning) => void
  onReset?: () => void
}
export function TableColumnMenu<T>({
  columns,
  visibility,
  onVisibilityChange,
  pinning,
  onPinningChange,
  onReset,
}: TableColumnMenuProps<T>) {
  const { t: tr, text: localize } = useI18n()

  const visible = columns.filter(
    (column) => column.enableHiding === false || visibility[column.id] !== false,
  )
  const hidden = columns.length - visible.length
  const pin = (id: string, side: 'left' | 'right') => {
    const current = pinning ?? { left: [], right: [] }
    onPinningChange?.({
      left: current.left.filter((item) => item !== id),
      right: current.right.filter((item) => item !== id),
      [side]: current[side].includes(id)
        ? current[side].filter((item) => item !== id)
        : [...current[side].filter((item) => item !== id), id],
    })
  }
  return (
    <Popover
      align="end"
      className="table-column-menu"
      trigger={
        <Button variant="outlined" size="sm">
          <Columns3 size={14} />
          {tr('Columns')}
          {hidden > 0 && (
            <span className="column-hidden-count">
              {hidden}
              {' ' + tr('hidden')}
            </span>
          )}
        </Button>
      }
    >
      <div className="column-menu-heading">
        <strong>{tr('Customize columns')}</strong>
        <small>{tr('Show, hide, or keep a column in view.')}</small>
      </div>
      {columns.map((column) => {
        const checked = visible.includes(column)
        const label =
          column.label ?? (typeof column.header === 'string' ? column.header : column.id)
        return (
          <div className="column-menu-row" key={column.id}>
            <label>
              <Checkbox
                checked={checked}
                disabled={column.enableHiding === false || (checked && visible.length === 1)}
                onChange={(event) =>
                  onVisibilityChange({ ...visibility, [column.id]: event.target.checked })
                }
              />
              {localize(label)}
            </label>
            {onPinningChange && (
              <span>
                {(['left', 'right'] as const).map((side) => (
                  <IconButton
                    key={side}
                    size="sm"
                    variant={pinning?.[side].includes(column.id) ? 'soft' : 'text'}
                    label={tr('Pin {{value0}} {{value1}}', {
                      value0: localize(label),
                      value1: localize(side),
                    })}
                    aria-pressed={pinning?.[side].includes(column.id) ?? false}
                    disabled={!checked}
                    onClick={() => pin(column.id, side)}
                  >
                    <Pin size={13} className={side === 'right' ? 'pin-right' : ''} />
                    <small>{side === 'left' ? 'L' : 'R'}</small>
                  </IconButton>
                ))}
              </span>
            )}
          </div>
        )
      })}
      {onReset && (
        <Button variant="text" size="sm" onClick={onReset}>
          <RotateCcw size={13} />
          {tr('Reset columns')}
        </Button>
      )}
    </Popover>
  )
}
