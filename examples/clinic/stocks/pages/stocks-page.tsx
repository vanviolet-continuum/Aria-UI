import { useI18n } from '../../../../src/template/i18n'
import { Cloud } from 'lucide-react'
import { useWorkspace } from '../../workspace/workspace-context'
import { useStockFilters } from '../hooks/use-stock-filters'
import { Tabs } from '@/template/ui'
import { StockSummary } from '../components/stock-summary'
import { StockToolbar } from '../components/stock-toolbar'
import { OrderTable } from '../components/order-table'
import { InventoryTable } from '../components/inventory-table'
import { OrderForm } from '../components/order-form'
import { ProductForm } from '../components/product-form'

export function StocksPage() {
  const { t: tr, text: localize } = useI18n()

  const filters = useStockFilters()
  const { orders, products } = useWorkspace()
  return (
    <div className="stocks-page page-enter">
      <StockSummary />
      <div className="stocks-tabs-row">
        <Tabs
          value={filters.tab}
          onChange={filters.setTab}
          label={tr('Stock view')}
          items={[
            { value: 'inventory', label: 'Inventory', count: products.length },
            { value: 'orders', label: 'Order Stock', count: orders.length },
          ]}
        />
        <span className="saved-label">
          <Cloud size={14} />
          {tr('Changes saved in this browser')}
        </span>
      </div>
      <section
        className="stock-content"
        aria-label={localize(filters.tab === 'orders' ? 'Stock orders' : 'Inventory')}
      >
        <StockToolbar filters={filters} />
        {filters.tab === 'orders' ? (
          <OrderTable
            query={filters.query}
            status={filters.status}
            vendor={filters.vendor}
            dateRange={filters.dateRange}
            resetFilters={filters.reset}
          />
        ) : (
          <InventoryTable
            query={filters.query}
            status={filters.status}
            category={filters.category}
            resetFilters={filters.reset}
            onOrder={filters.openOrder}
          />
        )}
      </section>
      <div className="workspace-footer">
        <span>
          <span className="tiny-brand">✦</span>
          {tr('A little order. A better practice.')}
        </span>
        <span>{tr('Made for your everyday.')}</span>
      </div>
      <OrderForm
        open={filters.form === 'order'}
        productId={filters.productId}
        onOpenChange={(open) => {
          if (!open) filters.closeForm()
        }}
      />
      <ProductForm
        open={filters.form === 'product'}
        onOpenChange={(open) => {
          if (!open) filters.closeForm()
        }}
      />
    </div>
  )
}
