import { useI18n } from '../../i18n/use-i18n'
import { DatePicker, type DatePickerProps } from './date-picker'
import { TimePicker } from './time-picker'
import { toDateKey } from './date-utils'

export interface DateTimePickerProps extends Omit<DatePickerProps, 'onChange'> {
  onChange: (value: string | undefined) => void
  minuteStep?: 1 | 5 | 10 | 15 | 30
}

export function DateTimePicker({
  value,
  onChange,
  minuteStep,
  disabled,
  ...props
}: DateTimePickerProps) {
  const { t: tr } = useI18n()

  const [date, time] = value?.split('T') ?? []
  return (
    <div className="date-time-picker">
      <DatePicker
        {...props}
        disabled={disabled}
        value={date}
        onChange={(next) => onChange(next ? `${next}T${time ?? '09:00'}` : undefined)}
      />
      <TimePicker
        value={time}
        disabled={disabled}
        minuteStep={minuteStep}
        aria-label={tr('Select time')}
        onChange={(next) => onChange(`${date ?? toDateKey(new Date())}T${next}`)}
      />
    </div>
  )
}
