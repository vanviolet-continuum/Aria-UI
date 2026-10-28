import { Fragment } from 'react'
import { useI18n } from '@templates/i18n'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { Heading } from '@templates/ui/heading'
import { Text } from '@templates/ui/text'
import { Avatar } from '@templates/ui/avatar'
import { Inline } from '@templates/ui/inline'
import { Download, Check } from '@templates/icons'
import { toast } from '@templates/ui/toast'
import { RecordPage } from '../../../components/record.page'
import {
  RecordMetrics,
  RecordStatus,
  shortDate,
  downloadText,
} from '../../../components/record.display'
import { useOperations } from '../../../data/operations/operations.provider'
import { useWorkspace } from '../../../data/workspace/workspace.provider'
import {
  documentValuesSchema,
  statusLabels,
  type DocumentRecord,
  type Values,
} from '../../../data/operations/model'

const categories = ['guide', 'policy', 'design', 'meeting']
function valuesOf(record?: DocumentRecord): Values['documents'] {
  return {
    name: record?.name ?? '',
    category: record?.category ?? 'guide',
    authorId: record?.authorId ?? '',
    status: record?.status ?? 'draft',
    body: record?.body ?? '',
  }
}
function DocumentBody({ body }: { body: string }) {
  return (
    <article className="flex flex-col gap-aria-md [&_ul]:m-0 [&_ul]:grid [&_ul]:gap-aria-sm [&_ul]:ps-aria-lg [&_ul]:list-disc">
      {body.split(/\n\s*\n/).map((block, index) => {
        if (block.startsWith('# '))
          return (
            <Heading key={index} as="h3" variant="card">
              {block.replace(/^#+\s*/, '')}
            </Heading>
          )
        if (block.startsWith('## '))
          return (
            <Heading key={index} as="h4" variant="card">
              {block.replace(/^#+\s*/, '')}
            </Heading>
          )
        if (block.split('\n').every((line) => line.startsWith('- ')))
          return (
            <ul key={index}>
              {block.split('\n').map((line, lineIndex) => (
                <li key={lineIndex}>
                  <Text as="span">{line.slice(2)}</Text>
                </li>
              ))}
            </ul>
          )
        return (
          <Fragment key={index}>
            <Text style={{ whiteSpace: 'pre-line' }}>{block}</Text>
          </Fragment>
        )
      })}
    </article>
  )
}
export default function DocumentsPage() {
  const { t, locale } = useI18n()
  const { data, save, remove, persistent } = useOperations()
  const workspace = useWorkspace()
  const authorName = (id: string) =>
    workspace.data.users.find((user) => user.id === id)?.name ?? t('Unassigned')
  return (
    <RecordPage<DocumentRecord, Values['documents']>
      title="Documents"
      singular="Document"
      description="A shared home for decisions, guides, and useful knowledge."
      newLabel="New document"
      records={data.documents}
      persistent={persistent}
      getTitle={(record) => record.name}
      getSubtitle={(record) => t(statusLabels[record.category])}
      searchText={(record) => record.name + ' ' + record.body}
      schema={documentValuesSchema}
      initialValues={(record) => ({
        ...valuesOf(record),
        authorId: record?.authorId ?? workspace.data.users[0]?.id ?? '',
      })}
      fields={[
        { name: 'name', label: 'Document title', required: true, full: true },
        {
          name: 'category',
          label: 'Category',
          type: 'select',
          options: categories.map((value) => ({ value, label: t(statusLabels[value]) })),
        },
        {
          name: 'authorId',
          label: 'Author',
          type: 'select',
          options: [
            { value: '', label: t('Unassigned') },
            ...workspace.data.users.map((user) => ({ value: user.id, label: user.name })),
          ],
        },
        {
          name: 'status',
          label: 'Status',
          type: 'select',
          full: true,
          options: ['draft', 'published'].map((value) => ({
            value,
            label: t(statusLabels[value]),
          })),
        },
        {
          name: 'body',
          label: 'Content',
          type: 'textarea',
          full: true,
          required: true,
          rows: 14,
          hint: 'Use headings and short paragraphs. Markdown can be downloaded.',
        },
      ]}
      columns={[
        {
          id: 'author',
          header: t('Author'),
          cell: (record) => (
            <Inline gap="sm">
              <Avatar name={authorName(record.authorId)} size="xs" />
              <Text variant="label">
                <span>{authorName(record.authorId)}</span>
              </Text>
            </Inline>
          ),
        },
        {
          id: 'status',
          header: t('Status'),
          cell: (record) => <RecordStatus value={record.status} />,
        },
        {
          id: 'updatedAt',
          header: t('Last updated'),
          sortable: true,
          cell: (record) => shortDate(record.updatedAt, locale),
        },
      ]}
      filters={[
        {
          id: 'category',
          label: t('Category'),
          type: 'choice',
          accessor: 'category',
          options: categories.map((value) => ({ value, label: t(statusLabels[value]) })),
        },
        {
          id: 'status',
          label: t('Status'),
          type: 'choice',
          accessor: 'status',
          options: ['draft', 'published'].map((value) => ({
            value,
            label: t(statusLabels[value]),
          })),
        },
      ]}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Total documents', value: data.documents.length },
            {
              label: 'Published',
              value: data.documents.filter((record) => record.status === 'published').length,
            },
            {
              label: 'Drafts',
              value: data.documents.filter((record) => record.status === 'draft').length,
            },
            {
              label: 'Knowledge categories',
              value: new Set(data.documents.map((record) => record.category)).size,
            },
          ]}
        />
      }
      onSave={(values, id) => {
        save('documents', values, id)
      }}
      onDelete={(record) => remove('documents', record.id)}
      extraActions={(record) => [
        ...(record.status === 'draft'
          ? [
              {
                id: 'publish',
                label: t('Publish document'),
                icon: <Check size={16} />,
                onSelect: () => {
                  save('documents', { ...valuesOf(record), status: 'published' }, record.id)
                  toast.success(t('Document published'), {
                    description: t('The document is available in this demo workspace.'),
                  })
                },
              },
            ]
          : []),
        {
          id: 'download',
          label: t('Download Markdown'),
          icon: <Download size={16} />,
          onSelect: () => {
            downloadText(
              (record.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'document') + '.md',
              record.body,
              'text/markdown;charset=utf-8',
            )
            toast.success(t('Document downloaded'), {
              description: t('A Markdown copy is ready in your downloads.'),
            })
          },
        },
      ]}
      renderDetail={(record) => (
        <DetailView
          variant="compact"
          title={<span>{record.name}</span>}
          description={<span>{t(statusLabels[record.category])}</span>}
          badge={<RecordStatus value={record.status} />}
        >
          <DetailSection title={t('Document information')}>
            <DetailList
              items={[
                {
                  id: 'author',
                  label: t('Author'),
                  value: <span>{authorName(record.authorId)}</span>,
                },
                {
                  id: 'date',
                  label: t('Last updated'),
                  value: shortDate(record.updatedAt, locale),
                },
              ]}
            />
          </DetailSection>
          <DetailSection title={t('Content')}>
            <DocumentBody body={record.body} />
          </DetailSection>
        </DetailView>
      )}
    />
  )
}
