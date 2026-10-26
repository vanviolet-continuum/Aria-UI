import { useI18n } from '../../../../src/template/i18n'
import {
  ArrowUpRight,
  Boxes,
  CircleDollarSign,
  FileText,
  Package,
  ShieldCheck,
  Tag,
} from 'lucide-react'
import { Button, DetailList, DetailSection, DetailStats, DetailView, Drawer } from '@/template/ui'
import { StatusBadge } from '@/template/ui/status-badge/status-badge'
import { currency, stockStatus } from '../../lib/utils'
import type { Product } from '../../types'

export function ProductDetailContent({ product }: { product: Product }) {
  const { t: tr, text: localize } = useI18n()

  return (
    <DetailView
      eyebrow={`${tr('Product')} / ${product.sku}`}
      title={product.name}
      description={tr('Everything you need to know about this inventory item.')}
      avatar={<Package size={28} strokeWidth={1.5} />}
      badge={<StatusBadge status={stockStatus(product)} />}
      meta={
        <>
          <span>
            <Tag size={14} />
            {localize(product.category)}
          </span>
          <span>
            <Boxes size={14} />
            {tr('Inventory')}
          </span>
        </>
      }
      summary={
        <DetailStats
          items={[
            {
              id: 'stock',
              label: tr('Available stock'),
              value: product.stock,
              hint: tr('units'),
              icon: <Boxes size={16} />,
            },
            {
              id: 'price',
              label: tr('Unit price'),
              value: currency(product.price, 2),
              hint: tr('Per unit'),
              icon: <CircleDollarSign size={16} />,
            },
            {
              id: 'minimum',
              label: tr('Minimum stock'),
              value: product.minimumStock,
              hint: tr('Low stock threshold'),
              icon: <ShieldCheck size={16} />,
            },
          ]}
        />
      }
      aside={
        <DetailSection title={tr('Stock guidance')} icon={<ShieldCheck size={16} />}>
          <p>
            {tr('Low stock reminders start at')}{' '}
            <strong>
              {product.minimumStock} {tr('units')}
            </strong>
            .
          </p>
          <p>{tr('Receive a stock order to replenish this product.')}</p>
        </DetailSection>
      }
    >
      <DetailSection
        title={tr('Product information')}
        description={tr('The essentials, all in one place.')}
        icon={<FileText size={16} />}
      >
        <DetailList
          items={[
            { id: 'name', label: tr('Product name'), value: product.name },
            { id: 'sku', label: tr('SKU'), value: product.sku },
            { id: 'category', label: tr('Category'), value: localize(product.category) },
            {
              id: 'status',
              label: tr('Stock status'),
              value: <StatusBadge status={stockStatus(product)} />,
            },
            { id: 'id', label: tr('Product ID'), value: product.id, fullWidth: true },
          ]}
        />
      </DetailSection>
    </DetailView>
  )
}

export function ProductDetails({
  product,
  onClose,
  onOrder,
}: {
  product: Product | null
  onClose: () => void
  onOrder: (id: string) => void
}) {
  const { t: tr, text: localize } = useI18n()

  return (
    <Drawer
      open={!!product}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
      title={localize(product?.name ?? 'Product details')}
      description={localize(product ? `${product.sku} · ${product.category}` : '')}
      footer={
        <>
          <Button onClick={onClose}>{tr('Close')}</Button>
          <Button
            variant="primary"
            onClick={() => {
              if (product) {
                onOrder(product.id)
                onClose()
              }
            }}
          >
            {tr('Order product')}
            <ArrowUpRight size={15} />
          </Button>
        </>
      }
    >
      {product && <ProductDetailContent product={product} />}
    </Drawer>
  )
}
