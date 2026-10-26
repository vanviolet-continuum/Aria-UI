import type { EventInput } from '@fullcalendar/react'
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
  initialView?: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay'
  initialDate?: string
  height?: number | 'auto'
  onSelect?: (selection: CalendarSelection) => void
  onEventClick?: (id: string) => void
  onEventMove?: (event: CalendarMove) => void | boolean | Promise<void | boolean>
  onError?: (error: unknown) => void
  editable?: boolean
  className?: string
}
