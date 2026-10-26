import { useI18n } from '../../../../src/template/i18n'
import { useEffect, useState } from 'react'
import { PackageCheck } from 'lucide-react'
import { useWorkspace } from '../../workspace/workspace-context'
import { orderQuantity } from '../../lib/utils'
import type { StockOrder } from '../../types'
import { Button, Drawer, Field, Input, toast } from '@/template/ui'

export function ReceiveDrawer({
  order,
  onClose,
}: {
  order: StockOrder | null
  onClose: () => void
}) {
  const { t: tr, text: localize } = useI18n()

  const { receiveOrder } = useWorkspace()
  const remaining = order ? orderQuantity(order) - order.received : 0
  const [quantity, setQuantity] = useState(remaining)
  useEffect(() => {
    setQuantity(remaining)
  }, [order?.id, remaining])
  return (
    <Drawer
      open={!!order}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
      title={tr('Receive delivery')}
      description={tr('Record a delivery for order #{{value0}}.', {
        value0: localize(order?.id ?? ''),
      })}
    >
      <form
        onSubmit={async (event) => {
          event.preventDefault()
          if (!order || !Number.isInteger(quantity) || quantity < 1 || quantity > remaining) return
          if (!(await receiveOrder(order.id, quantity))) return
          toast.success(
            tr('{{value0}} {{value1}} received', {
              value0: localize(quantity),
              value1: localize(quantity === 1 ? 'unit' : 'units'),
            }),
            {
              description: 'Your inventory has been updated automatically.',
            },
          )
          onClose()
        }}
      >
        <div className="delivery-summary">
          <span className="delivery-icon">
            <PackageCheck size={25} />
          </span>
          <div>
            <strong>{order?.vendor}</strong>
            <span>
              {remaining} {remaining === 1 ? tr('unit') : tr('units')}
              {' ' + tr('awaiting delivery')}
            </span>
          </div>
        </div>
        <Field
          label={tr('Quantity received')}
          hint={tr(
            'Receiving a partial delivery? Enter only the units that arrived. You can receive the rest later.',
          )}
        >
          <Input
            autoFocus
            required
            type="number"
            min="1"
            max={remaining}
            step="1"
            value={quantity || ''}
            onChange={(event) => setQuantity(Number(event.target.value))}
          />
        </Field>
        <div className="drawer-form-footer">
          <Button onClick={onClose}>{tr('Cancel')}</Button>
          <Button variant="primary" type="submit">
            <PackageCheck size={16} />
            {tr('Confirm delivery')}
          </Button>
        </div>
      </form>
    </Drawer>
  )
}
