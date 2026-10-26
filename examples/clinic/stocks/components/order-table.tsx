import { useI18n } from '../../../../src/template/i18n'
import { SearchEmptyState } from '@/template/ui/search-empty-state/search-empty-state'
import { Check, Download } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useWorkspace } from '../../workspace/workspace-context'
import { orderStatus } from '../../lib/utils'
import type { StockOrder } from '../../types'
import { Button, ConfirmDialog, DataTable, EmptyState, toast } from '@/template/ui'
import { ReceiveDrawer } from './receive-drawer'
import { OrderDetails } from './order-details'
import { orderColumns } from './order-columns'
import { exportOrders } from './order-export'
import type { DateRange } from '@/template/ui/calendar/date-utils'

export function OrderTable({
  query,
  status,
  vendor,
  resetFilters,
  dateRange = {},
}: {
  query: string
  status: string
  vendor: string
  resetFilters: () => void
  dateRange?: DateRange
}) {
  const { t: tr, text: localize } = useI18n()

  const { orders, deleteOrder, markEmailSent } = useWorkspace()
  const [selected, setSelected] = useState<string[]>([])
  const [receiving, setReceiving] = useState<StockOrder | null>(null)
  const [details, setDetails] = useState<StockOrder | null>(null)
  const [deleting, setDeleting] = useState<StockOrder | null>(null)
  useEffect(() => {
    setSelected([])
  }, [query, status, vendor])
  const filtered = useMemo(
    () =>
      orders
        .filter(
          (order) =>
            `${order.id} ${order.vendor}`.toLowerCase().includes(query.toLowerCase()) &&
            (!status || orderStatus(order) === status) &&
            (!vendor || order.vendor === vendor),
        )
        .filter(
          (order) =>
            (!dateRange.from || order.createdAt >= dateRange.from) &&
            (!dateRange.to || order.createdAt <= dateRange.to),
        ),
    [orders, query, status, vendor, dateRange.from, dateRange.to],
  )
  const columns = orderColumns({
    onView: setDetails,
    onReceive: setReceiving,
    onDelete: setDeleting,
    onEmail: async (order) => {
      if (!(await markEmailSent(order.id))) return
      toast.success(tr('Vendor email marked as sent'), {
        description: 'This records the status; no email was sent by the template.',
      })
    },
  })

  return (
    <>
      {selected.length > 0 && (
        <div className="selection-toolbar">
          <span>
            <Check size={14} />
            {selected.length}
            {' ' + tr('orders selected')}
          </span>
          <div>
            <button onClick={() => setSelected([])}>{tr('Clear selection')}</button>
            <Button
              size="sm"
              onClick={() => exportOrders(orders.filter((order) => selected.includes(order.id)))}
            >
              <Download size={14} />
              {tr('Export selected')}
            </Button>
          </div>
        </div>
      )}
      <DataTable
        data={filtered}
        columns={columns}
        getRowId={(order) => order.id}
        selection={{ selectedIds: selected, onChange: setSelected }}
        defaultSort={{ column: 'created', direction: 'desc' }}
        itemLabel={tr('orders')}
        resetKey={query + status + vendor}
        className="stock-order-data"
        aria-label={tr('Stock orders')}
        emptyState={
          query || status || vendor || dateRange.from || dateRange.to ? (
            <SearchEmptyState onReset={resetFilters} />
          ) : (
            <EmptyState
              title={tr('Your first order starts here')}
              description={tr('Create a stock order to keep your inventory moving.')}
            />
          )
        }
      />
      <ReceiveDrawer order={receiving} onClose={() => setReceiving(null)} />
      <OrderDetails order={details} onClose={() => setDetails(null)} />
      <ConfirmDialog
        open={!!deleting}
        onOpenChange={(open) => {
          if (!open) setDeleting(null)
        }}
        title={tr('Delete this order?')}
        description={tr('Order #{{value0}} will be removed from this workspace.', {
          value0: localize(deleting?.id ?? ''),
        })}
        confirmLabel="Delete order"
        onConfirm={async () => {
          if (!deleting) return false
          if (!(await deleteOrder(deleting.id))) return false
          setSelected(selected.filter((id) => id !== deleting.id))
          setDeleting(null)
          toast.success(tr('Order deleted'))
        }}
      />
    </>
  )
}
