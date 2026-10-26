import { I18nText } from '../../../../src/template/i18n'
import { Package, Plus } from 'lucide-react'
import type { ColumnDef } from '@/template/ui'
import { StatusBadge } from '@/template/ui/status-badge/status-badge'
import { currency, stockStatus } from '../../lib/utils'
import type { Product } from '../../types'

export function inventoryColumns(
  onView: (product: Product) => void,
  onOrder: (id: string) => void,
): ColumnDef<Product>[] {
  return [
    {
      id: 'name',
      header: 'Product name',
      accessor: 'name',
      sortable: true,
      cell: (product) => (
        <button className="product-name" onClick={() => onView(product)}>
          <span className={`product-icon product-icon--${product.color}`}>
            <Package size={19} strokeWidth={1.6} />
          </span>
          <span>
            <strong>{product.name}</strong>
            <small>{product.sku}</small>
          </span>
        </button>
      ),
    },
    { id: 'category', header: 'Category', accessor: 'category', sortable: true },
    {
      id: 'stock',
      header: 'In stock',
      accessor: 'stock',
      sortable: true,
      cell: (product) => (
        <>
          <strong className="stock-quantity">{product.stock}</strong>
          <span className="muted">
            <I18nText> units</I18nText>
          </span>
        </>
      ),
    },
    {
      id: 'status',
      header: 'Status',
      accessor: stockStatus,
      sortable: true,
      cell: (product) => <StatusBadge status={stockStatus(product)} />,
    },
    {
      id: 'price',
      header: 'Unit price',
      accessor: 'price',
      sortable: true,
      cell: (product) => currency(product.price, 2),
    },
    {
      id: 'value',
      header: 'Stock value',
      accessor: (product) => product.price * product.stock,
      sortable: true,
      cell: (product) => currency(product.price * product.stock, 2),
    },
    {
      id: 'actions',
      header: (
        <span className="sr-only">
          <I18nText>Actions</I18nText>
        </span>
      ),
      cell: (product) => (
        <button
          className="icon-button"
          title="Order this product"
          aria-label={`Order ${product.name}`}
          onClick={() => onOrder(product.id)}
        >
          <Plus size={17} />
        </button>
      ),
    },
  ]
}
