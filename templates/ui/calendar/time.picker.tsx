import { FieldLabel } from '../field.label/field.label'
import { Heading } from '../heading/heading'
import { Text } from '../text/text'
import { PopoverContent } from '../popover/popover'
import { useI18n } from '../../i18n/use.i18n'
import * as Popover from '@radix-ui/react-popover'
import { Check, Clock3 } from 'lucide-react'
import { useId, useState } from 'react'
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
  placeholder = 'Select time',
  ...aria
}: TimePickerProps) {
  const { t: tr } = useI18n()

  const [open, setOpen] = useState(false)
  const hourId = useId()
  const minuteId = useId()
  const [hour, minute] = (value || '09:00').split(':')
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
        <Text
          as="button"
          variant="menu"
          tone="inherit"
          type="button"
          disabled={disabled}
          className={`picker-trigger${value ? '' : ' ui-placeholder'}`}
          {...aria}
        >
          <Clock3 size={16} />
          <Text as="span" variant="label" tone="inherit" className="picker-value">
            {value || tr(placeholder)}
          </Text>
          <Text as="span" variant="caption" tone="inherit" className="time-format">
            24h
          </Text>
        </Text>
      </Popover.Trigger>
      <Popover.Portal>
        <PopoverContent
          size="auto"
          variant="form"
          className="calendar-popover time-popover"
          align="start"
          sideOffset={7}
        >
          <div className="time-panel-heading">
            <span className="time-panel-icon" aria-hidden="true">
              <Clock3 size={17} />
            </span>
            <div>
              <Heading as="h3" variant="card">
                {tr('Choose a time')}
              </Heading>
              <Text variant="caption" tone="secondary">
                {tr('Your local time · 24-hour format')}
              </Text>
            </div>
          </div>
          <div className="time-selectors" role="group" aria-label={tr('Select time')}>
            <div className="time-field">
              <FieldLabel htmlFor={hourId} showRequirement={false}>
                {tr('Hour')}
              </FieldLabel>
              <Combobox
                id={hourId}
                size="sm"
                searchable={false}
                aria-label={tr('Hour')}
                value={hour}
                options={hours.map((item) => ({ value: item, label: item }))}
                onChange={(nextValue) => onChange(`${nextValue}:${minute}`)}
              />
            </div>
            <Text as="span" variant="label" className="time-separator" aria-hidden="true">
              :
            </Text>
            <div className="time-field">
              <FieldLabel htmlFor={minuteId} showRequirement={false}>
                {tr('Minute')}
              </FieldLabel>
              <Combobox
                id={minuteId}
                size="sm"
                searchable={false}
                aria-label={tr('Minute')}
                value={minute}
                options={minutes.map((item) => ({ value: item, label: item }))}
                onChange={(nextValue) => onChange(`${hour}:${nextValue}`)}
              />
            </div>
          </div>
          <div className="time-quick-options">
            {['09:00', '12:00', '15:00', '18:00'].map((time) => (
              <Text
                as="button"
                variant="menu"
                tone="inherit"
                type="button"
                key={time}
                aria-pressed={value === time}
                onClick={() => onChange(time)}
              >
                {time}
              </Text>
            ))}
          </div>
          <div className="calendar-footer">
            <Button
              variant="text"
              size="sm"
              onClick={() => {
                const now = new Date()
                onChange(
                  `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
                )
              }}
            >
              {tr('Now')}
            </Button>
            <Button
              variant="contained"
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
