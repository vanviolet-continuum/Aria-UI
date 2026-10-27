import Calendar from '@fullcalendar/react'
import idLocale from '@fullcalendar/react/locales/id'
import { useI18n } from '../../i18n/use.i18n'
import dayGridPlugin from '@fullcalendar/react/daygrid'
import timeGridPlugin from '@fullcalendar/react/timegrid'
import interactionPlugin from '@fullcalendar/react/interaction'
import classicThemePlugin from '@fullcalendar/react/themes/classic'
import '@fullcalendar/react/skeleton.css'
import '@fullcalendar/react/themes/classic/theme.css'
import '@fullcalendar/react/themes/classic/palette.css'
import type { FullCalendarProps } from './types'

const plugins = [classicThemePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]
export default function CalendarRenderer({
  events,
  initialView = 'dayGridMonth',
  initialDate,
  height = 590,
  onSelect,
  onEventClick,
  onEventMove,
  onError,
  editable,
}: FullCalendarProps) {
  const { language, t } = useI18n()
  return (
    <Calendar
      locale={language}
      locales={[idLocale]}
      plugins={plugins}
      initialView={initialView}
      initialDate={initialDate}
      events={events}
      height={height}
      firstDay={1}
      nowIndicator
      dayMaxEvents={3}
      fixedWeekCount={false}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      buttons={{
        today: { text: t('Today') },
        dayGridMonth: { text: t('Month') },
        timeGridWeek: { text: t('Week') },
        timeGridDay: { text: t('Day') },
      }}
      selectable={!!onSelect}
      editable={editable ?? !!onEventMove}
      selectMirror
      select={(info) => onSelect?.({ start: info.startStr, end: info.endStr, allDay: info.allDay })}
      eventClick={(info) => onEventClick?.(info.event.id)}
      eventClass={(info) => `calendar-event--${info.event.extendedProps.category ?? 'work'}`}
      eventDrop={async (info) => {
        if (!onEventMove) return
        try {
          const result = await onEventMove({
            id: info.event.id,
            start: info.event.startStr,
            end: info.event.endStr,
          })
          if (result === false) info.revert()
        } catch (error) {
          info.revert()
          onError?.(error)
        }
      }}
      eventResize={async (info) => {
        if (!onEventMove) return
        try {
          const result = await onEventMove({
            id: info.event.id,
            start: info.event.startStr,
            end: info.event.endStr,
          })
          if (result === false) info.revert()
        } catch (error) {
          info.revert()
          onError?.(error)
        }
      }}
      eventTimeFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
      slotHeaderFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
      slotMinTime="06:00:00"
      slotMaxTime="22:00:00"
      scrollTime="08:00:00"
    />
  )
}
