import Calendar, { type CalendarRef, type EventApi } from '@fullcalendar/react'
import { useEffect, useRef, useState } from 'react'
import idLocale from '@fullcalendar/react/locales/id'
import { useI18n } from '../../i18n/use.i18n'
import dayGridPlugin from '@fullcalendar/react/daygrid'
import timeGridPlugin from '@fullcalendar/react/timegrid'
import interactionPlugin from '@fullcalendar/react/interaction'
import classicThemePlugin from '@fullcalendar/react/themes/classic'
import { Button } from '../button/button'
import { IconButton } from '../icon.button/icon.button'
import { Tabs } from '../tabs/tabs'
import { Text } from '../text/text'
import { Heading } from '../heading/heading'
import { HoverCard } from '../hover.card/hover.card'
import { ChevronLeft } from '../../icons/navigation/chevron.left.icon'
import { ChevronRight } from '../../icons/navigation/chevron.right.icon'
import '@fullcalendar/react/skeleton.css'
import '@fullcalendar/react/themes/classic/theme.css'
import '@fullcalendar/react/themes/classic/palette.css'
import type { FullCalendarProps, CalendarEventPreview, CalendarView } from './types'

const plugins = [classicThemePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]
const preview = (event: EventApi): CalendarEventPreview => ({
  id: event.id,
  title: event.title,
  start: event.startStr,
  end: event.endStr,
  allDay: event.allDay,
  extendedProps: event.extendedProps,
})
export default function CalendarRenderer({
  events,
  initialView = 'dayGridMonth',
  initialDate,
  height = 'auto',
  onSelect,
  onEventClick,
  onEventMove,
  onError,
  editable,
  view,
  date,
  onRangeChange,
  toolbar,
  toolbarActions,
  weekends,
  onWeekendsChange,
  showWeekendsControl = true,
  renderEventPreview,
  renderEventContent,
  calendarOptions,
}: FullCalendarProps) {
  const { language, locale, t } = useI18n()
  const ref = useRef<CalendarRef>(null)
  const [activeView, setActiveView] = useState<CalendarView>(view ?? initialView)
  const [title, setTitle] = useState('')
  const [localWeekends, setLocalWeekends] = useState(true)
  const visibleWeekends = weekends ?? localWeekends
  useEffect(() => {
    if (view && ref.current?.getApi().view.type !== view) ref.current?.getApi().changeView(view)
  }, [view])
  useEffect(() => {
    if (date && ref.current) {
      const api = ref.current.getApi()
      const current = api.getDate()
      const key = [
        current.getFullYear(),
        String(current.getMonth() + 1).padStart(2, '0'),
        String(current.getDate()).padStart(2, '0'),
      ].join('-')
      if (key !== date.slice(0, 10)) api.gotoDate(date)
    }
  }, [date])
  const move: NonNullable<NonNullable<FullCalendarProps['calendarOptions']>['eventDrop']> = async (
    info,
  ) => {
    if (!onEventMove) {
      info.revert()
      return
    }
    try {
      if (
        (await onEventMove({
          id: info.event.id,
          start: info.event.startStr,
          end: info.event.endStr,
        })) === false
      )
        info.revert()
    } catch (error) {
      info.revert()
      onError?.(error)
    }
  }
  return (
    <>
      {toolbar !== false &&
        (toolbar ?? (
          <div className="calendar-toolbar">
            <div className="calendar-toolbar-navigation">
              <div className="calendar-arrow-group">
                <IconButton
                  label={t('Previous period')}
                  size="sm"
                  variant="text"
                  onClick={() => ref.current?.getApi().prev()}
                >
                  <ChevronLeft size={18} />
                </IconButton>
                <IconButton
                  label={t('Next period')}
                  size="sm"
                  variant="text"
                  onClick={() => ref.current?.getApi().next()}
                >
                  <ChevronRight size={18} />
                </IconButton>
              </div>
              <Heading as="h2" variant="card" aria-live="polite">
                {title}
              </Heading>
              <Button size="sm" variant="outlined" onClick={() => ref.current?.getApi().today()}>
                {t('Today')}
              </Button>
            </div>
            <div className="calendar-toolbar-actions">
              {showWeekendsControl && (
                <Button
                  size="sm"
                  variant="text"
                  aria-pressed={visibleWeekends}
                  onClick={() => {
                    setLocalWeekends(!visibleWeekends)
                    onWeekendsChange?.(!visibleWeekends)
                  }}
                >
                  {t('Weekends')}
                </Button>
              )}
              <Tabs
                variant="pill"
                label={t('Calendar view')}
                value={activeView}
                onChange={(next) => ref.current?.getApi().changeView(next)}
                items={[
                  { value: 'dayGridMonth', label: t('Month') },
                  { value: 'timeGridWeek', label: t('Week') },
                  { value: 'timeGridDay', label: t('Day') },
                ]}
              />
              {toolbarActions}
            </div>
          </div>
        ))}
      <Calendar
        ref={ref}
        locale={language}
        locales={[idLocale]}
        plugins={plugins}
        initialView={view ?? initialView}
        initialDate={date ?? initialDate}
        events={events}
        height={height}
        firstDay={1}
        nowIndicator
        dayMaxEvents={3}
        fixedWeekCount={false}
        headerToolbar={false}
        weekends={visibleWeekends}
        datesSet={(info) => {
          const next = info.view.type as CalendarView
          setTitle(info.view.title)
          setActiveView(next)
          onRangeChange?.({
            start: info.startStr,
            end: info.endStr,
            date: info.view.calendar.formatIso(info.view.calendar.getDate(), true),
            view: next,
            title: info.view.title,
          })
        }}
        selectable={!!onSelect}
        editable={editable ?? !!onEventMove}
        selectMirror
        eventInteractive={false}
        select={(info) => {
          onSelect?.({ start: info.startStr, end: info.endStr, allDay: info.allDay })
          info.view.calendar.unselect()
        }}
        eventClick={(info) => onEventClick?.(info.event.id)}
        eventClass={(info) => 'calendar-event--' + (info.event.extendedProps.category ?? 'work')}
        eventDrop={move}
        eventResize={async (info) => {
          if (!onEventMove) {
            info.revert()
            return
          }
          try {
            if (
              (await onEventMove({
                id: info.event.id,
                start: info.event.startStr,
                end: info.event.endStr,
              })) === false
            )
              info.revert()
          } catch (error) {
            info.revert()
            onError?.(error)
          }
        }}
        eventContent={(info) => {
          const event = preview(info.event)
          const details = renderEventPreview?.(event) ?? (
            <div className="calendar-preview">
              <Text variant="eyebrow">{t('Event')}</Text>
              <Heading as="h3" variant="card">
                {event.title}
              </Heading>
              <Text variant="description">
                {info.event.start
                  ? new Intl.DateTimeFormat(locale, {
                      dateStyle: 'medium',
                      ...(event.allDay ? {} : { timeStyle: 'short' }),
                    }).format(info.event.start)
                  : ''}
              </Text>
              {typeof event.extendedProps.location === 'string' && (
                <Text variant="caption">{event.extendedProps.location}</Text>
              )}
            </div>
          )
          const body = renderEventContent?.(event) ?? (
            <>
              <span className="calendar-event-time">{info.timeText}</span>
              <span className="calendar-event-title">{event.title}</span>
            </>
          )
          const content = info.event.url ? (
            <span className="calendar-event-button">{body}</span>
          ) : (
            <button
              type="button"
              className="calendar-event-button"
              aria-label={[event.title, info.timeText].filter(Boolean).join(', ')}
            >
              {body}
            </button>
          )
          return info.isMirror || info.isDragging || info.isResizing ? (
            content
          ) : (
            <HoverCard content={details} side="top">
              {content}
            </HoverCard>
          )
        }}
        eventTimeFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
        slotHeaderFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
        scrollTime="08:00:00"
        {...calendarOptions}
      />
    </>
  )
}
