import { I18nText } from '../../../../src/template/i18n'
import { Building2, Check, Mail } from 'lucide-react'
import { currency, dateLabel, orderQuantity, orderStatus, orderTotal } from '../../lib/utils'
import type { StockOrder } from '../../types'
import type { ColumnDef } from '@/template/ui/data-table/types'
import { StatusBadge } from '@/template/ui/status-badge/status-badge'
import { OrderRowActions } from './order-row-actions'

interface OrderColumnActions {
  onView: (order: StockOrder) => void
  onReceive: (order: StockOrder) => void
  onDelete: (order: StockOrder) => void
  onEmail: (order: StockOrder) => void
}
export function orderColumns(actions: OrderColumnActions): ColumnDef<StockOrder>[] {
  return [
    {
      id: 'order',
      header: 'Order',
      accessor: 'id',
      sortable: true,
      cell: (order) => (
        <>
          <button className="order-name" onClick={() => actions.onView(order)}>
            #{order.id}
          </button>
          <div className="cell-subtitle">
            {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
            <span>•</span>
            {currency(orderTotal(order), 2)}
          </div>
        </>
      ),
    },
    {
      id: 'created',
      header: 'Created',
      accessor: 'createdAt',
      sortable: true,
      cell: (order) => <span className="date-cell">{dateLabel(order.createdAt)}</span>,
    },
    {
      id: 'vendor',
      header: 'From vendor',
      accessor: 'vendor',
      sortable: true,
      cell: (order) => (
        <span className="vendor-cell" title={order.vendor}>
          <Building2 size={15} strokeWidth={1.6} />
          <span>{order.vendor}</span>
        </span>
      ),
    },
    {
      id: 'status',
      header: 'Status',
      accessor: orderStatus,
      sortable: true,
      cell: (order) => <StatusBadge status={orderStatus(order)} />,
    },
    {
      id: 'received',
      header: 'Items received',
      accessor: 'received',
      sortable: true,
      cell: (order) => (
        <div className="received-cell">
          <div
            className="progress-track"
            role="progressbar"
            aria-label={`Order ${order.id} received`}
            aria-valuemin={0}
            aria-valuemax={orderQuantity(order)}
            aria-valuenow={order.received}
          >
            <span style={{ width: `${(order.received / orderQuantity(order)) * 100}%` }} />
          </div>
          <span>
            {order.received}
            <i>/{orderQuantity(order)}</i>
          </span>
        </div>
      ),
    },
    {
      id: 'email',
      header: 'Email sent',
      align: 'center',
      cell: (order) =>
        order.emailSent ? (
          <span
            className="email-check"
            title="Email recorded as sent"
            aria-label="Email recorded as sent"
          >
            <Check size={12} strokeWidth={2.5} />
          </span>
        ) : (
          <button
            className="email-pending"
            aria-label={`Record email sent for ${order.id}`}
            title="Record email sent"
            onClick={() => actions.onEmail(order)}
          >
            <Mail size={14} />
          </button>
        ),
    },
    {
      id: 'actions',
      header: (
        <span className="sr-only">
          <I18nText>Actions</I18nText>
        </span>
      ),
      width: 126,
      cell: (order) => (
        <OrderRowActions
          order={order}
          onView={() => actions.onView(order)}
          onReceive={() => actions.onReceive(order)}
          onDelete={() => actions.onDelete(order)}
        />
      ),
    },
  ]
}
