import { useI18n } from '../../../../src/template/i18n'
import { Plus, X } from 'lucide-react'
import { Button, SearchInput } from '@/template/ui'
import { StockFilters } from './stock-filters'
import type { useStockFilters } from '../hooks/use-stock-filters'

export function StockToolbar({ filters }: { filters: ReturnType<typeof useStockFilters> }) {
  const { t: tr, text: localize } = useI18n()

  const orders = filters.tab === 'orders'
  return (
    <div className="table-toolbar">
      <SearchInput
        value={filters.query}
        onChange={(value) => filters.update('q', value)}
        placeholder={localize(orders ? 'Search order, vendor…' : 'Search product, SKU…')}
        label={localize(orders ? 'Search orders' : 'Search inventory')}
      />
      <div className="toolbar-actions">
        {(filters.filterCount > 0 || filters.query) && (
          <button className="clear-filters" onClick={filters.reset}>
            {tr('Clear')}
            <X size={13} />
          </button>
        )}
        <StockFilters filters={filters} />
        <span className="toolbar-divider" />
        <Button
          variant="primary"
          size="sm"
          onClick={() => (orders ? filters.openOrder() : filters.update('new', 'product'))}
        >
          <Plus size={16} />
          {orders ? tr('Order Stock') : tr('Add Product')}
        </Button>
      </div>
    </div>
  )
}
