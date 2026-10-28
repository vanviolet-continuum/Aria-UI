import { Link } from 'react-router-dom'
import { z } from 'zod'
import { useUrlState } from '@templates/integrations/react.router'
import { createZodSearchCodec } from '@templates/integrations/zod'
import { useI18n } from '@templates/i18n'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { FullCalendar } from '@templates/ui/full.calendar'
import { Grid } from '@templates/ui/grid'
import { GridItem } from '@templates/ui/grid.item'
import { Stack } from '@templates/ui/stack'
import { Text } from '@templates/ui/text'
import { Heading } from '@templates/ui/heading'
import { Avatar, AvatarGroup } from '@templates/ui/avatar'
import { Button } from '@templates/ui/button'
import { toast } from '@templates/ui/toast'
import { Badge } from '@templates/ui/badge'
import { Alert } from '@templates/ui/alert'
import { RecordPage } from '../../../components/record.page'
import { RecordMetrics, shortDate } from '../../../components/record.display'
import { useOperations } from '../../../data/operations/operations.provider'
import { useWorkspace } from '../../../data/workspace/workspace.provider'
import {
  meetingValuesSchema,
  dayKey,
  type Meeting,
  type Values,
} from '../../../data/operations/model'

function valuesOf(meeting?: Meeting): Values['meetings'] {
  return {
    name: meeting?.name ?? '',
    projectId: meeting?.projectId ?? '',
    day: meeting?.day ?? dayKey(),
    time: meeting?.time ?? '09:00',
    duration: meeting?.duration ?? 30,
    location: meeting?.location ?? '',
    attendees: meeting?.attendees ?? [],
    description: meeting?.description ?? '',
  }
}
function eventStart(meeting: Meeting) {
  return new Date(meeting.day + 'T' + meeting.time + ':00')
}
const calendarCodec = createZodSearchCodec(
  z.object({
    calendarView: z.enum(['dayGridMonth', 'timeGridWeek', 'timeGridDay']).catch('dayGridMonth'),
    calendarDate: z.iso.date().or(z.literal('')).catch(''),
    weekends: z.enum(['show', 'hide']).catch('show'),
  }),
  { calendarView: 'dayGridMonth', calendarDate: '', weekends: 'show' },
)
export default function CalendarPage() {
  const { t, locale } = useI18n()
  const { data, save, remove, persistent } = useOperations()
  const workspace = useWorkspace()
  const calendar = useUrlState(calendarCodec)
  const projectName = (id: string) =>
    data.projects.find((project) => project.id === id)?.name ?? t('Team meeting')
  const ownerName = (id: string) =>
    workspace.data.users.find((user) => user.id === id)?.name ?? t('Unassigned')
  const upcoming = [...data.meetings]
    .filter((meeting) => eventStart(meeting).getTime() >= Date.now())
    .sort((a, b) => eventStart(a).getTime() - eventStart(b).getTime())
  return (
    <RecordPage<Meeting, Values['meetings']>
      title="Calendar"
      singular="Event"
      description="Make room for collaboration without losing sight of the work."
      newLabel="New event"
      records={data.meetings}
      persistent={persistent}
      getTitle={(meeting) => meeting.name}
      getSubtitle={(meeting) => projectName(meeting.projectId)}
      searchText={(meeting) =>
        meeting.name + ' ' + meeting.location + ' ' + projectName(meeting.projectId)
      }
      schema={meetingValuesSchema}
      initialValues={(meeting, context) => ({
        ...valuesOf(meeting),
        day: meeting?.day ?? (context?.day || dayKey()),
        time: meeting?.time ?? (context?.time || '09:00'),
      })}
      defaultView="calendar"
      customView={{
        value: 'calendar',
        label: 'Calendar',
        render: (rows, actions) => (
          <Grid columns={{ base: 1, lg: 12 }} gap="lg" align="start">
            <GridItem colSpan={{ base: 1, lg: 9 }}>
              <div className="space-y-aria-md">
                <Alert
                  severity="info"
                  description={t(
                    'Select a day or time to create an event. Drag to reschedule, resize to change its duration, or hover for a quick preview.',
                  )}
                />
                <FullCalendar
                  height="auto"
                  editable
                  view={calendar.state.calendarView}
                  date={calendar.state.calendarDate || undefined}
                  weekends={calendar.state.weekends === 'show'}
                  onWeekendsChange={(show) =>
                    calendar.setState({ weekends: show ? 'show' : 'hide' }, { resetPage: false })
                  }
                  onRangeChange={(range) => {
                    if (
                      range.date !== calendar.state.calendarDate ||
                      range.view !== calendar.state.calendarView
                    )
                      calendar.setState(
                        { calendarDate: range.date, calendarView: range.view },
                        { resetPage: false },
                      )
                  }}
                  initialDate={dayKey()}
                  events={rows.map((meeting) => ({
                    id: meeting.id,
                    title: meeting.name,
                    start: eventStart(meeting).toISOString(),
                    end: new Date(
                      eventStart(meeting).getTime() + meeting.duration * 60000,
                    ).toISOString(),
                    extendedProps: {
                      category: meeting.projectId ? 'work' : 'personal',
                      location: meeting.location,
                    },
                  }))}
                  renderEventPreview={(event) => {
                    const meeting = data.meetings.find((item) => item.id === event.id)
                    return meeting ? (
                      <div className="space-y-aria-sm">
                        <Badge variant="primary">{projectName(meeting.projectId)}</Badge>
                        <Heading as="h3" variant="card">
                          {meeting.name}
                        </Heading>
                        <Text variant="description">
                          {shortDate(meeting.day, locale)} · {meeting.time} ·{' '}
                          {t('{{count}} minutes', { count: meeting.duration })}
                        </Text>
                        {meeting.location && <Text variant="caption">{meeting.location}</Text>}
                        <div className="flex items-center justify-between gap-aria-sm border-t border-outline pt-aria-sm">
                          <AvatarGroup max={4}>
                            {meeting.attendees.map((id) => (
                              <Avatar key={id} name={ownerName(id)} size="xs" />
                            ))}
                          </AvatarGroup>
                          <Text variant="caption">
                            {t('{{count}} attendees', { count: meeting.attendees.length })}
                          </Text>
                        </div>
                        {meeting.description && (
                          <Text variant="caption" className="line-clamp-3">
                            {meeting.description}
                          </Text>
                        )}
                      </div>
                    ) : null
                  }}
                  onSelect={(selection) => {
                    const start = new Date(selection.start)
                    actions.create({
                      day: selection.allDay ? selection.start.slice(0, 10) : dayKey(start),
                      time: selection.allDay
                        ? '09:00'
                        : String(start.getHours()).padStart(2, '0') +
                          ':' +
                          String(start.getMinutes()).padStart(2, '0'),
                    })
                  }}
                  onEventClick={(id) => {
                    const meeting = data.meetings.find((record) => record.id === id)
                    if (meeting) actions.view(meeting)
                  }}
                  onEventMove={(event) => {
                    const meeting = data.meetings.find((record) => record.id === event.id)
                    if (!meeting) return false
                    const start = new Date(event.start),
                      end = new Date(event.end)
                    if (!Number.isFinite(start.getTime())) return false
                    save(
                      'meetings',
                      {
                        ...valuesOf(meeting),
                        day: dayKey(start),
                        time:
                          String(start.getHours()).padStart(2, '0') +
                          ':' +
                          String(start.getMinutes()).padStart(2, '0'),
                        duration: Number.isFinite(end.getTime())
                          ? Math.max(15, Math.round((end.getTime() - start.getTime()) / 60000))
                          : meeting.duration,
                      },
                      meeting.id,
                    )
                    toast.success(t('Schedule updated'), {
                      description: t('The new time is saved in your demo calendar.'),
                    })
                  }}
                  onError={(error) =>
                    toast.error(t('Unable to update the schedule'), {
                      description:
                        error instanceof Error ? t(error.message) : t('Please try again.'),
                    })
                  }
                />
                <div className="flex flex-wrap gap-aria-md">
                  <Badge variant="primary" dot>
                    {t('Project events')}
                  </Badge>
                  <Badge variant="neutral" dot>
                    {t('Team meeting')}
                  </Badge>
                  <Text variant="caption">{t('Calendar view and date are kept in the URL.')}</Text>
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 3 }}>
              <Stack
                gap="md"
                className="rounded-aria-lg border border-outline bg-surface-subtle p-aria-md"
              >
                <Heading as="h2" variant="card">
                  {t('Coming up')}
                </Heading>
                {rows
                  .filter((meeting) => eventStart(meeting).getTime() >= Date.now())
                  .sort((a, b) => eventStart(a).getTime() - eventStart(b).getTime())
                  .slice(0, 5)
                  .map((meeting) => (
                    <div
                      key={meeting.id}
                      className="flex flex-col gap-aria-xs border-b border-outline pb-aria-sm"
                    >
                      <Text variant="caption">
                        {shortDate(meeting.day, locale)} · {meeting.time}
                      </Text>
                      <Button
                        variant="text"
                        className="h-auto min-h-0 justify-start whitespace-normal p-0 text-start"
                        onClick={() => actions.view(meeting)}
                      >
                        <span>{meeting.name}</span>
                      </Button>
                      <Text variant="caption">
                        <span>{meeting.location}</span>
                      </Text>
                    </div>
                  ))}
                {!rows.some((meeting) => eventStart(meeting).getTime() >= Date.now()) && (
                  <Text variant="description">
                    {t('Your calendar is clear. Plan the next conversation.')}
                  </Text>
                )}
                <Text variant="caption">
                  {t('Times follow your browser time zone. Events stay inside this demo.')}
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        ),
      }}
      fields={[
        { name: 'name', label: 'Event title', required: true, full: true },
        {
          name: 'projectId',
          label: 'Project',
          type: 'select',
          full: true,
          options: [
            { value: '', label: t('Team meeting') },
            ...data.projects.map((project) => ({ value: project.id, label: project.name })),
          ],
        },
        { name: 'day', label: 'Date', type: 'date', required: true },
        { name: 'time', label: 'Time', type: 'time', required: true },
        { name: 'duration', label: 'Duration in minutes', type: 'number', required: true },
        { name: 'location', label: 'Location or meeting link' },
        {
          name: 'attendees',
          label: 'Attendees',
          type: 'multi',
          full: true,
          options: workspace.data.users.map((user) => ({
            value: user.id,
            label: user.name,
            description: user.email,
          })),
        },
        { name: 'description', label: 'Agenda', type: 'textarea', full: true },
      ]}
      columns={[
        {
          id: 'day',
          header: t('Date'),
          sortable: true,
          cell: (meeting) => shortDate(meeting.day, locale),
        },
        { id: 'time', header: t('Time'), cell: (meeting) => meeting.time },
        {
          id: 'duration',
          header: t('Duration'),
          cell: (meeting) => t('{{count}} minutes', { count: meeting.duration }),
        },
        {
          id: 'attendees',
          header: t('Attendees'),
          cell: (meeting) => (
            <AvatarGroup
              max={3}
              className="[&>.ui-avatar]:[--avatar-size:calc(30px*var(--space-scale))]"
            >
              {meeting.attendees.map((id) => (
                <Avatar key={id} name={ownerName(id)} size="sm" />
              ))}
            </AvatarGroup>
          ),
        },
      ]}
      sorters={{ day: (meeting) => meeting.day + meeting.time }}
      filters={[
        {
          id: 'project',
          label: t('Project'),
          type: 'choice',
          accessor: (meeting) => meeting.projectId || 'team',
          options: [
            { value: 'team', label: t('Team meeting') },
            ...data.projects.map((project) => ({ value: project.id, label: project.name })),
          ],
        },
      ]}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Scheduled events', value: data.meetings.length },
            {
              label: 'Today',
              value: data.meetings.filter((meeting) => meeting.day === dayKey()).length,
            },
            { label: 'Upcoming', value: upcoming.length },
            {
              label: 'Meeting hours',
              value: new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(
                data.meetings.reduce((sum, meeting) => sum + meeting.duration, 0) / 60,
              ),
            },
          ]}
        />
      }
      onSave={(values, id) => {
        save('meetings', values, id)
      }}
      onDelete={(meeting) => remove('meetings', meeting.id)}
      renderDetail={(meeting) => (
        <DetailView
          variant="compact"
          title={<span>{meeting.name}</span>}
          description={<span>{projectName(meeting.projectId)}</span>}
        >
          <DetailSection title={t('Event details')}>
            <DetailList
              items={[
                { id: 'day', label: t('Date'), value: shortDate(meeting.day, locale) },
                { id: 'time', label: t('Time'), value: meeting.time },
                {
                  id: 'duration',
                  label: t('Duration'),
                  value: t('{{count}} minutes', { count: meeting.duration }),
                },
                {
                  id: 'location',
                  label: t('Location'),
                  value: <span>{meeting.location || '—'}</span>,
                },
                {
                  id: 'project',
                  label: t('Project'),
                  value: meeting.projectId ? (
                    <Link
                      className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      to={
                        '/preview/workspace/projects?panel=detail&record=' +
                        encodeURIComponent(meeting.projectId)
                      }
                    >
                      {projectName(meeting.projectId)}
                    </Link>
                  ) : (
                    t('Team meeting')
                  ),
                },
              ]}
            />
          </DetailSection>
          <DetailSection title={t('Attendees')}>
            <Stack gap="sm">
              {meeting.attendees.map((id) => (
                <Text key={id}>
                  <span>{ownerName(id)}</span>
                </Text>
              ))}
              {!meeting.attendees.length && (
                <Text variant="description">{t('No attendees selected.')}</Text>
              )}
            </Stack>
          </DetailSection>
          <DetailSection title={t('Agenda')}>
            <Text style={{ whiteSpace: 'pre-wrap' }}>
              <span>{meeting.description || '—'}</span>
            </Text>
          </DetailSection>
        </DetailView>
      )}
    />
  )
}
