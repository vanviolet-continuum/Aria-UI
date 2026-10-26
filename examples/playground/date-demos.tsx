import { useI18n } from '../../src/template/i18n'
import { useState } from 'react'
import {
  Calendar,
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  Field,
  TimePicker,
  type DateRange,
} from '@/template/ui'
import { DemoCard } from './demo-card'

export function DateDemos() {
  const { t: tr } = useI18n()

  const [date, setDate] = useState<string>()
  const [range, setRange] = useState<DateRange>({})
  const [time, setTime] = useState<string>()
  const [dateTime, setDateTime] = useState<string>()
  return (
    <>
      <DemoCard
        title={tr('Date Picker')}
        description={tr('A familiar calendar with a thoughtful little footprint.')}
        code={`import { DatePicker } from '@/template/ui'\n\n<DatePicker value={date} onChange={setDate} />\n// value: '2026-10-26' | undefined`}
      >
        <div className="demo-stack">
          <Field label={tr('Due date')}>
            <DatePicker value={date} onChange={setDate} />
          </Field>
          <div className="demo-selection">
            {tr('Value') + ' '}
            <code>{date ?? 'undefined'}</code>
          </div>
          <div className="demo-calendar-inline">
            <Calendar value={date} onChange={setDate} />
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Date Range Picker')}
        description={tr('Two calendars. One clear start and finish.')}
        code={`import { DateRangePicker, type DateRange } from '@/template/ui'\n\nconst [range, setRange] = useState<DateRange>({})\n<DateRangePicker value={range} onChange={setRange} />\n// { from: '2026-10-01', to: '2026-10-26' }`}
      >
        <div className="demo-stack">
          <Field label={tr('Reporting period')}>
            <DateRangePicker value={range} onChange={setRange} />
          </Field>
          <div className="demo-range-illustration">
            <span>
              01<small>{tr('START DATE')}</small>
            </span>
            <div>
              <i />
              <span />
              <i />
            </div>
            <span>
              26<small>{tr('END DATE')}</small>
            </span>
          </div>
          <div className="demo-selection">
            {tr('Range') + ' '}
            <code>{range.from ? `${range.from} → ${range.to ?? '…'}` : tr('Not selected')}</code>
          </div>
          <p className="demo-note">
            {tr('Quick presets for today, the last 7 or 30 days, and this month.')}
          </p>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Time & Date-Time Picker')}
        description={tr('Get the date right. Then make time for the details.')}
        code={`import { TimePicker, DateTimePicker } from '@/template/ui'\n\n<TimePicker value={time} onChange={setTime} minuteStep={15} />\n<DateTimePicker value={dateTime} onChange={setDateTime} />\n// Local value: '2026-10-26T09:30'`}
      >
        <div className="demo-stack">
          <Field label={tr('Start time')}>
            <TimePicker value={time} onChange={setTime} minuteStep={15} />
          </Field>
          <Field label={tr('Schedule a meeting')}>
            <DateTimePicker value={dateTime} onChange={setDateTime} />
          </Field>
          <div className="demo-selection">
            {tr('Date-time') + ' '}
            <code>{dateTime ?? 'undefined'}</code>
          </div>
          <p className="demo-note">
            {tr('Local date and time, without implicit timezone conversion.')}
          </p>
        </div>
      </DemoCard>
    </>
  )
}
