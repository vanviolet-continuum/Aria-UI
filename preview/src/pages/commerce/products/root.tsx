import { useI18n } from '@templates/i18n'
import { Card, CardBody } from '@templates/ui/card'
import { Text } from '@templates/ui/text'
import { ActionMenu } from '@templates/ui/action.menu'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { EmptyState } from '@templates/ui/empty.state'
import { RecordPage } from '../../../components/record.page'
import { RecordMetrics, RecordStatus, money } from '../../../components/record.display'
import { ProductArt } from '../../../components/scenario.shared'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import {
  productValuesSchema,
  categoryLabels,
  stockStatus,
  type Product,
  type ScenarioValues,
} from '../../../data/scenarios/model'

export default function ProductsPage() {
  const { t, locale } = useI18n(),
    { data, save, remove, persistent } = useScenarios()
  return (
    <RecordPage<Product, ScenarioValues['products']>
      eyebrow="Commerce"
      title="Products"
      singular="Product"
      description="A considered catalog, ready for your next customer."
      newLabel="New product"
      records={data.products}
      persistent={persistent}
      getTitle={(item) => item.name}
      getSubtitle={(item) => item.sku}
      searchText={(item) => [item.name, item.sku, item.description].join(' ')}
      schema={productValuesSchema}
      initialValues={(item) =>
        item
          ? productValuesSchema.parse(item)
          : {
              name: '',
              sku: '',
              category: 'desk',
              price: 0,
              stock: 0,
              reorderAt: 5,
              status: 'draft',
              description: '',
            }
      }
      defaultView="grid"
      customView={{
        value: 'grid',
        label: 'Gallery',
        render: (rows, actions) =>
          rows.length ? (
            <div className="grid gap-aria-md sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {rows.map((product) => (
                <Card key={product.id} className="overflow-clip">
                  <CardBody className="space-y-aria-md">
                    <ProductArt product={product} />
                    <div className="flex items-start justify-between gap-aria-sm">
                      <div className="min-w-0 space-y-aria-xs">
                        <Text
                          as="button"
                          type="button"
                          variant="label"
                          className="cursor-pointer text-start hover:text-primary"
                          onClick={() => actions.view(product)}
                        >
                          {product.name}
                        </Text>
                        <Text variant="caption">
                          {product.sku} · {t(categoryLabels[product.category])}
                        </Text>
                      </div>
                      <ActionMenu
                        items={actions.menu(product)}
                        label={t('Actions') + ': ' + product.name}
                      />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-aria-sm">
                      <Text variant="label">{money(product.price, locale)}</Text>
                      <RecordStatus value={stockStatus(product)} />
                    </div>
                    <Text variant="caption">
                      {t('{{count}} units available', { count: product.stock })}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title={t('No matching records')}
              description={t('Try another keyword or adjust your filters.')}
            />
          ),
      }}
      filters={[
        {
          id: 'category',
          label: t('Category'),
          type: 'choice',
          accessor: (item) => item.category,
          options: ['desk', 'accessories', 'stationery'].map((value) => ({
            value,
            label: t(categoryLabels[value]),
          })),
        },
        {
          id: 'status',
          label: t('Status'),
          type: 'choice',
          accessor: (item) => item.status,
          options: ['active', 'draft', 'archived'].map((value) => ({ value, label: t(value) })),
        },
      ]}
      columns={[
        { id: 'category', header: t('Category'), cell: (item) => t(categoryLabels[item.category]) },
        {
          id: 'price',
          header: t('Price'),
          sortable: true,
          cell: (item) => money(item.price, locale),
        },
        {
          id: 'stock',
          header: t('Stock'),
          sortable: true,
          cell: (item) => (
            <div className="flex items-center gap-aria-sm">
              <Text>{item.stock}</Text>
              <RecordStatus value={stockStatus(item)} />
            </div>
          ),
        },
        { id: 'status', header: t('Status'), cell: (item) => <RecordStatus value={item.status} /> },
      ]}
      sorters={{ price: (item) => item.price, stock: (item) => item.stock }}
      fields={[
        { name: 'name', label: 'Product name', required: true, full: true },
        { name: 'sku', label: 'SKU', required: true },
        {
          name: 'category',
          label: 'Category',
          type: 'select',
          options: ['desk', 'accessories', 'stationery'].map((value) => ({
            value,
            label: t(categoryLabels[value]),
          })),
        },
        { name: 'price', label: 'Price', type: 'money', required: true },
        { name: 'stock', label: 'Available stock', type: 'number', required: true },
        { name: 'reorderAt', label: 'Low stock threshold', type: 'number' },
        {
          name: 'status',
          label: 'Status',
          type: 'select',
          options: ['active', 'draft', 'archived'].map((value) => ({ value, label: t(value) })),
        },
        { name: 'description', label: 'Description', type: 'textarea', full: true },
      ]}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Catalog products', value: data.products.length },
            {
              label: 'Active products',
              value: data.products.filter((item) => item.status === 'active').length,
            },
            {
              label: 'Low stock',
              value: data.products.filter((item) => item.stock <= item.reorderAt).length,
            },
            {
              label: 'Inventory value',
              value: money(
                data.products.reduce((sum, item) => sum + item.stock * item.price, 0),
                locale,
              ),
            },
          ]}
        />
      }
      onSave={(values, id) => {
        save('products', values, id)
      }}
      onDelete={(item) => remove('products', item.id)}
      canDelete={(item) => !data.orders.some((order) => order.productId === item.id)}
      renderDetail={(product) => (
        <DetailView
          variant="compact"
          title={<span>{product.name}</span>}
          description={<span>{product.sku}</span>}
          badge={<RecordStatus value={product.status} />}
        >
          <ProductArt product={product} />
          <DetailSection title={t('Product details')}>
            <DetailList
              items={[
                {
                  id: 'category',
                  label: t('Category'),
                  value: t(categoryLabels[product.category]),
                },
                { id: 'price', label: t('Price'), value: money(product.price, locale) },
                { id: 'stock', label: t('Available stock'), value: product.stock },
                { id: 'reorder', label: t('Low stock threshold'), value: product.reorderAt },
              ]}
            />
          </DetailSection>
          <DetailSection title={t('Description')}>
            <Text className="whitespace-pre-wrap">{product.description || '—'}</Text>
          </DetailSection>
        </DetailView>
      )}
    />
  )
}
