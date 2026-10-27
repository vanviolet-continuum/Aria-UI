import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { memo } from 'react'
import { LoadingIllustration } from '../illustrations/states/loading.illustration'
import { SearchIllustration } from '../illustrations/states/search.illustration'
import { Button } from '../button/button'
import { CheckboxField } from '../checkbox/checkbox.field'
import { getCellValue } from './use.data.table'
import type { RowSelection } from './types'
import type { ColumnLayout } from './column.layout'

interface Props<T> {
  rows: T[]
  layout: ColumnLayout<T>[]
  pinSelection?: boolean
  getRowId: (row: T) => string
  selection?: RowSelection
  loading?: boolean
  loadingLabel?: string
  error?: string | null
  onRetry?: () => void
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
  onRetry,
}: Props<T>) {
  const { t: tr, text: localize } = useI18n()

  const selected = new Set(selection?.selectedIds ?? [])
  if (loading || error)
    return (
      <tbody>
        <tr>
          <Text as="td" variant="table" colSpan={Math.max(1, layout.length + Number(!!selection))}>
            <div className="table-body-loading" role={error ? 'alert' : 'status'}>
              {error ? <SearchIllustration /> : <LoadingIllustration label={tr('')} size={88} />}
              <Text as="strong" variant="label">
                {error ?? loadingLabel}
              </Text>
              <Text as="small" variant="caption">
                {error
                  ? tr('Your search is saved. Give it another try.')
                  : tr('A fresh view is on its way.')}
              </Text>
              {error && onRetry && (
                <Button variant="outlined" size="sm" onClick={onRetry}>
                  {tr('Try again')}
                </Button>
              )}
            </div>
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
                data-pin-edge={edge || undefined}
              >
                {column.cell
                  ? column.cell(row, index)
                  : String(getCellValue(row, column.accessor) ?? '')}
              </Text>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}
export const TableBody = memo(Body) as typeof Body
