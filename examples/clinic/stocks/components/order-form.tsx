import { useI18n } from '../../../../src/template/i18n'
import { useEffect, useState } from 'react'
import { Check, PackagePlus } from 'lucide-react'
import { vendors } from '../../data/stock'
import { useWorkspace } from '../../workspace/workspace-context'
import { currency, localDate } from '../../lib/utils'
import type { OrderItem } from '../../types'
import { Button, Checkbox, Combobox, DatePicker, Drawer, Field, toast } from '@/template/ui'
import { OrderLines } from './order-lines'

export function OrderForm({
  open,
  productId,
  onOpenChange,
}: {
  open: boolean
  productId?: string
  onOpenChange: (value: boolean) => void
}) {
  const { t: tr, text: localize } = useI18n()

  const { products, addOrder } = useWorkspace()
  const [vendor, setVendor] = useState(vendors[0])
  const [date, setDate] = useState(localDate())
  const [items, setItems] = useState<OrderItem[]>([])
  const [emailSent, setEmailSent] = useState(false)
  useEffect(() => {
    if (!open) return
    const product = products.find((product) => product.id === productId) ?? products[0]
    setVendor(vendors[0])
    setDate(localDate())
    setEmailSent(false)
    setItems([{ productId: product.id, quantity: 1, unitPrice: product.price }])
  }, [open, productId])
  const total = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title={tr('Order stock')}
      description={tr('Good care starts with having the right supplies.')}
      size="lg"
    >
      <form
        onSubmit={async (event) => {
          event.preventDefault()
          if (
            !items.length ||
            items.some(
              (item) =>
                !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 10000,
            )
          ) {
            toast.error(tr('Add at least one product with a valid quantity.'))
            return
          }
          const id = `OS${crypto.randomUUID().slice(0, 6).toUpperCase()}`
          if (!(await addOrder({ id, createdAt: date, vendor, items, received: 0, emailSent })))
            return
          toast.success(tr('Order #{{value0}} created', { value0: localize(id) }), {
            description: 'You can track its delivery in Order Stock.',
          })
          onOpenChange(false)
        }}
      >
        <div className="form-grid">
          <Field label={tr('Vendor')}>
            <Combobox
              value={vendor}
              onChange={setVendor}
              options={vendors.map((value) => ({ value, label: value }))}
            />
          </Field>
          <Field label={tr('Order date')}>
            <DatePicker
              value={date}
              clearable={false}
              onChange={(value) => setDate(value ?? localDate())}
            />
          </Field>
        </div>
        <div className="form-section-heading">
          <span>
            <PackagePlus size={16} />
            {tr('Order items')}
          </span>
          <span>
            {items.length} {items.length === 1 ? tr('product') : tr('products')}
          </span>
        </div>
        <OrderLines products={products} items={items} onChange={setItems} />
        <label className="inline-checkbox">
          <Checkbox checked={emailSent} onChange={(event) => setEmailSent(event.target.checked)} />
          <span>
            {tr('Vendor has already been notified by email')}
            <small>{tr('Records email status only. No email is sent from this template.')}</small>
          </span>
        </label>
        <div className="order-total">
          <span>
            {tr('Order total')}
            <small>{tr('All prices in USD')}</small>
          </span>
          <strong>{currency(total, 2)}</strong>
        </div>
        <div className="drawer-form-footer">
          <Button onClick={() => onOpenChange(false)}>{tr('Cancel')}</Button>
          <Button type="submit" variant="primary">
            <Check size={15} />
            {tr('Create order')}
          </Button>
        </div>
      </form>
    </Drawer>
  )
}
