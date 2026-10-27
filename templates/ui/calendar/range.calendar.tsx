import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { useI18n } from '../../i18n/use.i18n'
import { Text } from '../text/text'
import { Calendar } from './calendar'
import { addMonths, formatDate, fromDateKey, type DateRange } from './date.utils'

export interface RangeCalendarProps {
  value: DateRange
  onChange: (range: DateRange) => void
  month?: Date
  onMonthChange?: (month: Date) => void
  minDate?: string
  maxDate?: string
  summary?: boolean
  className?: string
}

/** Two consecutive months stay visible; narrow layouts stack them vertically. */
export function RangeCalendar({
  value,
  onChange,
  month,
  onMonthChange,
  minDate,
  maxDate,
  summary = true,
  className,
}: RangeCalendarProps) {
  const { t: tr, locale } = useI18n()
  const [internalMonth, setInternalMonth] = useState(() =>
    value.from ? fromDateKey(value.from) : new Date(),
  )
  const visibleMonth = month ?? internalMonth
  const changeMonth = (next: Date) => {
    setInternalMonth(next)
    onMonthChange?.(next)
  }
  return (
    <div
      className={clsx('range-calendar', className)}
      role="group"
      aria-label={tr('Choose date range')}
    >
      {summary && (
        <div className="range-calendar-summary" aria-live="polite">
          <div className="range-calendar-boundary" data-active={!value.from || undefined}>
            <Text variant="caption">{tr('Start date')}</Text>
            <Text variant="label">
              {value.from ? formatDate(value.from, undefined, locale) : tr('Select date')}
            </Text>
          </div>
          <ArrowRight size={14} aria-hidden="true" />
          <div
            className="range-calendar-boundary"
            data-active={(!!value.from && !value.to) || undefined}
          >
            <Text variant="caption">{tr('End date')}</Text>
            <Text variant="label">
              {value.to ? formatDate(value.to, undefined, locale) : tr('Select date')}
            </Text>
          </div>
        </div>
      )}
      <div className="range-calendars">
        <Calendar
          mode="range"
          value={value}
          onChange={onChange}
          month={visibleMonth}
          onMonthChange={changeMonth}
          minDate={minDate}
          maxDate={maxDate}
        />
        <Calendar
          mode="range"
          value={value}
          onChange={onChange}
          className="range-second-month"
          month={addMonths(visibleMonth, 1)}
          onMonthChange={(next) => changeMonth(addMonths(next, -1))}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    </div>
  )
}
