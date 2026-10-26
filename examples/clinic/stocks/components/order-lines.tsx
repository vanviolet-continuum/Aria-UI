import { useI18n } from '../../../../src/template/i18n'
import { Plus, Trash2 } from 'lucide-react'
import { Button, Combobox, Field, Input } from '@/template/ui'
import { currency } from '../../lib/utils'
import type { OrderItem, Product } from '../../types'

export function OrderLines({
  products,
  items,
  onChange,
}: {
  products: Product[]
  items: OrderItem[]
  onChange: (items: OrderItem[]) => void
}) {
  const { t: tr, text: localize } = useI18n()

  const update = (index: number, values: Partial<OrderItem>) =>
    onChange(items.map((item, position) => (position === index ? { ...item, ...values } : item)))
  return (
    <>
      <div className="order-lines">
        {items.map((item, index) => (
          <div className="order-line" key={index}>
            <Field label={tr('Product')}>
              <Combobox
                value={item.productId}
                options={products
                  .filter(
                    (product) =>
                      product.id === item.productId ||
                      !items.some((line) => line.productId === product.id),
                  )
                  .map((product) => ({
                    value: product.id,
                    label: product.name,
                    description: product.sku,
                  }))}
                onChange={(id) => {
                  const product = products.find((product) => product.id === id)
                  if (product) update(index, { productId: id, unitPrice: product.price })
                }}
              />
            </Field>
            <Field label={tr('Qty')}>
              <Input
                type="number"
                min="1"
                max="10000"
                step="1"
                required
                value={item.quantity || ''}
                onChange={(event) => update(index, { quantity: Number(event.target.value) })}
              />
            </Field>
            <div className="line-price">
              <span>{tr('Subtotal')}</span>
              <strong>{currency(item.quantity * item.unitPrice, 2)}</strong>
            </div>
            <button
              type="button"
              className="icon-button"
              aria-label={tr('Remove item {{value0}}', { value0: localize(index + 1) })}
              disabled={items.length === 1}
              onClick={() => onChange(items.filter((_, position) => position !== index))}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
      <Button
        className="add-line-button"
        size="sm"
        disabled={items.length >= products.length}
        onClick={() => {
          const product = products.find(
            (product) => !items.some((item) => item.productId === product.id),
          )
          if (product)
            onChange([...items, { productId: product.id, quantity: 1, unitPrice: product.price }])
        }}
      >
        <Plus size={14} />
        {tr('Add another product')}
      </Button>
    </>
  )
}
