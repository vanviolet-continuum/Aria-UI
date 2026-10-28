import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { Stack } from '@templates/ui/stack'
import { Text } from '@templates/ui/text'
import { Badge } from '@templates/ui/badge'
import { RecordPage } from '../../../components/record.page'
import { RecordMetrics, RecordStatus, money } from '../../../components/record.display'
import { useOperations } from '../../../data/operations/operations.provider'
import { clientValuesSchema, type Values, type Client } from '../../../data/operations/model'

export default function ClientsPage() {
  const { t, locale } = useI18n()
  const { data, save, remove, persistent } = useOperations()
  const linked = (client: Client) =>
    data.projects.some((project) => project.clientId === client.id) ||
    data.invoices.some((invoice) => invoice.clientId === client.id)
  return (
    <RecordPage<Client, Values['clients']>
      title="Clients"
      singular="Client"
      description="Build lasting relationships and keep every client in context."
      newLabel="Add client"
      records={data.clients}
      persistent={persistent}
      getTitle={(client) => client.name}
      getSubtitle={(client) => client.email}
      searchText={(client) =>
        [client.name, client.contact, client.email, client.industry].join(' ')
      }
      schema={clientValuesSchema}
      initialValues={(client) => ({
        name: client?.name ?? '',
        contact: client?.contact ?? '',
        email: client?.email ?? '',
        phone: client?.phone ?? '',
        industry: client?.industry ?? '',
        status: client?.status ?? 'lead',
        address: client?.address ?? '',
        notes: client?.notes ?? '',
      })}
      fields={[
        { name: 'name', label: 'Company name', required: true },
        { name: 'contact', label: 'Contact person', required: true },
        { name: 'email', label: 'Email address', type: 'email', required: true },
        { name: 'phone', label: 'Phone number' },
        { name: 'industry', label: 'Industry' },
        {
          name: 'status',
          label: 'Status',
          type: 'select',
          options: ['lead', 'active', 'inactive'].map((value) => ({
            value,
            label: t(value === 'lead' ? 'Lead' : value === 'active' ? 'Active' : 'Inactive'),
          })),
        },
        { name: 'address', label: 'Address', full: true },
        { name: 'notes', label: 'Notes', type: 'textarea', full: true },
      ]}
      columns={[
        {
          id: 'contact',
          header: t('Contact person'),
          cell: (client) => (
            <Text>
              <span>{client.contact}</span>
            </Text>
          ),
        },
        { id: 'industry', header: t('Industry'), accessor: 'industry' },
        {
          id: 'projects',
          header: t('Projects'),
          cell: (client) => (
            <Badge variant="primary">
              {data.projects.filter((project) => project.clientId === client.id).length}
            </Badge>
          ),
        },
        {
          id: 'status',
          header: t('Status'),
          cell: (client) => <RecordStatus value={client.status} />,
        },
      ]}
      filters={[
        {
          id: 'status',
          type: 'choice',
          label: t('Status'),
          accessor: 'status',
          options: ['lead', 'active', 'inactive'].map((value) => ({
            value,
            label: t(value === 'lead' ? 'Lead' : value === 'active' ? 'Active' : 'Inactive'),
          })),
        },
      ]}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Total clients', value: data.clients.length },
            {
              label: 'Active clients',
              value: data.clients.filter((client) => client.status === 'active').length,
            },
            {
              label: 'Prospective clients',
              value: data.clients.filter((client) => client.status === 'lead').length,
            },
            {
              label: 'Client projects',
              value: data.projects.filter((project) => project.clientId).length,
            },
          ]}
        />
      }
      onSave={(values, id) => {
        save('clients', values, id)
      }}
      onDelete={(client) => remove('clients', client.id)}
      canDelete={(client) => !linked(client)}
      renderDetail={(client) => (
        <DetailView
          variant="compact"
          title={<span>{client.name}</span>}
          description={<span>{client.industry}</span>}
          badge={<RecordStatus value={client.status} />}
        >
          <DetailSection title={t('Contact information')}>
            <DetailList
              items={[
                { id: 'contact', label: t('Contact person'), value: <span>{client.contact}</span> },
                {
                  id: 'email',
                  label: t('Email address'),
                  value: <a href={'mailto:' + client.email}>{client.email}</a>,
                },
                {
                  id: 'phone',
                  label: t('Phone number'),
                  value: <span>{client.phone || '—'}</span>,
                },
                { id: 'address', label: t('Address'), value: <span>{client.address || '—'}</span> },
              ]}
            />
          </DetailSection>
          <DetailSection title={t('Projects')}>
            <Stack gap="sm">
              {data.projects
                .filter((project) => project.clientId === client.id)
                .map((project) => (
                  <Link
                    key={project.id}
                    className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    to={
                      '/preview/workspace/projects?panel=detail&record=' +
                      encodeURIComponent(project.id)
                    }
                  >
                    {project.name}
                  </Link>
                ))}
              {!data.projects.some((project) => project.clientId === client.id) && (
                <Text variant="description">{t('No linked projects yet.')}</Text>
              )}
            </Stack>
          </DetailSection>
          <DetailSection title={t('Billing summary')}>
            <DetailList
              items={[
                {
                  id: 'paid',
                  label: t('Paid'),
                  value: money(
                    data.invoices
                      .filter(
                        (invoice) => invoice.clientId === client.id && invoice.status === 'paid',
                      )
                      .reduce((total, invoice) => total + invoice.amount, 0),
                    locale,
                  ),
                },
                {
                  id: 'open',
                  label: t('Outstanding'),
                  value: money(
                    data.invoices
                      .filter(
                        (invoice) => invoice.clientId === client.id && invoice.status === 'sent',
                      )
                      .reduce((total, invoice) => total + invoice.amount, 0),
                    locale,
                  ),
                },
              ]}
            />
            <Link
              className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              to={'/preview/workspace/invoices?client=' + encodeURIComponent(client.id)}
            >
              {t('View client invoices')}
            </Link>
          </DetailSection>
          {client.notes && (
            <DetailSection title={t('Notes')}>
              <Text style={{ whiteSpace: 'pre-wrap' }}>
                <span>{client.notes}</span>
              </Text>
            </DetailSection>
          )}
        </DetailView>
      )}
    />
  )
}
