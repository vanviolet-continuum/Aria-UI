import type { CalendarOptions, EventInput } from '@fullcalendar/react'
import type { ReactNode } from 'react'
export type CalendarView = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay'
export interface CalendarEventPreview {
  id: string
  title: string
  start: string
  end: string
  allDay: boolean
  extendedProps: Record<string, unknown>
}
export interface CalendarRange {
  start: string
  end: string
  date: string
  view: CalendarView
  title: string
}
export interface CalendarSelection {
  start: string
  end: string
  allDay: boolean
}
export interface CalendarMove {
  id: string
  start: string
  end: string
}
export interface FullCalendarProps {
  events: EventInput[]
  initialView?: CalendarView
  initialDate?: string
  height?: number | 'auto'
  onSelect?: (selection: CalendarSelection) => void
  onEventClick?: (id: string) => void
  onEventMove?: (event: CalendarMove) => void | boolean | Promise<void | boolean>
  onError?: (error: unknown) => void
  editable?: boolean
  className?: string
  /** Controlled navigation makes the visible calendar range shareable through the URL. */
  view?: CalendarView
  date?: string
  onRangeChange?: (range: CalendarRange) => void
  toolbar?: ReactNode | false
  toolbarActions?: ReactNode
  weekends?: boolean
  onWeekendsChange?: (show: boolean) => void
  showWeekendsControl?: boolean
  renderEventPreview?: (event: CalendarEventPreview) => ReactNode
  renderEventContent?: (event: CalendarEventPreview) => ReactNode
  /** Native FullCalendar options remain available for less common customizations. */
  calendarOptions?: Omit<CalendarOptions, 'events' | 'plugins'>
}
