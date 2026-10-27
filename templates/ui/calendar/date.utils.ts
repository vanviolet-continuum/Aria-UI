export interface DateRange {
  from?: string
  to?: string
}

export function toDateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}
export function fromDateKey(value: string): Date {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day, 12)
}
export function addDays(value: string, amount: number): string {
  const date = fromDateKey(value)
  date.setDate(date.getDate() + amount)
  return toDateKey(date)
}
export function addMonths(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1, 12)
}
export function formatDate(
  value?: string,
  options?: Intl.DateTimeFormatOptions,
  locale = 'id-ID',
): string {
  if (!value) return ''
  return fromDateKey(value).toLocaleDateString(
    locale,
    options ?? {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    },
  )
}
export function calendarDays(month: Date): string[] {
  const start = new Date(month.getFullYear(), month.getMonth(), 1, 12)
  const offset = (start.getDay() + 6) % 7
  start.setDate(1 - offset)
  return Array.from({ length: 42 }, (_, index) => addDays(toDateKey(start), index))
}
export function selectRange(current: DateRange, next: string): DateRange {
  if (!current.from || current.to || next < current.from) return { from: next }
  return { from: current.from, to: next }
}
export function isDateDisabled(value: string, min?: string, max?: string): boolean {
  return !!((min && value < min) || (max && value > max))
}
