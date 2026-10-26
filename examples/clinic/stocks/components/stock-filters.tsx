import { useI18n } from '../../../../src/template/i18n'
import * as Popover from '@radix-ui/react-popover'
import { Check, ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import { Button, DateRangePicker, Field, Combobox } from '@/template/ui'
import { vendors } from '../../data/stock'
import { useWorkspace } from '../../workspace/workspace-context'
import type { useStockFilters } from '../hooks/use-stock-filters'

export function StockFilters({ filters }: { filters: ReturnType<typeof useStockFilters> }) {
  const { t: tr, text: localize } = useI18n()

  const { products } = useWorkspace()
  const orders = filters.tab === 'orders'
  const statuses = orders
    ? [
        { value: 'pending', label: 'Pending' },
        { value: 'partial', label: 'Partially received' },
        { value: 'complete', label: 'Complete' },
      ]
    : [
        { value: 'in-stock', label: 'In stock' },
        { value: 'low-stock', label: 'Low stock' },
        { value: 'out-of-stock', label: 'Out of stock' },
        { value: 'attention', label: 'Needs attention' },
      ]
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          size="sm"
          className={filters.filterCount ? 'filter-button filter-button--active' : 'filter-button'}
        >
          <SlidersHorizontal size={15} />
          {tr('Filters')}
          {filters.filterCount ? (
            <span className="filter-count">{filters.filterCount}</span>
          ) : (
            <ChevronDown size={12} />
          )}
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="popover filter-popover" align="end" sideOffset={9}>
          <div className="popover-heading">
            <strong>
              {tr('Filter') + ' '}
              {orders ? tr('orders') : tr('inventory')}
            </strong>
            <Popover.Close className="icon-button" aria-label={tr('Close filters')}>
              <X size={15} />
            </Popover.Close>
          </div>
          <div className="form-fields">
            <Field label={tr('Status')}>
              <Combobox
                value={filters.status}
                placeholder={tr('All statuses')}
                options={statuses}
                onChange={(nextValue) => filters.update('status', nextValue)}
              />
            </Field>
            <Field label={localize(orders ? 'Vendor' : 'Category')}>
              <Combobox
                value={orders ? filters.vendor : filters.category}
                placeholder={localize(orders ? 'All vendors' : 'All categories')}
                options={(orders
                  ? vendors
                  : [...new Set(products.map((product) => product.category))]
                ).map((value) => ({ value, label: value }))}
                onChange={(nextValue) => filters.update(orders ? 'vendor' : 'category', nextValue)}
              />
            </Field>
            {orders && (
              <Field label={tr('Created date')}>
                <DateRangePicker value={filters.dateRange} onChange={filters.setDateRange} />
              </Field>
            )}
          </div>
          <div className="filter-footer">
            <button className="text-button" onClick={filters.reset}>
              {tr('Reset filters')}
            </button>
            <Popover.Close asChild>
              <Button variant="primary" size="sm">
                <Check size={14} />
                {tr('Done')}
              </Button>
            </Popover.Close>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
