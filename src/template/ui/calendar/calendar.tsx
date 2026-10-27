import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { CalendarHeader } from './calendar.header'
import { useRef, useState, type KeyboardEvent } from 'react'
import clsx from 'clsx'
import {
  addDays,
  addMonths,
  calendarDays,
  fromDateKey,
  isDateDisabled,
  selectRange,
  toDateKey,
} from './date.utils'
import type { DateRange } from './date.utils'

interface CalendarBase {
  month?: Date
  onMonthChange?: (month: Date) => void
  minDate?: string
  maxDate?: string
  className?: string
}
type CalendarProps = CalendarBase &
  (
    | { mode?: 'single'; value?: string; onChange: (value: string) => void }
    | { mode: 'range'; value: DateRange; onChange: (value: DateRange) => void }
  )

export function Calendar(props: CalendarProps) {
  const { locale } = useI18n()

  const initial = props.mode === 'range' ? props.value.from : props.value
  const [internalMonth, setInternalMonth] = useState(initial ? fromDateKey(initial) : new Date())
  const [focused, setFocused] = useState(initial ?? toDateKey(new Date()))
  const grid = useRef<HTMLDivElement>(null)
  const month = props.month ?? internalMonth
  const today = toDateKey(new Date())
  const days = calendarDays(month)
  const range = props.mode === 'range' ? props.value : undefined
  const setMonth = (next: Date) => {
    setInternalMonth(next)
    props.onMonthChange?.(next)
  }
  const select = (date: string) => {
    setFocused(date)
    if (props.mode === 'range') props.onChange(selectRange(props.value, date))
    else props.onChange(date)
  }
  const moveFocus = (date: string) => {
    if (isDateDisabled(date, props.minDate, props.maxDate)) return
    setFocused(date)
    const next = fromDateKey(date)
    if (next.getMonth() !== month.getMonth() || next.getFullYear() !== month.getFullYear())
      setMonth(next)
    requestAnimationFrame(() =>
      grid.current?.querySelector<HTMLButtonElement>(`[data-date="${date}"]`)?.focus(),
    )
  }
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, date: string) => {
    const delta: Record<string, number> = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -7,
      ArrowDown: 7,
    }
    if (event.key in delta) {
      event.preventDefault()
      moveFocus(addDays(date, delta[event.key]))
    }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      const weekday = (fromDateKey(date).getDay() + 6) % 7
      moveFocus(addDays(date, event.key === 'Home' ? -weekday : 6 - weekday))
    }
    if (event.key === 'PageUp' || event.key === 'PageDown') {
      event.preventDefault()
      moveFocus(toDateKey(addMonths(fromDateKey(date), event.key === 'PageUp' ? -1 : 1)))
    }
  }

  return (
    <div className={clsx('ui-calendar', props.className)}>
      <CalendarHeader
        month={month}
        onChange={setMonth}
        minDate={props.minDate}
        maxDate={props.maxDate}
      />
      <div
        ref={grid}
        role="grid"
        aria-label={month.toLocaleDateString(locale, { month: 'long', year: 'numeric' })}
      >
        <div className="calendar-weekdays" role="row">
          {Array.from({ length: 7 }, (_, index) =>
            new Date(2026, 0, 5 + index).toLocaleDateString(locale, { weekday: 'short' }),
          ).map((day) => (
            <Text as="span" variant="caption" role="columnheader" key={day}>
              {day}
            </Text>
          ))}
        </div>
        {Array.from({ length: 6 }, (_, week) => (
          <div className="calendar-week" role="row" key={week}>
            {days.slice(week * 7, week * 7 + 7).map((date) => {
              const day = fromDateKey(date)
              const outside =
                day.getMonth() !== month.getMonth() || day.getFullYear() !== month.getFullYear()
              const selected = range
                ? date === range.from || date === range.to
                : date === props.value
              const between = !!(range?.from && range.to && date > range.from && date < range.to)
              return (
                <Text
                  as="span"
                  variant="label"
                  tone="inherit"
                  role="gridcell"
                  aria-selected={selected || between}
                  key={date}
                  className={clsx(
                    'calendar-cell',
                    between && 'calendar-cell--between',
                    range?.to && date === range.from && 'calendar-cell--start',
                    range?.from && date === range.to && 'calendar-cell--end',
                  )}
                >
                  <Text
                    as="button"
                    variant="menu"
                    tone="inherit"
                    type="button"
                    data-date={date}
                    data-outside-month={outside || undefined}
                    aria-label={fromDateKey(date).toLocaleDateString(locale, {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                    aria-current={date === today ? 'date' : undefined}
                    tabIndex={
                      date ===
                      (days.includes(focused)
                        ? focused
                        : days.find((day) => fromDateKey(day).getMonth() === month.getMonth()))
                        ? 0
                        : -1
                    }
                    disabled={isDateDisabled(date, props.minDate, props.maxDate)}
                    className={clsx(
                      'calendar-day',
                      outside && 'calendar-day--outside',
                      selected && 'calendar-day--selected',
                    )}
                    onKeyDown={(event) => onKeyDown(event, date)}
                    onClick={() => select(date)}
                  >
                    {fromDateKey(date).getDate()}
                  </Text>
                </Text>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
