import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { Stack } from '@templates/ui/stack'
import { Text } from '@templates/ui/text'
import { MetricValue } from '@templates/ui/metric.value'
import { Check, Download, Mail } from '@templates/icons'
import { toast } from '@templates/ui/toast'
import { RecordPage } from '../../../components/record.page'
import {
  RecordMetrics,
  RecordStatus,
  money,
  shortDate,
  downloadText,
} from '../../../components/record.display'
import { useOperations } from '../../../data/operations/operations.provider'
import {
  invoiceValuesSchema,
  invoiceStatus,
  dayKey,
  dayAfter,
  statusLabels,
  type Invoice,
  type Values,
} from '../../../data/operations/model'

function valuesOf(invoice?: Invoice): Values['invoices'] {
  return {
    number: invoice?.number ?? '',
    clientId: invoice?.clientId ?? '',
    projectId: invoice?.projectId ?? '',
    status: invoice?.status ?? 'draft',
    amount: invoice?.amount ?? 0,
    issuedDate: invoice?.issuedDate ?? dayKey(),
    dueDate: invoice?.dueDate ?? dayAfter(14),
    notes: invoice?.notes ?? '',
  }
}
function csvCell(value: string | number) {
  const text = String(value)
  const safe = typeof value === 'string' && /^[=+\-@\t\r]/.test(text) ? "'" + text : text
  return '"' + safe.replace(/"/g, '""') + '"'
}
export default function InvoicesPage() {
  const { t, locale } = useI18n()
  const { data, save, remove, persistent } = useOperations()
  const clientName = (id: string) =>
    data.clients.find((client) => client.id === id)?.name ?? t('Unknown client')
  const projectName = (id: string) =>
    data.projects.find((project) => project.id === id)?.name ?? t('No project')
  const nextNumber = () => {
    const prefix = 'INV-' + new Date().getFullYear() + '-'
    let index = 1
    while (
      data.invoices.some(
        (invoice) =>
          invoice.number.toLowerCase() === (prefix + String(index).padStart(3, '0')).toLowerCase(),
      )
    )
      index++
    return prefix + String(index).padStart(3, '0')
  }
  const changeStatus = (invoice: Invoice, status: Invoice['status']) => {
    save('invoices', { ...valuesOf(invoice), status }, invoice.id)
    toast.success(t(status === 'paid' ? 'Invoice marked as paid' : 'Invoice marked as sent'), {
      description: t(
        status === 'paid'
          ? 'Only the demo status changed. No payment was processed.'
          : 'Only the demo status changed. No email was sent.',
      ),
    })
  }
  const download = (invoice: Invoice) => {
    const rows = [
      [
        t('Invoice number'),
        t('Client'),
        t('Project'),
        t('Amount'),
        t('Currency'),
        t('Issue date'),
        t('Due date'),
        t('Status'),
      ],
      [
        invoice.number,
        clientName(invoice.clientId),
        projectName(invoice.projectId),
        invoice.amount,
        'IDR',
        invoice.issuedDate,
        invoice.dueDate,
        t(statusLabels[invoiceStatus(invoice)]),
      ],
    ]
    downloadText(
      invoice.number.replace(/[^a-zA-Z0-9_-]/g, '-') + '.csv',
      '\uFEFF' + rows.map((row) => row.map(csvCell).join(',')).join('\r\n'),
      'text/csv;charset=utf-8',
    )
    toast.success(t('Invoice downloaded'), {
      description: t('A CSV copy is ready in your downloads.'),
    })
  }
  return (
    <RecordPage<Invoice, Values['invoices']>
      title="Invoices"
      singular="Invoice"
      description="Keep project billing clear, organized, and easy to follow."
      newLabel="New invoice"
      records={data.invoices}
      persistent={persistent}
      getTitle={(invoice) => invoice.number}
      getSubtitle={(invoice) => clientName(invoice.clientId)}
      searchText={(invoice) =>
        invoice.number + ' ' + clientName(invoice.clientId) + ' ' + projectName(invoice.projectId)
      }
      schema={invoiceValuesSchema}
      initialValues={(invoice) => ({
        ...valuesOf(invoice),
        number: invoice?.number ?? nextNumber(),
      })}
      fields={[
        { name: 'number', label: 'Invoice number', required: true },
        {
          name: 'clientId',
          label: 'Client',
          type: 'select',
          required: true,
          options: data.clients.map((client) => ({ value: client.id, label: client.name })),
        },
        {
          name: 'projectId',
          label: 'Project',
          type: 'select',
          options: [
            { value: '', label: t('No project') },
            ...data.projects.map((project) => ({
              value: project.id,
              label: project.name,
              description: project.clientId ? clientName(project.clientId) : t('Internal project'),
            })),
          ],
        },
        {
          name: 'status',
          label: 'Status',
          type: 'select',
          options: ['draft', 'sent', 'paid'].map((value) => ({
            value,
            label: t(statusLabels[value]),
          })),
        },
        { name: 'issuedDate', label: 'Issue date', type: 'date', required: true },
        { name: 'dueDate', label: 'Due date', type: 'date', required: true },
        { name: 'amount', label: 'Amount', type: 'money', required: true, full: true },
        { name: 'notes', label: 'Notes', type: 'textarea', full: true },
      ]}
      columns={[
        {
          id: 'project',
          header: t('Project'),
          cell: (invoice) => (
            <Text>
              <span>{projectName(invoice.projectId)}</span>
            </Text>
          ),
        },
        {
          id: 'amount',
          header: t('Amount'),
          width: 190,
          sortable: true,
          cell: (invoice) => money(invoice.amount, locale),
        },
        {
          id: 'dueDate',
          header: t('Due date'),
          width: 160,
          sortable: true,
          cell: (invoice) => shortDate(invoice.dueDate, locale),
        },
        {
          id: 'status',
          header: t('Status'),
          width: 140,
          cell: (invoice) => <RecordStatus value={invoiceStatus(invoice)} />,
        },
      ]}
      sorters={{ amount: (invoice) => invoice.amount, dueDate: (invoice) => invoice.dueDate }}
      filters={[
        {
          id: 'status',
          label: t('Status'),
          type: 'choice',
          accessor: invoiceStatus,
          options: ['draft', 'sent', 'paid', 'overdue'].map((value) => ({
            value,
            label: t(statusLabels[value]),
          })),
        },
        {
          id: 'client',
          label: t('Client'),
          type: 'choice',
          accessor: 'clientId',
          options: data.clients.map((client) => ({ value: client.id, label: client.name })),
        },
      ]}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Total invoices', value: data.invoices.length },
            {
              label: 'Paid amount',
              value: money(
                data.invoices
                  .filter((invoice) => invoice.status === 'paid')
                  .reduce((sum, invoice) => sum + invoice.amount, 0),
                locale,
              ),
            },
            {
              label: 'Outstanding',
              value: money(
                data.invoices
                  .filter((invoice) => invoice.status === 'sent')
                  .reduce((sum, invoice) => sum + invoice.amount, 0),
                locale,
              ),
            },
            {
              label: 'Overdue invoices',
              value: data.invoices.filter((invoice) => invoiceStatus(invoice) === 'overdue').length,
            },
          ]}
        />
      }
      onSave={(values, id) => {
        save('invoices', values, id)
      }}
      onDelete={(invoice) => remove('invoices', invoice.id)}
      extraActions={(invoice) => [
        ...(invoice.status !== 'paid'
          ? [
              {
                id: 'paid',
                label: t('Mark as paid'),
                icon: <Check size={16} />,
                onSelect: () => changeStatus(invoice, 'paid'),
              },
            ]
          : []),
        ...(invoice.status === 'draft'
          ? [
              {
                id: 'sent',
                label: t('Mark as sent'),
                icon: <Mail size={16} />,
                onSelect: () => changeStatus(invoice, 'sent'),
              },
            ]
          : []),
        {
          id: 'download',
          label: t('Download CSV'),
          icon: <Download size={16} />,
          onSelect: () => download(invoice),
        },
      ]}
      renderDetail={(invoice) => (
        <DetailView
          variant="compact"
          title={<span>{invoice.number}</span>}
          description={<span>{clientName(invoice.clientId)}</span>}
          badge={<RecordStatus value={invoiceStatus(invoice)} />}
        >
          <DetailSection title={t('Invoice total')}>
            <Stack gap="sm">
              <MetricValue>{money(invoice.amount, locale)}</MetricValue>
              <Text variant="caption">{t('Sample billing data. No payment is processed.')}</Text>
            </Stack>
          </DetailSection>
          <DetailSection title={t('Billing details')}>
            <DetailList
              items={[
                {
                  id: 'client',
                  label: t('Client'),
                  value: (
                    <Link
                      className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      to={
                        '/preview/workspace/clients?panel=detail&record=' +
                        encodeURIComponent(invoice.clientId)
                      }
                    >
                      {clientName(invoice.clientId)}
                    </Link>
                  ),
                },
                {
                  id: 'project',
                  label: t('Project'),
                  value: <span>{projectName(invoice.projectId)}</span>,
                },
                {
                  id: 'issued',
                  label: t('Issue date'),
                  value: shortDate(invoice.issuedDate, locale),
                },
                { id: 'due', label: t('Due date'), value: shortDate(invoice.dueDate, locale) },
              ]}
            />
          </DetailSection>
          {invoice.notes && (
            <DetailSection title={t('Notes')}>
              <Text style={{ whiteSpace: 'pre-wrap' }}>
                <span>{invoice.notes}</span>
              </Text>
            </DetailSection>
          )}
        </DetailView>
      )}
    />
  )
}
