import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react'
import { pageBounds } from './use.data.table'
import { Combobox } from '../combobox/combobox'

export interface TablePaginationProps {
  page: number
  pageSize: number
  totalItems: number
  onPageChange: (page: number) => void
  onPageSizeChange?: (size: number) => void
  pageSizeOptions?: number[]
  itemLabel?: string
  disabled?: boolean
}

export function TablePagination({
  page,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 8, 10, 20, 50],
  itemLabel = 'records',
  disabled,
}: TablePaginationProps) {
  const { t: tr, text: localize } = useI18n()

  const bounds = pageBounds(totalItems, page, pageSize)
  const options = [...new Set([...pageSizeOptions, pageSize])].sort((a, b) => a - b)
  return (
    <div className="ui-table-pagination">
      <Text as="span" variant="table" className="pagination-summary">
        {tr('Showing')}{' '}
        <Text as="strong" variant="label">
          {bounds.start}–{bounds.end}
        </Text>{' '}
        {tr('of') + ' '}
        <Text as="strong" variant="label">
          {totalItems}
        </Text>{' '}
        {localize(itemLabel)}
      </Text>
      <div className="pagination-controls">
        {onPageSizeChange && (
          <div className="page-size-select">
            <Text as="span" variant="table">
              {tr('Rows per page')}
            </Text>
            <Combobox
              searchable={false}
              size="sm"
              aria-label={tr('Rows per page')}
              disabled={disabled}
              value={String(pageSize)}
              options={options.map((size) => ({ value: String(size), label: String(size) }))}
              onChange={(value) => onPageSizeChange(Number(value))}
            />
          </div>
        )}
        <Text as="span" variant="table" className="pagination-current">
          {bounds.page} / {bounds.pageCount}
        </Text>
        <nav aria-label={tr('Table pagination')}>
          <Text
            as="button"
            variant="button"
            tone="inherit"
            type="button"
            aria-label={tr('First page')}
            disabled={disabled || bounds.page === 1}
            onClick={() => onPageChange(1)}
          >
            <ChevronFirst size={15} />
          </Text>
          <Text
            as="button"
            variant="button"
            tone="inherit"
            type="button"
            aria-label={tr('Previous page')}
            disabled={disabled || bounds.page === 1}
            onClick={() => onPageChange(bounds.page - 1)}
          >
            <ChevronLeft size={15} />
          </Text>
          <Text
            as="button"
            variant="button"
            tone="inherit"
            type="button"
            aria-label={tr('Next page')}
            disabled={disabled || bounds.page === bounds.pageCount}
            onClick={() => onPageChange(bounds.page + 1)}
          >
            <ChevronRight size={15} />
          </Text>
          <Text
            as="button"
            variant="button"
            tone="inherit"
            type="button"
            aria-label={tr('Last page')}
            disabled={disabled || bounds.page === bounds.pageCount}
            onClick={() => onPageChange(bounds.pageCount)}
          >
            <ChevronLast size={15} />
          </Text>
        </nav>
      </div>
    </div>
  )
}
