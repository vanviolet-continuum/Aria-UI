import { PopoverContent } from '../popover/popover'
import { useI18n } from '../../i18n/use.i18n'
import * as Popover from '@radix-ui/react-popover'
import { Check, Clock3 } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../button/button'
import { Combobox } from '../combobox/combobox'

export interface TimePickerProps {
  value?: string
  onChange: (value: string) => void
  minuteStep?: 1 | 5 | 10 | 15 | 30
  disabled?: boolean
  placeholder?: string
  id?: string
  'aria-label'?: string
}
export function TimePicker({
  value,
  onChange,
  minuteStep = 5,
  disabled,
  placeholder = 'Combobox time',
  ...aria
}: TimePickerProps) {
  const { t: tr } = useI18n()

  const [open, setOpen] = useState(false)
  const [hour, minute] = (value ?? '09:00').split(':')
  const hours = Array.from({ length: 24 }, (_, index) => String(index).padStart(2, '0'))
  const minutes = [
    ...new Set([
      minute,
      ...Array.from({ length: 60 / minuteStep }, (_, index) =>
        String(index * minuteStep).padStart(2, '0'),
      ),
    ]),
  ].sort()
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={`picker-trigger${value ? '' : ' ui-placeholder'}`}
          {...aria}
        >
          <Clock3 size={16} />
          <span>{value ?? placeholder}</span>
          <span className="time-format">24h</span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <PopoverContent
          size="auto"
          variant="form"
          className="calendar-popover time-popover"
          align="start"
          sideOffset={7}
        >
          <h3>{tr('Choose a time')}</h3>
          <p>{tr('Your local time · 24-hour format')}</p>
          <div className="time-selectors">
            <label>
              {tr('Hour')}
              <Combobox
                aria-label={tr('Hour')}
                value={hour}
                options={hours.map((item) => ({ value: item, label: item }))}
                onChange={(nextValue) => onChange(`${nextValue}:${minute}`)}
              />
            </label>
            <span>:</span>
            <label>
              {tr('Minute')}
              <Combobox
                aria-label={tr('Minute')}
                value={minute}
                options={minutes.map((item) => ({ value: item, label: item }))}
                onChange={(nextValue) => onChange(`${hour}:${nextValue}`)}
              />
            </label>
          </div>
          <div className="time-quick-options">
            {['09:00', '12:00', '15:00', '18:00'].map((time) => (
              <button type="button" key={time} onClick={() => onChange(time)}>
                {time}
              </button>
            ))}
          </div>
          <div className="calendar-footer">
            <button
              type="button"
              onClick={() => {
                const now = new Date()
                onChange(
                  `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
                )
              }}
            >
              {tr('Now')}
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                if (!value) onChange('09:00')
                setOpen(false)
              }}
            >
              <Check size={14} />
              {tr('Done')}
            </Button>
          </div>
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  )
}
