import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { memo, type ReactNode } from 'react'
import { LoadingIllustration } from '../illustrations/states/loading.illustration'
import { EmptyState } from '../empty.state/empty.state'
import { ErrorState } from '../error.state/error.state'
import { CheckboxField } from '../checkbox/checkbox.field'
import { getCellValue } from './use.data.table'
import type { ColumnDef, RowSelection } from './types'
import type { ColumnLayout } from './column.layout'
import { ActionMenu } from '../action.menu/action.menu'

interface Props<T> {
  rows: T[]
  layout: ColumnLayout<T>[]
  pinSelection?: boolean
  getRowId: (row: T) => string
  selection?: RowSelection
  loading?: boolean
  loadingLabel?: string
  error?: unknown
  emptyState?: ReactNode
  onRetry?: () => void
}
function renderCell<T>(column: ColumnDef<T>, row: T, index: number) {
  const content = column.actions ? (
    <ActionMenu
      items={column.actions(row)}
      label={
        typeof column.actionLabel === 'function' ? column.actionLabel(row) : column.actionLabel
      }
    />
  ) : column.cell ? (
    column.cell(row, index)
  ) : (
    String(getCellValue(row, column.accessor) ?? '')
  )
  return column.kind === 'actions' ? (
    <div className="table-actions-content" data-align={column.align}>
      {content}
    </div>
  ) : (
    content
  )
}
function Body<T>({
  rows,
  layout,
  pinSelection,
  getRowId,
  selection,
  loading,
  loadingLabel = 'Finding your records…',
  error,
  emptyState,
  onRetry,
}: Props<T>) {
  const { t: tr, text: localize } = useI18n()

  const selected = new Set(selection?.selectedIds ?? [])
  if (loading || error || !rows.length)
    return (
      <tbody>
        <tr>
          <Text as="td" variant="table" colSpan={Math.max(1, layout.length + Number(!!selection))}>
            {loading ? (
              <div className="table-body-loading" role="status">
                <LoadingIllustration label={tr('')} size={88} />
                <Text as="strong" variant="label">
                  {localize(loadingLabel)}
                </Text>
                <Text as="small" variant="caption">
                  {tr('A fresh view is on its way.')}
                </Text>
              </div>
            ) : error ? (
              <ErrorState error={error} onRetry={onRetry} className="table-result-state" />
            ) : (
              <div className="table-result-state">{emptyState ?? <EmptyState />}</div>
            )}
          </Text>
        </tr>
      </tbody>
    )
  return (
    <tbody>
      {rows.map((row, index) => {
        const id = getRowId(row)
        return (
          <tr key={id} className={selected.has(id) ? 'row--selected' : undefined}>
            {selection && (
              <Text
                as="td"
                variant="table"
                className={`checkbox-cell${pinSelection ? ' table-selection-pinned' : ''}`}
              >
                <CheckboxField
                  label={tr('Select row {{value0}}', { value0: localize(id) })}
                  labelHidden
                  className="table-checkbox-field"
                  checked={selected.has(id)}
                  onChange={(event) =>
                    selection.onChange(
                      event.target.checked
                        ? [...selected, id]
                        : [...selected].filter((item) => item !== id),
                    )
                  }
                />
              </Text>
            )}
            {layout.map(({ column, style, pin, edge }) => (
              <Text
                as="td"
                variant="table"
                key={column.id}
                className={column.className}
                style={style}
                data-pin={pin}
                data-column-kind={column.kind}
                data-pin-edge={edge || undefined}
              >
                {renderCell(column, row, index)}
              </Text>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}
export const TableBody = memo(Body) as typeof Body
