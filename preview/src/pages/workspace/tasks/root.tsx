import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { Card } from '@templates/ui/card'
import { Stack } from '@templates/ui/stack'
import { Inline } from '@templates/ui/inline'
import { Text } from '@templates/ui/text'
import { Button } from '@templates/ui/button'
import { Badge } from '@templates/ui/badge'
import { Avatar } from '@templates/ui/avatar'
import { ActionMenu } from '@templates/ui/action.menu'
import { Plus, Check } from '@templates/icons'
import { toast } from '@templates/ui/toast'
import { RecordPage, type RecordActions } from '../../../components/record.page'
import { RecordMetrics, RecordStatus, shortDate } from '../../../components/record.display'
import { useWorkspace } from '../../../data/workspace/workspace.provider'
import { useOperations } from '../../../data/operations/operations.provider'
import {
  taskValuesSchema,
  statusLabels,
  dayAfter,
  dayKey,
  type Task,
  type Values,
} from '../../../data/operations/model'

const stages = ['todo', 'in.progress', 'done'] as const
function valuesOf(task?: Task): Values['tasks'] {
  return {
    name: task?.name ?? '',
    projectId: task?.projectId ?? '',
    assigneeId: task?.assigneeId ?? '',
    status: task?.status ?? 'todo',
    priority: task?.priority ?? 'medium',
    dueDate: task?.dueDate ?? dayAfter(7),
    description: task?.description ?? '',
  }
}
function TaskBoard({
  rows,
  actions,
  projectName,
  ownerName,
  move,
}: {
  rows: Task[]
  actions: RecordActions<Task>
  projectName: (id: string) => string
  ownerName: (id: string) => string
  move: (task: Task, status: Task['status']) => void
}) {
  const { t, locale } = useI18n()
  const [hover, setHover] = useState<string | null>(null)
  return (
    <div className="grid grid-cols-[repeat(3,minmax(240px,1fr))] items-start gap-aria-md overflow-x-auto pb-aria-sm">
      {stages.map((stage) => {
        const tasks = rows.filter((task) => task.status === stage)
        return (
          <section
            key={stage}
            className={
              'min-w-0 rounded-aria-lg border border-outline bg-surface-subtle p-aria-sm transition-colors' +
              (hover === stage ? ' !border-primary !bg-primary-soft' : '')
            }
            aria-label={t(statusLabels[stage])}
            onDragOver={(event) => {
              if (event.dataTransfer.types.includes('application/x-aria-task')) {
                event.preventDefault()
                setHover(stage)
              }
            }}
            onDragLeave={(event) => {
              if (
                !(event.relatedTarget instanceof Node) ||
                !event.currentTarget.contains(event.relatedTarget)
              )
                setHover(null)
            }}
            onDrop={(event) => {
              event.preventDefault()
              setHover(null)
              const task = rows.find(
                (item) => item.id === event.dataTransfer.getData('application/x-aria-task'),
              )
              if (task && task.status !== stage) move(task, stage)
            }}
          >
            <Inline justify="between" className="px-aria-xs pt-aria-xs pb-aria-sm">
              <Inline gap="sm">
                <span
                  className={
                    'size-2 shrink-0 rounded-full ' +
                    (stage === 'done'
                      ? 'bg-success'
                      : stage === 'in.progress'
                        ? 'bg-primary'
                        : 'bg-muted')
                  }
                />
                <Text as="h2" variant="card">
                  {t(statusLabels[stage])}
                </Text>
                <Badge size="sm">{tasks.length}</Badge>
              </Inline>
              <Button
                variant="text"
                size="icon"
                aria-label={t('New task')}
                onClick={() => actions.create({ stage })}
              >
                <Plus size={16} />
              </Button>
            </Inline>
            <Stack gap="sm">
              {tasks.map((task) => (
                <Card
                  key={task.id}
                  className="cursor-grab shadow-aria-sm active:cursor-grabbing hover:border-primary/40 [&_.aria-card-body]:p-aria-md"
                  draggable
                  onDragStart={(event) => {
                    event.dataTransfer.setData('application/x-aria-task', task.id)
                    event.dataTransfer.effectAllowed = 'move'
                  }}
                  onDragEnd={() => setHover(null)}
                  body={
                    <Stack gap="md">
                      <Inline justify="between">
                        <RecordStatus value={task.priority} />
                        <ActionMenu
                          items={actions.menu(task)}
                          label={t('Actions') + ': ' + task.name}
                        />
                      </Inline>
                      <Text
                        as="button"
                        type="button"
                        variant="label"
                        className="cursor-pointer border-0 bg-transparent p-0 text-start text-content hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        onClick={() => actions.view(task)}
                      >
                        <span>{task.name}</span>
                      </Text>
                      <Text variant="caption">
                        <span>{projectName(task.projectId)}</span>
                      </Text>
                      <Inline justify="between">
                        <Text
                          variant="caption"
                          tone={
                            task.dueDate < dayKey() && task.status !== 'done' ? 'error' : 'muted'
                          }
                        >
                          {shortDate(task.dueDate, locale)}
                        </Text>
                        <Avatar name={ownerName(task.assigneeId)} size="xs" />
                      </Inline>
                    </Stack>
                  }
                />
              ))}
              {!tasks.length && (
                <div className="grid min-h-25 place-items-center rounded-aria-md border border-dashed border-outline p-aria-md text-center">
                  <Text variant="caption">{t('Drop a task here or add a new one.')}</Text>
                </div>
              )}
            </Stack>
          </section>
        )
      })}
    </div>
  )
}
export default function TasksPage() {
  const { t, locale } = useI18n()
  const { data, save, remove, persistent } = useOperations()
  const workspace = useWorkspace()
  const projectName = (id: string) =>
    data.projects.find((project) => project.id === id)?.name ?? t('No project')
  const ownerName = (id: string) =>
    workspace.data.users.find((user) => user.id === id)?.name ?? t('Unassigned')
  const move = (task: Task, status: Task['status']) => {
    save('tasks', { ...valuesOf(task), status }, task.id)
    toast.success(t('Task updated'), {
      description: t('Moved to {{status}}.', { status: t(statusLabels[status]) }),
    })
  }
  return (
    <RecordPage<Task, Values['tasks']>
      title="Tasks"
      singular="Task"
      description="A shared view of priorities, ownership, and the next step."
      newLabel="New task"
      records={data.tasks}
      persistent={persistent}
      getTitle={(task) => task.name}
      getSubtitle={(task) => projectName(task.projectId)}
      searchText={(task) =>
        task.name + ' ' + projectName(task.projectId) + ' ' + ownerName(task.assigneeId)
      }
      schema={taskValuesSchema}
      initialValues={(task, context) => ({
        ...valuesOf(task),
        status:
          task?.status ??
          (context?.stage === 'done' || context?.stage === 'in.progress' ? context.stage : 'todo'),
      })}
      defaultView="board"
      customView={{
        value: 'board',
        label: 'Board',
        render: (rows, actions) => (
          <TaskBoard
            rows={rows}
            actions={actions}
            projectName={projectName}
            ownerName={ownerName}
            move={move}
          />
        ),
      }}
      fields={[
        { name: 'name', label: 'Task title', required: true, full: true },
        {
          name: 'projectId',
          label: 'Project',
          type: 'select',
          options: [
            { value: '', label: t('No project') },
            ...data.projects.map((project) => ({ value: project.id, label: project.name })),
          ],
        },
        {
          name: 'assigneeId',
          label: 'Assignee',
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
          options: stages.map((value) => ({ value, label: t(statusLabels[value]) })),
        },
        {
          name: 'priority',
          label: 'Priority',
          type: 'select',
          options: ['low', 'medium', 'high'].map((value) => ({
            value,
            label: t(statusLabels[value]),
          })),
        },
        { name: 'dueDate', label: 'Due date', type: 'date', required: true, full: true },
        { name: 'description', label: 'Description', type: 'textarea', full: true },
      ]}
      columns={[
        {
          id: 'owner',
          header: t('Assignee'),
          cell: (task) => (
            <Inline gap="sm">
              <Avatar name={ownerName(task.assigneeId)} size="xs" />
              <Text variant="label">
                <span>{ownerName(task.assigneeId)}</span>
              </Text>
            </Inline>
          ),
        },
        {
          id: 'priority',
          header: t('Priority'),
          cell: (task) => <RecordStatus value={task.priority} />,
        },
        { id: 'status', header: t('Status'), cell: (task) => <RecordStatus value={task.status} /> },
        {
          id: 'dueDate',
          header: t('Due date'),
          sortable: true,
          cell: (task) => shortDate(task.dueDate, locale),
        },
      ]}
      sorters={{ dueDate: (task) => task.dueDate }}
      filters={[
        {
          id: 'status',
          label: t('Status'),
          type: 'choice',
          accessor: 'status',
          options: stages.map((value) => ({ value, label: t(statusLabels[value]) })),
        },
        {
          id: 'priority',
          label: t('Priority'),
          type: 'choice',
          accessor: 'priority',
          options: ['low', 'medium', 'high'].map((value) => ({
            value,
            label: t(statusLabels[value]),
          })),
        },
        {
          id: 'project',
          label: t('Project'),
          type: 'choice',
          accessor: (task) => task.projectId || 'none',
          options: [
            { value: 'none', label: t('No project') },
            ...data.projects.map((project) => ({ value: project.id, label: project.name })),
          ],
        },
        {
          id: 'owner',
          label: t('Assignee'),
          type: 'choice',
          accessor: (task) => task.assigneeId || 'unassigned',
          options: [
            { value: 'unassigned', label: t('Unassigned') },
            ...workspace.data.users.map((user) => ({ value: user.id, label: user.name })),
          ],
        },
      ]}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Total tasks', value: data.tasks.length },
            {
              label: 'In progress',
              value: data.tasks.filter((task) => task.status === 'in.progress').length,
            },
            {
              label: 'Completed tasks',
              value: data.tasks.filter((task) => task.status === 'done').length,
            },
            {
              label: 'Overdue tasks',
              value: data.tasks.filter((task) => task.status !== 'done' && task.dueDate < dayKey())
                .length,
            },
          ]}
        />
      }
      onSave={(values, id) => {
        save('tasks', values, id)
      }}
      onDelete={(task) => remove('tasks', task.id)}
      extraActions={(task) =>
        stages
          .filter((stage) => stage !== task.status)
          .map((stage) => ({
            id: 'move-' + stage,
            label: t('Move to {{status}}', { status: t(statusLabels[stage]) }),
            icon: <Check size={16} />,
            onSelect: () => move(task, stage),
          }))
      }
      renderDetail={(task) => (
        <DetailView
          variant="compact"
          title={<span>{task.name}</span>}
          description={<span>{projectName(task.projectId)}</span>}
          badge={<RecordStatus value={task.status} />}
        >
          <DetailSection title={t('Task details')}>
            <DetailList
              items={[
                {
                  id: 'project',
                  label: t('Project'),
                  value: task.projectId ? (
                    <Link
                      className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      to={
                        '/preview/workspace/projects?panel=detail&record=' +
                        encodeURIComponent(task.projectId)
                      }
                    >
                      {projectName(task.projectId)}
                    </Link>
                  ) : (
                    t('No project')
                  ),
                },
                {
                  id: 'owner',
                  label: t('Assignee'),
                  value: <span>{ownerName(task.assigneeId)}</span>,
                },
                {
                  id: 'priority',
                  label: t('Priority'),
                  value: <RecordStatus value={task.priority} />,
                },
                { id: 'date', label: t('Due date'), value: shortDate(task.dueDate, locale) },
              ]}
            />
          </DetailSection>
          <DetailSection title={t('Description')}>
            <Text style={{ whiteSpace: 'pre-wrap' }}>
              <span>{task.description || '—'}</span>
            </Text>
          </DetailSection>
        </DetailView>
      )}
    />
  )
}
