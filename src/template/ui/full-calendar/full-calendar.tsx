import { useI18n } from '../../i18n/use-i18n'
import { lazy, Suspense } from 'react'
import { LoadingIllustration } from '../illustrations'
import type { FullCalendarProps } from './types'

const CalendarRenderer = /* @__PURE__ */ lazy(() => import('./calendar-renderer'))
export function FullCalendar(props: FullCalendarProps) {
  const { t: tr } = useI18n()

  return (
    <div className={`ui-fullcalendar ${props.className ?? ''}`}>
      <Suspense
        fallback={
          <div className="calendar-initial-loading" role="status">
            <LoadingIllustration size={90} label={tr('')} />
            <span>{tr('Making room on your calendar…')}</span>
          </div>
        }
      >
        <CalendarRenderer {...props} />
      </Suspense>
    </div>
  )
}
export type { FullCalendarProps, CalendarMove, CalendarSelection } from './types'
