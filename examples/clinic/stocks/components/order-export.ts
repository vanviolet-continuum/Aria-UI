import { downloadCsv, orderQuantity, orderStatus, orderTotal } from '../../lib/utils'
import type { StockOrder } from '../../types'
import { toast } from '@/template/ui/toast/toast'

export function exportOrders(orders: StockOrder[]) {
  downloadCsv(
    'zendenta-stock-orders.csv',
    ['Order', 'Created', 'Vendor', 'Products', 'Total (USD)', 'Status', 'Received', 'Units'],
    orders.map((order) => [
      order.id,
      order.createdAt,
      order.vendor,
      order.items.length,
      orderTotal(order),
      orderStatus(order),
      order.received,
      orderQuantity(order),
    ]),
  )
  toast.success(`${orders.length} orders exported`)
}
