import { toDateKey, addDays } from '@/template/ui/calendar/date-utils'

export interface CalendarEntry {
  id: string
  title: string
  start: string
  end: string
  category: string
}
export const eventCategories = [
  { value: 'work', label: 'Team & meetings' },
  { value: 'care', label: 'Patient care' },
  { value: 'stock', label: 'Stock & deliveries' },
  { value: 'personal', label: 'Personal' },
]
const today = toDateKey(new Date())
export const initialEvents: CalendarEntry[] = [
  {
    id: 'event-1',
    title: 'Morning team check-in',
    start: `${today}T09:00`,
    end: `${today}T09:45`,
    category: 'work',
  },
  {
    id: 'event-2',
    title: 'Olivia · Routine checkup',
    start: `${today}T11:00`,
    end: `${today}T12:00`,
    category: 'care',
  },
  {
    id: 'event-3',
    title: 'Weekly stock delivery',
    start: `${addDays(today, 1)}T10:00`,
    end: `${addDays(today, 1)}T11:00`,
    category: 'stock',
  },
  {
    id: 'event-4',
    title: 'Practice planning',
    start: `${addDays(today, 2)}T14:00`,
    end: `${addDays(today, 2)}T15:00`,
    category: 'work',
  },
]
export const isCalendarEntries = (value: unknown): value is CalendarEntry[] =>
  Array.isArray(value) &&
  value.every(
    (item) =>
      item &&
      typeof item.id === 'string' &&
      typeof item.title === 'string' &&
      typeof item.start === 'string' &&
      typeof item.end === 'string' &&
      typeof item.category === 'string',
  )
export function toLocalDateTime(value: string | Date) {
  const date = value instanceof Date ? value : new Date(value)
  return `${toDateKey(date)}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
}
