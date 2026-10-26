import { useI18n } from '../../src/template/i18n'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { FullCalendar, toast } from '@/template/ui'
import { initialEvents } from '../workflows/calendar/event-data'
import { DemoCard } from './demo-card'

export function CalendarDemo() {
  const { t: tr } = useI18n()

  const events = useMemo(
    () => initialEvents.map((event) => ({ ...event, extendedProps: { category: event.category } })),
    [],
  )
  return (
    <DemoCard
      title={tr('FullCalendar')}
      description={tr('Month, week, and day views. Make space for what matters.')}
      full
      code={`<FullCalendar events={events}\n  onSelect={({ start, end }) => createEvent(start, end)}\n  onEventClick={id => editEvent(id)}\n  onEventMove={async event => await updateEvent(event)}\n/>\n// The calendar library is loaded only when this component mounts.`}
    >
      <FullCalendar
        events={events}
        height={470}
        onEventClick={() => toast.info(tr('Open the calendar page to edit events'))}
      />
      <Link className="text-link calendar-demo-link" to="/calendar">
        {tr('Open the full calendar workspace')}
        <ArrowUpRight size={14} />
      </Link>
    </DemoCard>
  )
}
