import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { Stepper } from '@templates/ui/stepper'
import { Text } from '@templates/ui/text'
import { Truck, X, Check } from '@templates/icons'
import { toast } from '@templates/ui/toast'
import { RecordPage } from '../../../components/record.page'
import { RecordStatus, RecordMetrics, money, shortDate } from '../../../components/record.display'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import {
  orderValuesSchema,
  orderStages,
  valuesOf,
  type Order,
  type ScenarioValues,
} from '../../../data/scenarios/model'

export default function OrdersPage() {
  const { t, locale } = useI18n(),
    { data, save, remove, persistent } = useScenarios()
  const customer = (item: Order) => data.customers.find((person) => person.id === item.customerId)
  function changeStatus(order: Order, status: Order['status']) {
    try {
      save('orders', { ...valuesOf('orders', order), status }, order.id)
      toast.success(t('Order updated'), {
        description: t('The order status and available inventory have been updated.'),
      })
    } catch (error) {
      toast.error(t('Unable to update order'), {
        description: error instanceof Error ? t(error.message) : t('Please try again.'),
      })
    }
  }
  return (
    <RecordPage<Order, ScenarioValues['orders']>
      eyebrow="Commerce"
      title="Orders"
      singular="Order"
      description="From a new order to a doorstep delivery, with every step in view."
      newLabel="New order"
      records={data.orders}
      persistent={persistent}
      getTitle={(item) => item.number}
      getSubtitle={(item) => item.customerName}
      searchText={(item) => [item.number, item.productName, item.customerName].join(' ')}
      schema={orderValuesSchema}
      initialValues={(item) =>
        item
          ? valuesOf('orders', item)
          : { customerId: '', productId: '', quantity: 1, status: 'pending', note: '' }
      }
      fields={[
        {
          name: 'customerId',
          label: 'Customer',
          type: 'select',
          required: true,
          full: true,
          options: data.customers.map((item) => ({
            value: item.id,
            label: item.name,
            description: item.email,
          })),
        },
        {
          name: 'productId',
          label: 'Product',
          type: 'select',
          required: true,
          full: true,
          options: data.products.map((item) => ({
            value: item.id,
            label: item.name,
            description:
              money(item.price, locale) +
              ' · ' +
              t('{{count}} units available', { count: item.stock }),
          })),
        },
        { name: 'quantity', label: 'Quantity', type: 'number', required: true },
        {
          name: 'status',
          label: 'Status',
          type: 'select',
          options: [...orderStages, 'cancelled'].map((value) => ({ value, label: t(value) })),
        },
        {
          name: 'note',
          label: 'Order notes',
          type: 'textarea',
          full: true,
          hint: 'Stock is reserved when an order is created. Cancelling returns the items to inventory.',
        },
      ]}
      columns={[
        {
          id: 'product',
          header: t('Product'),
          cell: (item) => (
            <div className="space-y-aria-xs">
              <Text variant="label">{item.productName}</Text>
              <Text variant="caption">{t('{{count}} items', { count: item.quantity })}</Text>
            </div>
          ),
        },
        {
          id: 'total',
          header: t('Total'),
          sortable: true,
          cell: (item) => money(item.unitPrice * item.quantity, locale),
        },
        {
          id: 'createdAt',
          header: t('Placed'),
          sortable: true,
          cell: (item) => shortDate(item.createdAt, locale),
        },
        { id: 'status', header: t('Status'), cell: (item) => <RecordStatus value={item.status} /> },
      ]}
      sorters={{
        total: (item) => item.quantity * item.unitPrice,
        createdAt: (item) => item.createdAt,
      }}
      filters={[
        {
          id: 'status',
          label: t('Status'),
          type: 'choice',
          accessor: (item) => item.status,
          options: [...orderStages, 'cancelled'].map((value) => ({ value, label: t(value) })),
        },
        {
          id: 'client',
          label: t('Customer'),
          type: 'choice',
          accessor: (item) => item.customerId,
          options: data.customers.map((item) => ({ value: item.id, label: item.name })),
        },
      ]}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Total orders', value: data.orders.length },
            {
              label: 'Awaiting fulfillment',
              value: data.orders.filter((item) => ['pending', 'processing'].includes(item.status))
                .length,
            },
            {
              label: 'In transit',
              value: data.orders.filter((item) => item.status === 'shipped').length,
            },
            {
              label: 'Order value',
              value: money(
                data.orders
                  .filter((item) => item.status !== 'cancelled')
                  .reduce((sum, item) => sum + item.quantity * item.unitPrice, 0),
                locale,
              ),
            },
          ]}
        />
      }
      onSave={(values, id) => {
        save('orders', values, id)
      }}
      onDelete={(item) => remove('orders', item.id)}
      canDelete={(item) => ['pending', 'cancelled'].includes(item.status)}
      deleteDisabledReason="Only pending or cancelled orders can be deleted."
      extraActions={(item) => {
        const index = orderStages.indexOf(item.status as (typeof orderStages)[number]),
          next = orderStages[index + 1]
        return [
          ...(index >= 0 && next
            ? [
                {
                  id: 'advance',
                  label: t(
                    next === 'processing'
                      ? 'Start processing'
                      : next === 'shipped'
                        ? 'Mark as shipped'
                        : 'Mark as delivered',
                  ),
                  icon: next === 'delivered' ? <Check size={16} /> : <Truck size={16} />,
                  onSelect: () => changeStatus(item, next),
                },
              ]
            : []),
          ...(['pending', 'processing'].includes(item.status)
            ? [
                {
                  id: 'cancel',
                  label: t('Cancel order'),
                  icon: <X size={16} />,
                  onSelect: () => changeStatus(item, 'cancelled'),
                },
              ]
            : []),
        ]
      }}
      renderDetail={(order) => (
        <DetailView
          variant="compact"
          title={<span>{order.number}</span>}
          description={<span>{order.customerName}</span>}
          badge={<RecordStatus value={order.status} />}
        >
          <DetailSection title={t('Fulfillment')}>
            {order.status === 'cancelled' ? (
              <Text variant="description">
                {t('This order was cancelled. Reserved stock was returned to inventory.')}
              </Text>
            ) : (
              <Stepper
                steps={orderStages.map((id) => ({ id, title: t(id) }))}
                activeStep={order.status === 'delivered' ? 4 : orderStages.indexOf(order.status)}
              />
            )}
          </DetailSection>
          <DetailSection title={t('Order summary')}>
            <DetailList
              items={[
                {
                  id: 'product',
                  label: t('Product'),
                  value: (
                    <Link
                      className="text-primary hover:underline"
                      to={
                        '/preview/commerce/products?view=table&panel=detail&record=' +
                        encodeURIComponent(order.productId)
                      }
                    >
                      {order.productName}
                    </Link>
                  ),
                },
                { id: 'price', label: t('Unit price'), value: money(order.unitPrice, locale) },
                { id: 'quantity', label: t('Quantity'), value: order.quantity },
                {
                  id: 'total',
                  label: t('Total'),
                  value: money(order.unitPrice * order.quantity, locale),
                },
                { id: 'placed', label: t('Placed'), value: shortDate(order.createdAt, locale) },
              ]}
            />
          </DetailSection>
          <DetailSection title={t('Customer')}>
            <DetailList
              items={[
                {
                  id: 'name',
                  label: t('Name'),
                  value: (
                    <Link
                      className="text-primary hover:underline"
                      to={
                        '/preview/commerce/customers?panel=detail&record=' +
                        encodeURIComponent(order.customerId)
                      }
                    >
                      {order.customerName}
                    </Link>
                  ),
                },
                {
                  id: 'address',
                  label: t('Shipping address'),
                  value: customer(order)?.address || '—',
                },
                { id: 'city', label: t('City'), value: customer(order)?.city || '—' },
              ]}
            />
          </DetailSection>
          <DetailSection title={t('Order notes')}>
            <Text className="whitespace-pre-wrap">{order.note || '—'}</Text>
          </DetailSection>
        </DetailView>
      )}
    />
  )
}
