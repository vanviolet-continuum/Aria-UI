import { useI18n } from '../../i18n/use-i18n'
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react'
import { pageBounds } from './use-data-table'
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
      <span className="pagination-summary">
        {tr('Showing')}{' '}
        <strong>
          {bounds.start}–{bounds.end}
        </strong>{' '}
        {tr('of') + ' '}
        <strong>{totalItems}</strong> {localize(itemLabel)}
      </span>
      <div className="pagination-controls">
        {onPageSizeChange && (
          <div className="page-size-select">
            <span>{tr('Rows per page')}</span>
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
        <span className="pagination-current">
          {bounds.page} / {bounds.pageCount}
        </span>
        <nav aria-label={tr('Table pagination')}>
          <button
            type="button"
            aria-label={tr('First page')}
            disabled={disabled || bounds.page === 1}
            onClick={() => onPageChange(1)}
          >
            <ChevronFirst size={15} />
          </button>
          <button
            type="button"
            aria-label={tr('Previous page')}
            disabled={disabled || bounds.page === 1}
            onClick={() => onPageChange(bounds.page - 1)}
          >
            <ChevronLeft size={15} />
          </button>
          <button
            type="button"
            aria-label={tr('Next page')}
            disabled={disabled || bounds.page === bounds.pageCount}
            onClick={() => onPageChange(bounds.page + 1)}
          >
            <ChevronRight size={15} />
          </button>
          <button
            type="button"
            aria-label={tr('Last page')}
            disabled={disabled || bounds.page === bounds.pageCount}
            onClick={() => onPageChange(bounds.pageCount)}
          >
            <ChevronLast size={15} />
          </button>
        </nav>
      </div>
    </div>
  )
}
