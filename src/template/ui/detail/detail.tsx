import clsx from 'clsx'
import { useId, type HTMLAttributes, type ReactNode } from 'react'
import { useI18n } from '../../i18n/use.i18n'

export interface DetailViewProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
  eyebrow?: ReactNode
  description?: ReactNode
  avatar?: ReactNode
  badge?: ReactNode
  meta?: ReactNode
  actions?: ReactNode
  summary?: ReactNode
  aside?: ReactNode
}

/** The same composition fits a full page, a card, or a drawer. */
export function DetailView({
  title,
  eyebrow,
  description,
  avatar,
  badge,
  meta,
  actions,
  summary,
  aside,
  children,
  className,
  ...props
}: DetailViewProps) {
  const { text: localize } = useI18n()

  return (
    <div className={clsx('detail-view', className)} {...props}>
      <header className="detail-header">
        <div className="detail-header-main">
          {avatar && <div className="detail-avatar">{avatar}</div>}
          <div className="detail-identity">
            {eyebrow && <div className="detail-eyebrow">{localize(eyebrow)}</div>}
            <div className="detail-title-row">
              <h2>{localize(title)}</h2>
              {badge}
            </div>
            {description && <p className="detail-description">{localize(description)}</p>}
          </div>
          {actions && <div className="detail-actions">{actions}</div>}
        </div>
        {meta && <div className="detail-meta">{meta}</div>}
      </header>
      {summary}
      <div className={clsx('detail-layout', aside && 'detail-layout--with-aside')}>
        <div className="detail-content">{children}</div>
        {aside && <div className="detail-aside">{aside}</div>}
      </div>
    </div>
  )
}

export interface DetailSectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  actions?: ReactNode
}

export function DetailSection({
  title,
  description,
  icon,
  actions,
  children,
  className,
  ...props
}: DetailSectionProps) {
  const id = useId()
  const { text: localize } = useI18n()

  return (
    <section className={clsx('detail-section', className)} aria-labelledby={id} {...props}>
      <div className="detail-section-header">
        {icon && (
          <span className="detail-section-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <div>
          <h3 id={id}>{localize(title)}</h3>
          {description && <p>{localize(description)}</p>}
        </div>
        {actions && <div className="detail-section-actions">{actions}</div>}
      </div>
      <div className="detail-section-body">{children}</div>
    </section>
  )
}

export interface DetailItem {
  id: string
  label: ReactNode
  value?: ReactNode
  icon?: ReactNode
  hint?: ReactNode
  fullWidth?: boolean
}

export interface DetailListProps extends HTMLAttributes<HTMLDListElement> {
  items: DetailItem[]
  columns?: 1 | 2 | 3
  emptyValue?: ReactNode
}

export function DetailList({
  items,
  columns = 2,
  emptyValue = '—',
  className,
  ...props
}: DetailListProps) {
  const { text: localize } = useI18n()

  return (
    <dl className={clsx('detail-list', `detail-list--${columns}`, className)} {...props}>
      {items.map((item) => (
        <div className={clsx('detail-field', item.fullWidth && 'detail-field--full')} key={item.id}>
          <dt>
            {item.icon && <span aria-hidden="true">{item.icon}</span>}
            {localize(item.label)}
          </dt>
          <dd>
            {item.value === null || item.value === undefined || item.value === ''
              ? localize(emptyValue)
              : localize(item.value)}
            {item.hint && <small>{localize(item.hint)}</small>}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export interface DetailStat {
  id: string
  label: ReactNode
  value: ReactNode
  icon?: ReactNode
  hint?: ReactNode
}

export interface DetailStatsProps extends HTMLAttributes<HTMLDListElement> {
  items: DetailStat[]
}

export function DetailStats({ items, className, ...props }: DetailStatsProps) {
  const { text: localize } = useI18n()

  return (
    <dl className={clsx('detail-stats', className)} {...props}>
      {items.map((item) => (
        <div className="detail-stat" key={item.id}>
          <dt>
            {localize(item.label)}
            {item.icon && <span aria-hidden="true">{item.icon}</span>}
          </dt>
          <dd>
            <strong>{localize(item.value)}</strong>
            {item.hint && <small>{localize(item.hint)}</small>}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export interface DetailTimelineItem {
  id: string
  title: ReactNode
  description?: ReactNode
  dateTime?: string
  time?: ReactNode
  icon?: ReactNode
  tone?: 'neutral' | 'primary' | 'success'
}

export interface DetailTimelineProps extends HTMLAttributes<HTMLOListElement> {
  items: DetailTimelineItem[]
}

export function DetailTimeline({ items, className, ...props }: DetailTimelineProps) {
  const { text: localize } = useI18n()

  return (
    <ol className={clsx('detail-timeline', className)} {...props}>
      {items.map((item) => (
        <li
          className={`detail-timeline-item detail-timeline-item--${item.tone ?? 'neutral'}`}
          key={item.id}
        >
          <span className="detail-timeline-marker" aria-hidden="true">
            {item.icon}
          </span>
          <div>
            <strong>{localize(item.title)}</strong>
            {item.description && <p>{localize(item.description)}</p>}
            {item.time && <time dateTime={item.dateTime}>{localize(item.time)}</time>}
          </div>
        </li>
      ))}
    </ol>
  )
}
