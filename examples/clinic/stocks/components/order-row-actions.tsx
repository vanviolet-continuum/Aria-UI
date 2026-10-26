import { useI18n } from '../../../../src/template/i18n'
import { Check, Copy, Download, Eye, Trash2 } from 'lucide-react'
import { ActionMenu } from '@/template/ui/action-menu/action-menu'
import { Button } from '@/template/ui/button/button'
import { toast } from '@/template/ui/toast/toast'
import { useWorkspace } from '../../workspace/workspace-context'
import { localDate, orderStatus } from '../../lib/utils'
import type { StockOrder } from '../../types'
import { exportOrders } from './order-export'

export function OrderRowActions({
  order,
  onView,
  onReceive,
  onDelete,
}: {
  order: StockOrder
  onView: () => void
  onReceive: () => void
  onDelete: () => void
}) {
  const { t: tr, text: localize } = useI18n()

  const { addOrder } = useWorkspace()
  const complete = orderStatus(order) === 'complete'
  return (
    <div className="row-actions">
      <Button className="receive-button" size="sm" disabled={complete} onClick={onReceive}>
        {complete ? (
          <>
            <Check size={12} />
            {tr('Received')}
          </>
        ) : (
          'Receive'
        )}
      </Button>
      <ActionMenu
        label={tr('Actions for order {{value0}}', { value0: localize(order.id) })}
        items={[
          { id: 'view', label: 'View order', icon: <Eye size={15} />, onSelect: onView },
          {
            id: 'export',
            label: 'Export order',
            icon: <Download size={15} />,
            onSelect: () => exportOrders([order]),
          },
          {
            id: 'duplicate',
            label: 'Duplicate order',
            icon: <Copy size={15} />,
            onSelect: async () => {
              const id = `OS${crypto.randomUUID().slice(0, 6).toUpperCase()}`
              if (
                !(await addOrder({
                  ...order,
                  id,
                  createdAt: localDate(),
                  received: 0,
                  emailSent: false,
                }))
              )
                return
              toast.success(tr('Order duplicated as #{{value0}}', { value0: localize(id) }))
            },
          },
          ...(order.received === 0
            ? [
                {
                  id: 'delete',
                  label: 'Delete order',
                  icon: <Trash2 size={15} />,
                  destructive: true,
                  separator: true,
                  onSelect: onDelete,
                },
              ]
            : []),
        ]}
      />
    </div>
  )
}
