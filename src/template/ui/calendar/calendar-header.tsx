import { useI18n } from '../../i18n/use-i18n'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Combobox } from '../combobox/combobox'
import { addMonths, fromDateKey } from './date-utils'

export function CalendarHeader({
  month,
  onChange,
  minDate,
  maxDate,
}: {
  month: Date
  onChange: (month: Date) => void
  minDate?: string
  maxDate?: string
}) {
  const { t: tr, locale } = useI18n()

  const year = new Date().getFullYear()
  const start = Math.min(year - 100, month.getFullYear())
  const end = Math.max(year + 20, month.getFullYear())
  const years = Array.from({ length: end - start + 1 }, (_, index) => ({
    value: String(start + index),
    label: String(start + index),
  }))
  const monthIndex = (date: Date) => date.getFullYear() * 12 + date.getMonth()
  const months = Array.from({ length: 12 }, (_, index) => ({
    value: String(index),
    label: new Date(2026, index, 1).toLocaleDateString(locale, { month: 'long' }),
  }))
  return (
    <div className="calendar-heading">
      <button
        type="button"
        className="icon-button"
        aria-label={tr('Previous month')}
        disabled={!!minDate && monthIndex(addMonths(month, -1)) < monthIndex(fromDateKey(minDate))}
        onClick={() => onChange(addMonths(month, -1))}
      >
        <ChevronLeft size={16} />
      </button>
      <div className="calendar-month-select">
        <Combobox
          aria-label={tr('Month')}
          value={String(month.getMonth())}
          options={months}
          onChange={(value) => onChange(new Date(month.getFullYear(), Number(value), 1, 12))}
        />
        <Combobox
          aria-label={tr('Year')}
          value={String(month.getFullYear())}
          options={years}
          onChange={(value) => onChange(new Date(Number(value), month.getMonth(), 1, 12))}
        />
      </div>
      <button
        type="button"
        className="icon-button"
        aria-label={tr('Next month')}
        disabled={!!maxDate && monthIndex(addMonths(month, 1)) > monthIndex(fromDateKey(maxDate))}
        onClick={() => onChange(addMonths(month, 1))}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}
