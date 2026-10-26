import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, PanelRightOpen } from 'lucide-react'
import { Button, Combobox, Drawer, EmptyState } from '@/template/ui'
import { useI18n } from '@/template/i18n'
import { ProductDetailContent } from '../../clinic/stocks/components/product-details'
import { useWorkspace } from '../../clinic/workspace/workspace-context'
import '../styles/details.css'

export function DetailsPage() {
  const { t: tr } = useI18n()
  const navigate = useNavigate()
  const { products } = useWorkspace()
  const [selectedId, setSelectedId] = useState('')
  const [open, setOpen] = useState(false)
  const product = products.find((item) => item.id === selectedId) ?? products[0]

  return (
    <div className="standard-page details-example-page page-enter">
      <div className="details-example-toolbar">
        <Button
          variant="text"
          color="secondary"
          onClick={() => navigate('/components?category=data')}
        >
          <ArrowLeft size={15} />
          {tr('UI Components')}
        </Button>
        {product && (
          <div className="details-example-actions">
            <Combobox
              value={product.id}
              onChange={setSelectedId}
              options={products.map((item) => ({
                value: item.id,
                label: item.name,
                description: item.sku,
              }))}
              aria-label={tr('Choose a product')}
            />
            <Button variant="contained" onClick={() => setOpen(true)}>
              <PanelRightOpen size={15} />
              {tr('Open in drawer')}
            </Button>
          </div>
        )}
      </div>
      {product ? (
        <ProductDetailContent product={product} />
      ) : (
        <EmptyState
          title={tr('No products yet')}
          description={tr('Add a product to see its details here.')}
          action={<Button onClick={() => navigate('/stocks')}>{tr('View inventory')}</Button>}
        />
      )}
      <Drawer
        open={open && !!product}
        onOpenChange={setOpen}
        title={tr('Product details')}
        description={product?.sku}
        size="lg"
        footer={
          <>
            <Button onClick={() => setOpen(false)}>{tr('Close')}</Button>
            <Button variant="contained" onClick={() => navigate('/stocks')}>
              {tr('View inventory')}
            </Button>
          </>
        }
      >
        {product && <ProductDetailContent product={product} />}
      </Drawer>
    </div>
  )
}
