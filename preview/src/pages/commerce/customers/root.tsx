import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { Avatar } from '@templates/ui/avatar'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { Text } from '@templates/ui/text'
import { RecordPage } from '../../../components/record.page'
import { RecordStatus, RecordMetrics, money } from '../../../components/record.display'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import {
  customerValuesSchema,
  type Customer,
  type ScenarioValues,
} from '../../../data/scenarios/model'

export default function CustomersPage() {
  const { t, locale } = useI18n(),
    { data, save, remove, persistent } = useScenarios()
  const orders = (id: string) => data.orders.filter((item) => item.customerId === id)
  const total = (id: string) =>
    orders(id)
      .filter((item) => item.status !== 'cancelled')
      .reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
  return (
    <RecordPage<Customer, ScenarioValues['customers']>
      eyebrow="Commerce"
      title="Customers"
      singular="Customer"
      description="The people behind every order. Keep their details close."
      newLabel="New customer"
      records={data.customers}
      persistent={persistent}
      getTitle={(item) => item.name}
      getSubtitle={(item) => item.email}
      searchText={(item) => [item.name, item.email, item.city].join(' ')}
      schema={customerValuesSchema}
      initialValues={(item) =>
        item
          ? customerValuesSchema.parse(item)
          : { name: '', email: '', phone: '', city: '', address: '', status: 'active' }
      }
      fields={[
        { name: 'name', label: 'Customer name', required: true, full: true },
        { name: 'email', label: 'Email address', type: 'email', required: true },
        { name: 'phone', label: 'Phone number' },
        { name: 'city', label: 'City', required: true },
        {
          name: 'status',
          label: 'Status',
          type: 'select',
          options: ['active', 'inactive'].map((value) => ({ value, label: t(value) })),
        },
        { name: 'address', label: 'Shipping address', type: 'textarea', full: true },
      ]}
      columns={[
        { id: 'city', header: t('City'), sortable: true, cell: (item) => item.city },
        { id: 'orders', header: t('Orders'), cell: (item) => orders(item.id).length },
        { id: 'spent', header: t('Order value'), cell: (item) => money(total(item.id), locale) },
        { id: 'status', header: t('Status'), cell: (item) => <RecordStatus value={item.status} /> },
      ]}
      sorters={{ city: (item) => item.city }}
      filters={[
        {
          id: 'status',
          label: t('Status'),
          type: 'choice',
          accessor: (item) => item.status,
          options: ['active', 'inactive'].map((value) => ({ value, label: t(value) })),
        },
      ]}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Customers', value: data.customers.length },
            {
              label: 'Active customers',
              value: data.customers.filter((item) => item.status === 'active').length,
            },
            { label: 'Cities', value: new Set(data.customers.map((item) => item.city)).size },
            {
              label: 'Repeat customers',
              value: data.customers.filter((item) => orders(item.id).length > 1).length,
            },
          ]}
        />
      }
      onSave={(values, id) => {
        save('customers', values, id)
      }}
      onDelete={(item) => remove('customers', item.id)}
      canDelete={(item) => !orders(item.id).length}
      renderDetail={(customer) => (
        <DetailView
          variant="compact"
          title={<span>{customer.name}</span>}
          description={<span>{customer.email}</span>}
          avatar={<Avatar name={customer.name} size="lg" />}
          badge={<RecordStatus value={customer.status} />}
        >
          <DetailSection title={t('Contact details')}>
            <DetailList
              items={[
                {
                  id: 'email',
                  label: t('Email address'),
                  value: (
                    <a className="text-primary hover:underline" href={'mailto:' + customer.email}>
                      {customer.email}
                    </a>
                  ),
                },
                { id: 'phone', label: t('Phone number'), value: customer.phone || '—' },
                { id: 'city', label: t('City'), value: customer.city },
                { id: 'address', label: t('Shipping address'), value: customer.address || '—' },
                { id: 'spent', label: t('Order value'), value: money(total(customer.id), locale) },
              ]}
            />
          </DetailSection>
          <DetailSection title={t('Order history')}>
            <div className="space-y-aria-sm">
              {orders(customer.id).map((order) => (
                <Link
                  className="flex items-center justify-between gap-aria-sm rounded-aria-md border border-outline p-aria-sm text-primary hover:bg-primary-soft"
                  key={order.id}
                  to={
                    '/preview/commerce/orders?panel=detail&record=' + encodeURIComponent(order.id)
                  }
                >
                  <Text variant="label">{order.number}</Text>
                  <RecordStatus value={order.status} />
                </Link>
              ))}
              {!orders(customer.id).length && (
                <Text variant="description">{t('No orders yet.')}</Text>
              )}
            </div>
          </DetailSection>
        </DetailView>
      )}
    />
  )
}
