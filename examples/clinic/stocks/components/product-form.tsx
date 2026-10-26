import { useI18n } from '../../../../src/template/i18n'
import { useEffect, useState } from 'react'
import { PackagePlus } from 'lucide-react'
import { useWorkspace } from '../../workspace/workspace-context'
import { Button, Drawer, Field, Input, Combobox, toast } from '@/template/ui'

const empty = { name: '', sku: '', category: 'Consumables', stock: 0, minimumStock: 10, price: 0 }
const categories = ['Consumables', 'Protective equipment', 'Restorative', 'Instruments']

export function ProductForm({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (value: boolean) => void
}) {
  const { t: tr, text: localize } = useI18n()

  const { products, addProduct } = useWorkspace()
  const [draft, setDraft] = useState(empty)
  useEffect(() => {
    if (open) setDraft({ ...empty, sku: `ZD-${crypto.randomUUID().slice(0, 5).toUpperCase()}` })
  }, [open])
  const numberFields = [
    { key: 'stock', label: 'Opening stock', step: '1' },
    { key: 'minimumStock', label: 'Low stock threshold', step: '1' },
    { key: 'price', label: 'Unit price (USD)', step: '0.01' },
  ] as const
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title={tr('Add a product')}
      description={tr('Make room for a new essential in your inventory.')}
    >
      <form
        onSubmit={async (event) => {
          event.preventDefault()
          if (!draft.name.trim() || !draft.sku.trim()) return
          if (
            products.some((product) => product.sku.toLowerCase() === draft.sku.trim().toLowerCase())
          ) {
            toast.error(tr('This SKU already exists. Please use a unique SKU.'))
            return
          }
          if (
            !(await addProduct({
              ...draft,
              name: draft.name.trim(),
              sku: draft.sku.trim(),
              id: crypto.randomUUID(),
              color: 'blue',
            }))
          )
            return
          toast.success(tr('{{value0}} added to inventory', { value0: localize(draft.name) }))
          onOpenChange(false)
        }}
      >
        <div className="form-fields">
          <Field label={tr('Product name')} required>
            <Input
              required
              maxLength={100}
              autoFocus
              pattern=".*\\S.*"
              placeholder={tr('e.g. Dental examination gloves')}
              value={draft.name}
              onChange={(event) => setDraft({ ...draft, name: event.target.value })}
            />
          </Field>
          <div className="form-grid">
            <Field label={tr('SKU')} required>
              <Input
                required
                maxLength={30}
                value={draft.sku}
                onChange={(event) => setDraft({ ...draft, sku: event.target.value })}
              />
            </Field>
            <Field label={tr('Category')}>
              <Combobox
                value={draft.category}
                options={categories.map((value) => ({ value, label: value }))}
                onChange={(nextValue) => setDraft({ ...draft, category: nextValue })}
              />
            </Field>
          </div>
          {numberFields.map(({ key, label, step }) => (
            <Field label={localize(label)} key={key}>
              <Input
                type="number"
                required
                min="0"
                max="1000000"
                step={step}
                value={draft[key]}
                onChange={(event) => setDraft({ ...draft, [key]: Number(event.target.value) })}
              />
            </Field>
          ))}
        </div>
        <div className="drawer-form-footer">
          <Button onClick={() => onOpenChange(false)}>{tr('Cancel')}</Button>
          <Button variant="primary" type="submit">
            <PackagePlus size={16} />
            {tr('Add product')}
          </Button>
        </div>
      </form>
    </Drawer>
  )
}
