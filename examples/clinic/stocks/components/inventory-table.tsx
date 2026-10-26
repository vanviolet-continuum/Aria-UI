import { useI18n } from '../../../../src/template/i18n'
import { SearchEmptyState } from '@/template/ui/search-empty-state/search-empty-state'
import { useMemo, useState } from 'react'
import { Download } from 'lucide-react'
import { useWorkspace } from '../../workspace/workspace-context'
import { downloadCsv, stockStatus } from '../../lib/utils'
import type { Product } from '../../types'
import { Button, DataTable } from '@/template/ui'
import { ProductDetails } from './product-details'
import { inventoryColumns } from './inventory-columns'

export function InventoryTable({
  query,
  status,
  category,
  resetFilters,
  onOrder,
}: {
  query: string
  status: string
  category: string
  resetFilters: () => void
  onOrder: (id: string) => void
}) {
  const { t: tr } = useI18n()

  const { products } = useWorkspace()
  const [selected, setSelected] = useState<Product | null>(null)
  const filtered = useMemo(
    () =>
      products.filter(
        (product) =>
          `${product.name} ${product.sku}`.toLowerCase().includes(query.toLowerCase()) &&
          (!status ||
            (status === 'attention'
              ? stockStatus(product) !== 'in-stock'
              : stockStatus(product) === status)) &&
          (!category || product.category === category),
      ),
    [products, query, status, category],
  )
  const exportProducts = () =>
    downloadCsv(
      'zendenta-inventory.csv',
      ['SKU', 'Product', 'Category', 'Stock', 'Unit price', 'Value', 'Status'],
      filtered.map((product) => [
        product.sku,
        product.name,
        product.category,
        product.stock,
        product.price,
        product.price * product.stock,
        stockStatus(product),
      ]),
    )
  return (
    <>
      <div className="inventory-table-caption">
        <span>
          {filtered.length}
          {' ' + tr('products in view')}
        </span>
        <Button variant="ghost" size="sm" onClick={exportProducts}>
          <Download size={14} />
          {tr('Export inventory')}
        </Button>
      </div>
      <DataTable
        data={filtered}
        columns={inventoryColumns(setSelected, onOrder)}
        getRowId={(product) => product.id}
        defaultSort={{ column: 'name', direction: 'asc' }}
        resetKey={query + status + category}
        itemLabel={tr('products')}
        className="stock-inventory-data"
        aria-label={tr('Inventory products')}
        emptyState={<SearchEmptyState onReset={resetFilters} />}
      />
      <ProductDetails product={selected} onClose={() => setSelected(null)} onOrder={onOrder} />
    </>
  )
}
