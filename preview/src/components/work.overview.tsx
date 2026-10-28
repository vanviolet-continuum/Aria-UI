import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { Grid } from '@templates/ui/grid'
import { Card } from '@templates/ui/card'
import { Stack } from '@templates/ui/stack'
import { Inline } from '@templates/ui/inline'
import { SectionHeader } from '@templates/ui/section.header'
import { Text } from '@templates/ui/text'
import { Progress } from '@templates/ui/progress'
import { Badge } from '@templates/ui/badge'
import { RecordMetrics, RecordStatus, money, shortDate } from './record.display'
import { useOperations } from '../data/operations/operations.provider'

export function WorkOverview() {
  const { t, locale } = useI18n()
  const { data } = useOperations()
  const openTasks = data.tasks.filter((task) => task.status !== 'done')
  const upcoming = [...data.meetings]
    .filter((meeting) => new Date(meeting.day + 'T' + meeting.time).getTime() >= Date.now())
    .sort((a, b) => (a.day + a.time).localeCompare(b.day + b.time))
    .slice(0, 3)
  return (
    <Stack gap="md">
      <SectionHeader
        title={t('Work overview')}
        description={t('Projects, priorities, and the next conversation.')}
      />
      <RecordMetrics
        items={[
          {
            label: 'Active projects',
            value: data.projects.filter((project) => project.status === 'active').length,
          },
          { label: 'Open tasks', value: openTasks.length },
          {
            label: 'Outstanding',
            value: money(
              data.invoices
                .filter((invoice) => invoice.status === 'sent')
                .reduce((sum, invoice) => sum + invoice.amount, 0),
              locale,
            ),
          },
          { label: 'Total clients', value: data.clients.length },
        ]}
      />
      <Grid columns={{ base: 1, lg: 2 }} gap="md" align="start">
        <Card
          title={t('Projects in motion')}
          description={t('The work your team is moving forward.')}
          actions={
            <Link
              className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              to="/preview/workspace/projects"
            >
              {t('View projects')}
            </Link>
          }
        >
          <Stack gap="lg">
            {data.projects
              .filter((project) => project.status !== 'archived')
              .slice(0, 4)
              .map((project) => {
                const tasks = data.tasks.filter((task) => task.projectId === project.id)
                const completed = tasks.filter((task) => task.status === 'done').length
                return (
                  <Stack key={project.id} gap="sm">
                    <Inline justify="between">
                      <Link
                        className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        to={
                          '/preview/workspace/projects?panel=detail&record=' +
                          encodeURIComponent(project.id)
                        }
                      >
                        {project.name}
                      </Link>
                      <RecordStatus value={project.status} />
                    </Inline>
                    <Progress
                      value={completed}
                      max={Math.max(1, tasks.length)}
                      size="sm"
                      aria-label={t('Project progress')}
                    />
                    <Text variant="caption">
                      {t('{{done}} of {{total}} tasks complete', {
                        done: completed,
                        total: tasks.length,
                      })}
                    </Text>
                  </Stack>
                )
              })}
            {!data.projects.length && (
              <Text variant="description">{t('Create a project to get started.')}</Text>
            )}
          </Stack>
        </Card>
        <Card
          title={t('Coming up')}
          description={t('Keep the next few meetings in view.')}
          actions={
            <Link
              className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              to="/preview/workspace/calendar"
            >
              {t('Open calendar')}
            </Link>
          }
        >
          <Stack gap="md">
            {upcoming.map((meeting) => (
              <Inline
                key={meeting.id}
                gap="md"
                wrap={false}
                className="border-b border-outline pb-aria-sm last:border-0 last:pb-0"
              >
                <div className="flex h-14 w-13 shrink-0 flex-col items-center justify-center rounded-aria-md border border-primary/15 bg-primary-soft text-primary">
                  <Text as="span" variant="caption">
                    {new Intl.DateTimeFormat(locale, { month: 'short' }).format(
                      new Date(meeting.day + 'T12:00:00'),
                    )}
                  </Text>
                  <Text as="strong" variant="card">
                    {Number(meeting.day.slice(-2))}
                  </Text>
                </div>
                <Stack gap="xs" className="min-w-0 flex-1">
                  <Link
                    className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    to={
                      '/preview/workspace/calendar?panel=detail&record=' +
                      encodeURIComponent(meeting.id)
                    }
                  >
                    {meeting.name}
                  </Link>
                  <Text variant="caption">
                    {shortDate(meeting.day, locale)} · {meeting.time}
                  </Text>
                  <Badge size="sm">
                    {t('{{count}} attendees', { count: meeting.attendees.length })}
                  </Badge>
                </Stack>
              </Inline>
            ))}
            {!upcoming.length && (
              <Text variant="description">
                {t('Your calendar is clear. Plan the next conversation.')}
              </Text>
            )}
          </Stack>
        </Card>
      </Grid>
    </Stack>
  )
}
