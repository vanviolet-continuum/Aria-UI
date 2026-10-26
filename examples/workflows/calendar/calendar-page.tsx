import { useI18n } from '../../../src/template/i18n'
import { useMemo, useState } from 'react'
import { CalendarDays, Plus } from 'lucide-react'
import { Button, ConfirmDialog, FullCalendar, toast } from '@/template/ui'
import { EventDrawer } from './event-drawer'
import {
  eventCategories,
  initialEvents,
  isCalendarEntries,
  toLocalDateTime,
  type CalendarEntry,
} from './event-data'
import { useLocalStorage } from '@/template/hooks/use-local-storage'
import { useMutationTask } from '@/template/providers/mutation-provider'
import { abortableDelay } from '@/template/lib/async'

export function CalendarPage() {
  const { t: tr, text: localize } = useI18n()

  const [events, setEvents] = useLocalStorage('zendenta-calendar', initialEvents, isCalendarEntries)
  const [draft, setDraft] = useState<CalendarEntry | null>(null)
  const [open, setOpen] = useState(false)
  const [deleting, setDeleting] = useState<CalendarEntry | null>(null)
  const { runTask } = useMutationTask()
  const calendarEvents = useMemo(
    () => events.map((event) => ({ ...event, extendedProps: { category: event.category } })),
    [events],
  )
  const save = async (event: CalendarEntry) => {
    const result = await runTask(
      event.id ? 'Updating your event…' : 'Creating your event…',
      async () => {
        await abortableDelay(650)
        setEvents((previous) =>
          event.id
            ? previous.map((item) => (item.id === event.id ? event : item))
            : [...previous, { ...event, id: crypto.randomUUID() }],
        )
      },
    )
    if (result.success) toast.success(event.id ? 'Event updated' : 'A little time, well planned.')
    return result.success
  }
  const newEvent = (start = new Date()) => {
    start.setSeconds(0, 0)
    start.setMinutes(Math.ceil(start.getMinutes() / 15) * 15)
    setDraft({
      id: '',
      title: '',
      category: 'work',
      start: toLocalDateTime(start),
      end: toLocalDateTime(new Date(start.getTime() + 3600000)),
    })
    setOpen(true)
  }
  return (
    <div className="standard-page calendar-page page-enter">
      <div className="dashboard-welcome">
        <div>
          <span className="eyebrow">{tr('A little room for everything')}</span>
          <h2>{tr('Good days start with a plan.')}</h2>
          <p>{tr('Your appointments, your team, and a little breathing room.')}</p>
        </div>
        <Button variant="contained" onClick={() => newEvent()}>
          <Plus size={15} />
          {tr('New event')}
        </Button>
      </div>
      <div className="calendar-page-summary">
        <span>
          <CalendarDays size={16} />
          {events.length}
          {' ' + tr('events in your workspace')}
        </span>
        <div>
          {eventCategories.map((category) => (
            <span key={category.value} className={`event-legend event-legend--${category.value}`}>
              <i />
              {localize(category.label)}
            </span>
          ))}
        </div>
      </div>
      <FullCalendar
        events={calendarEvents}
        onEventClick={(id) => {
          const event = events.find((item) => item.id === id)
          if (event) {
            setDraft(event)
            setOpen(true)
          }
        }}
        onSelect={(selection) => {
          const start = new Date(selection.start)
          if (selection.allDay) start.setHours(9, 0, 0, 0)
          newEvent(start)
        }}
        onEventMove={async (move) => {
          const event = events.find((item) => item.id === move.id)
          if (!event) return false
          return save({
            ...event,
            start: toLocalDateTime(move.start),
            end: move.end
              ? toLocalDateTime(move.end)
              : toLocalDateTime(new Date(new Date(move.start).getTime() + 3600000)),
          })
        }}
      />
      <EventDrawer
        open={open}
        onOpenChange={setOpen}
        event={draft}
        onSave={save}
        onDelete={setDeleting}
      />
      <ConfirmDialog
        open={!!deleting}
        onOpenChange={(value) => {
          if (!value) setDeleting(null)
        }}
        title={tr('Remove this event?')}
        description={tr('“{{value0}}” will be removed from your calendar.', {
          value0: localize(deleting?.title ?? ''),
        })}
        onConfirm={async () => {
          if (!deleting) return false
          const result = await runTask('Removing the event…', async () => {
            await abortableDelay(550)
            setEvents((previous) => previous.filter((item) => item.id !== deleting.id))
          })
          if (result.success) {
            setDeleting(null)
            setOpen(false)
            toast.success(tr('Event removed'))
          }
          return result.success
        }}
      />
    </div>
  )
}
