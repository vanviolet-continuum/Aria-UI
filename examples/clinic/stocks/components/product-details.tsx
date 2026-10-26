import { useI18n } from '../../../../src/template/i18n'
import { ArrowUpRight } from 'lucide-react'
import { Button, Drawer } from '@/template/ui'
import { StatusBadge } from '@/template/ui/status-badge/status-badge'
import { currency, stockStatus } from '../../lib/utils'
import type { Product } from '../../types'

export function ProductDetails({
  product,
  onClose,
  onOrder,
}: {
  product: Product | null
  onClose: () => void
  onOrder: (id: string) => void
}) {
  const { t: tr, text: localize } = useI18n()

  return (
    <Drawer
      open={!!product}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
      title={localize(product?.name ?? 'Product details')}
      description={localize(product ? `${product.sku} · ${product.category}` : '')}
      footer={
        <>
          <Button onClick={onClose}>{tr('Close')}</Button>
          <Button
            variant="primary"
            onClick={() => {
              if (product) {
                onOrder(product.id)
                onClose()
              }
            }}
          >
            {tr('Order product')}
            <ArrowUpRight size={15} />
          </Button>
        </>
      }
    >
      {product && (
        <>
          <div className="product-detail-stats">
            <div>
              <span>{tr('Available stock')}</span>
              <strong>
                {product.stock}
                <small>{' ' + tr('units')}</small>
              </strong>
            </div>
            <div>
              <span>{tr('Unit price')}</span>
              <strong>{currency(product.price, 2)}</strong>
            </div>
          </div>
          <StatusBadge status={stockStatus(product)} />
          <p className="field-hint">
            {tr('Low stock reminders start at') + ' '}
            {product.minimumStock}
            {' ' + tr('units. Receive a stock order to replenish this product.')}
          </p>
        </>
      )}
    </Drawer>
  )
}
