import { Text } from '../text/text'
import { PopoverContent } from '../popover/popover'
import { useI18n } from '../../i18n/use.i18n'
import * as Popover from '@radix-ui/react-popover'
import { CalendarDays, X } from 'lucide-react'
import { useState } from 'react'
import { Calendar } from './calendar'
import { formatDate, toDateKey } from './date.utils'

export interface DatePickerProps {
  value?: string
  onChange: (value: string | undefined) => void
  placeholder?: string
  minDate?: string
  maxDate?: string
  disabled?: boolean
  clearable?: boolean
  id?: string
  name?: string
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
}

export function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  minDate,
  maxDate,
  disabled,
  clearable = true,
  id,
  name,
  ...aria
}: DatePickerProps) {
  const { t: tr, locale } = useI18n()

  const [open, setOpen] = useState(false)
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      {name && <input type="hidden" name={name} value={value ?? ''} />}
      <div className="picker-wrap">
        <Popover.Trigger asChild>
          <Text
            as="button"
            variant="menu"
            tone="inherit"
            type="button"
            id={id}
            disabled={disabled}
            className={`picker-trigger${value ? '' : ' ui-placeholder'}`}
            {...aria}
          >
            <CalendarDays size={16} />
            <Text as="span" variant="label" tone="inherit" className="picker-value">
              {value ? formatDate(value, undefined, locale) : tr(placeholder)}
            </Text>
          </Text>
        </Popover.Trigger>
        {value && clearable && !disabled && (
          <Text
            as="button"
            variant="menu"
            tone="inherit"
            type="button"
            className="picker-clear"
            aria-label={tr('Clear date')}
            onClick={() => onChange(undefined)}
          >
            <X size={13} />
          </Text>
        )}
      </div>
      <Popover.Portal>
        <PopoverContent
          size="auto"
          variant="form"
          className="calendar-popover"
          align="start"
          sideOffset={7}
        >
          <Calendar
            value={value}
            onChange={(next) => {
              onChange(next)
              setOpen(false)
            }}
            minDate={minDate}
            maxDate={maxDate}
          />
          <div className="calendar-footer">
            <Text as="span" variant="caption">
              {tr('Select a day on the calendar')}
            </Text>
            <Text
              as="button"
              variant="menu"
              tone="inherit"
              type="button"
              disabled={
                !!(
                  (minDate && toDateKey(new Date()) < minDate) ||
                  (maxDate && toDateKey(new Date()) > maxDate)
                )
              }
              onClick={() => {
                onChange(toDateKey(new Date()))
                setOpen(false)
              }}
            >
              {tr('Today')}
            </Text>
          </div>
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  )
}
