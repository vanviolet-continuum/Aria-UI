import { useI18n } from '../../../../src/template/i18n'
import { Building2, CalendarDays, Download } from 'lucide-react'
import { useWorkspace } from '../../workspace/workspace-context'
import { currency, dateLabel, downloadCsv, orderStatus, orderTotal } from '../../lib/utils'
import type { StockOrder } from '../../types'
import { Drawer } from '@/template/ui/drawer/drawer'
import { StatusBadge } from '@/template/ui/status-badge/status-badge'
import { Button } from '@/template/ui/button/button'

export function OrderDetails({
  order,
  onClose,
}: {
  order: StockOrder | null
  onClose: () => void
}) {
  const { t: tr, text: localize } = useI18n()

  const { products } = useWorkspace()
  return (
    <Drawer
      open={!!order}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
      title={tr('Order #{{value0}}', { value0: localize(order?.id ?? '') })}
      description={tr('A closer look at your purchase order.')}
    >
      {order && (
        <>
          <div className="order-detail-meta">
            <span>
              <Building2 size={16} />
              {order.vendor}
            </span>
            <span>
              <CalendarDays size={16} />
              {dateLabel(order.createdAt)}
            </span>
            <StatusBadge status={orderStatus(order)} />
          </div>
          <div className="detail-items">
            {order.items.map((item) => (
              <div key={item.productId}>
                <span>
                  {products.find((product) => product.id === item.productId)?.name ??
                    item.productId}
                  <small>
                    {item.quantity} × {currency(item.unitPrice, 2)}
                  </small>
                </span>
                <strong>{currency(item.quantity * item.unitPrice, 2)}</strong>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>{tr('Total amount')}</span>
            <strong>{currency(orderTotal(order), 2)}</strong>
          </div>
          <div className="drawer-form-footer">
            <Button onClick={onClose}>{tr('Close')}</Button>
            <Button
              onClick={() =>
                downloadCsv(
                  `order-${order.id}.csv`,
                  ['Product', 'Quantity', 'Unit price', 'Subtotal'],
                  order.items.map((item) => [
                    products.find((product) => product.id === item.productId)?.name ??
                      item.productId,
                    item.quantity,
                    item.unitPrice,
                    item.quantity * item.unitPrice,
                  ]),
                )
              }
            >
              <Download size={15} />
              {tr('Download order')}
            </Button>
          </div>
        </>
      )}
    </Drawer>
  )
}
