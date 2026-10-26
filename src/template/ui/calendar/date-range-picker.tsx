import { PopoverContent } from '../popover/popover'
import { useI18n } from '../../i18n/use-i18n'
import * as Popover from '@radix-ui/react-popover'
import { CalendarRange, Check, X } from 'lucide-react'
import { useState } from 'react'
import { Calendar } from './calendar'
import { addDays, addMonths, formatDate, toDateKey, type DateRange } from './date-utils'
import { Button } from '../button/button'

export interface DateRangePickerProps {
  value: DateRange
  onChange: (value: DateRange) => void
  placeholder?: string
  disabled?: boolean
  id?: string
  'aria-label'?: string
}

export function DateRangePicker({
  value,
  onChange,
  placeholder = 'Select date range',
  disabled,
  ...aria
}: DateRangePickerProps) {
  const { t: tr, text: localize, locale } = useI18n()

  const [open, setOpen] = useState(false)
  const [month, setMonth] = useState(new Date())
  const today = toDateKey(new Date())
  const label = value.from
    ? `${formatDate(value.from, undefined, locale)}${value.to ? ` – ${formatDate(value.to, undefined, locale)}` : ' – …'}`
    : placeholder
  const presets = [
    { label: 'Today', value: { from: today, to: today } },
    { label: 'Last 7 days', value: { from: addDays(today, -6), to: today } },
    { label: 'Last 30 days', value: { from: addDays(today, -29), to: today } },
    {
      label: 'This month',
      value: {
        from: toDateKey(new Date(new Date().getFullYear(), new Date().getMonth(), 1)),
        to: today,
      },
    },
  ]
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <div className="picker-wrap">
        <Popover.Trigger asChild>
          <button
            type="button"
            disabled={disabled}
            className={`picker-trigger${value.from ? '' : ' ui-placeholder'}`}
            {...aria}
          >
            <CalendarRange size={16} />
            <span>{localize(label)}</span>
          </button>
        </Popover.Trigger>
        {value.from && !disabled && (
          <button
            type="button"
            className="picker-clear"
            aria-label={tr('Clear date range')}
            onClick={() => onChange({})}
          >
            <X size={13} />
          </button>
        )}
      </div>
      <Popover.Portal>
        <PopoverContent
          size="auto"
          variant="form"
          className="calendar-popover range-popover"
          align="start"
          sideOffset={7}
        >
          <div className="range-presets">
            {presets.map((preset) => (
              <button
                type="button"
                key={preset.label}
                onClick={() => {
                  onChange(preset.value)
                  setOpen(false)
                }}
              >
                {localize(preset.label)}
              </button>
            ))}
          </div>
          <div className="range-calendars">
            <Calendar
              mode="range"
              value={value}
              onChange={onChange}
              month={month}
              onMonthChange={setMonth}
            />
            <Calendar
              mode="range"
              value={value}
              onChange={onChange}
              className="range-second-month"
              month={addMonths(month, 1)}
              onMonthChange={(next) => setMonth(addMonths(next, -1))}
            />
          </div>
          <div className="calendar-footer">
            <span>
              {value.from && !value.to
                ? tr('Now choose an end date')
                : tr('Choose a start and end date')}
            </span>
            <Button
              variant="primary"
              size="sm"
              disabled={!value.from || !value.to}
              onClick={() => setOpen(false)}
            >
              <Check size={14} />
              {tr('Apply range')}
            </Button>
          </div>
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  )
}
