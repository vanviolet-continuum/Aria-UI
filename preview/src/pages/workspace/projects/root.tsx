import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { Progress } from '@templates/ui/progress'
import { Stack } from '@templates/ui/stack'
import { Inline } from '@templates/ui/inline'
import { Avatar } from '@templates/ui/avatar'
import { Text } from '@templates/ui/text'
import { Check } from '@templates/icons'
import { toast } from '@templates/ui/toast'
import { RecordPage } from '../../../components/record.page'
import { RecordMetrics, RecordStatus, money, shortDate } from '../../../components/record.display'
import { useWorkspace } from '../../../data/workspace/workspace.provider'
import { useOperations } from '../../../data/operations/operations.provider'
import {
  projectValuesSchema,
  dayAfter,
  statusLabels,
  type Project,
  type Values,
} from '../../../data/operations/model'

function valuesOf(project?: Project): Values['projects'] {
  return {
    name: project?.name ?? '',
    clientId: project?.clientId ?? '',
    ownerId: project?.ownerId ?? '',
    status: project?.status ?? 'planning',
    dueDate: project?.dueDate ?? dayAfter(14),
    budget: project?.budget ?? 0,
    description: project?.description ?? '',
  }
}
export default function ProjectsPage() {
  const { t, locale } = useI18n()
  const { data, save, remove, persistent } = useOperations()
  const workspace = useWorkspace()
  const clientName = (id: string) =>
    data.clients.find((client) => client.id === id)?.name ?? t('Internal project')
  const ownerName = (id: string) =>
    workspace.data.users.find((user) => user.id === id)?.name ?? t('Unassigned')
  const progress = (id: string) => {
    const tasks = data.tasks.filter((task) => task.projectId === id)
    return tasks.length
      ? Math.round((tasks.filter((task) => task.status === 'done').length / tasks.length) * 100)
      : 0
  }
  return (
    <RecordPage<Project, Values['projects']>
      title="Projects"
      singular="Project"
      description="Turn a clear plan into work your team can deliver."
      newLabel="New project"
      records={data.projects}
      persistent={persistent}
      getTitle={(project) => project.name}
      getSubtitle={(project) => clientName(project.clientId)}
      searchText={(project) =>
        project.name + ' ' + clientName(project.clientId) + ' ' + project.description
      }
      schema={projectValuesSchema}
      initialValues={valuesOf}
      fields={[
        { name: 'name', label: 'Project name', required: true, full: true },
        {
          name: 'clientId',
          label: 'Client',
          type: 'select',
          options: [
            { value: '', label: t('Internal project') },
            ...data.clients.map((client) => ({ value: client.id, label: client.name })),
          ],
        },
        {
          name: 'ownerId',
          label: 'Project owner',
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
          options: ['planning', 'active', 'completed', 'archived'].map((value) => ({
            value,
            label: t(statusLabels[value]),
          })),
        },
        { name: 'dueDate', label: 'Due date', type: 'date', required: true },
        { name: 'budget', label: 'Project budget', type: 'money', full: true },
        { name: 'description', label: 'Project brief', type: 'textarea', full: true, rows: 5 },
      ]}
      columns={[
        {
          id: 'owner',
          header: t('Owner'),
          width: 180,
          cell: (project) => (
            <Inline gap="sm" wrap={false}>
              <Avatar name={ownerName(project.ownerId)} size="xs" />
              <Text variant="label">
                <span>{ownerName(project.ownerId)}</span>
              </Text>
            </Inline>
          ),
        },
        {
          id: 'progress',
          header: t('Progress'),
          width: 180,
          cell: (project) => (
            <Progress
              value={progress(project.id)}
              showValue
              size="sm"
              aria-label={t('Project progress')}
            />
          ),
        },
        {
          id: 'status',
          header: t('Status'),
          width: 145,
          cell: (project) => <RecordStatus value={project.status} />,
        },
        {
          id: 'dueDate',
          header: t('Due date'),
          width: 160,
          sortable: true,
          cell: (project) => shortDate(project.dueDate, locale),
        },
      ]}
      sorters={{ dueDate: (project) => project.dueDate }}
      filters={[
        {
          id: 'status',
          type: 'choice',
          label: t('Status'),
          accessor: 'status',
          options: ['planning', 'active', 'completed', 'archived'].map((value) => ({
            value,
            label: t(statusLabels[value]),
          })),
        },
        {
          id: 'client',
          type: 'choice',
          label: t('Client'),
          accessor: (project) => project.clientId || 'internal',
          options: [
            { value: 'internal', label: t('Internal project') },
            ...data.clients.map((client) => ({ value: client.id, label: client.name })),
          ],
        },
      ]}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Total projects', value: data.projects.length },
            {
              label: 'Active projects',
              value: data.projects.filter((project) => project.status === 'active').length,
            },
            {
              label: 'Completed projects',
              value: data.projects.filter((project) => project.status === 'completed').length,
            },
            {
              label: 'Open tasks',
              value: data.tasks.filter((task) => task.status !== 'done').length,
            },
          ]}
        />
      }
      onSave={(values, id) => {
        save('projects', values, id)
      }}
      onDelete={(project) => remove('projects', project.id)}
      deleteDescription="The project will be removed. Linked tasks, meetings, and invoices will be kept without a project."
      extraActions={(project) =>
        project.status !== 'completed'
          ? [
              {
                id: 'complete',
                label: t('Mark as completed'),
                icon: <Check size={16} />,
                onSelect: () => {
                  save('projects', { ...valuesOf(project), status: 'completed' }, project.id)
                  toast.success(t('Project completed'), {
                    description: t('The project status has been updated in this workspace.'),
                  })
                },
              },
            ]
          : []
      }
      renderDetail={(project) => (
        <DetailView
          variant="compact"
          title={<span>{project.name}</span>}
          description={<span>{clientName(project.clientId)}</span>}
          badge={<RecordStatus value={project.status} />}
        >
          <DetailSection title={t('Delivery progress')}>
            <Progress label={t('Completed tasks')} value={progress(project.id)} showValue />
            <Link
              className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              to={'/preview/workspace/tasks?project=' + encodeURIComponent(project.id)}
            >
              {t('Open project tasks')}
            </Link>
          </DetailSection>
          <DetailSection title={t('Project overview')}>
            <DetailList
              items={[
                {
                  id: 'client',
                  label: t('Client'),
                  value: project.clientId ? (
                    <Link
                      className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      to={
                        '/preview/workspace/clients?panel=detail&record=' +
                        encodeURIComponent(project.clientId)
                      }
                    >
                      {clientName(project.clientId)}
                    </Link>
                  ) : (
                    t('Internal project')
                  ),
                },
                {
                  id: 'owner',
                  label: t('Project owner'),
                  value: <span>{ownerName(project.ownerId)}</span>,
                },
                { id: 'due', label: t('Due date'), value: shortDate(project.dueDate, locale) },
                { id: 'budget', label: t('Project budget'), value: money(project.budget, locale) },
              ]}
            />
          </DetailSection>
          <DetailSection title={t('Project brief')}>
            <Text style={{ whiteSpace: 'pre-wrap' }}>
              <span>{project.description || '—'}</span>
            </Text>
          </DetailSection>
          <DetailSection title={t('Tasks')}>
            <Stack gap="sm">
              {data.tasks
                .filter((task) => task.projectId === project.id)
                .map((task) => (
                  <Inline key={task.id} justify="between">
                    <Link
                      className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      to={
                        '/preview/workspace/tasks?panel=detail&record=' +
                        encodeURIComponent(task.id)
                      }
                    >
                      {task.name}
                    </Link>
                    <RecordStatus value={task.status} />
                  </Inline>
                ))}
              {!data.tasks.some((task) => task.projectId === project.id) && (
                <Text variant="description">{t('No tasks yet. Add the first next step.')}</Text>
              )}
            </Stack>
          </DetailSection>
        </DetailView>
      )}
    />
  )
}
