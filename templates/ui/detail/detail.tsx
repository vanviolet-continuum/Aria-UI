import { MetricValue } from '../metric.value/metric.value'

import { Text } from '../text/text'

import { Heading } from '../heading/heading'

import { Eyebrow } from '../eyebrow/eyebrow'
import clsx from 'clsx'
import { useId, type HTMLAttributes, type ReactNode } from 'react'
import { useI18n } from '../../i18n/use.i18n'
import { SectionHeader } from '../section.header/section.header'

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
  variant?: 'default' | 'compact'
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
  variant = 'default',
  children,
  className,
  ...props
}: DetailViewProps) {
  const { text: localize } = useI18n()

  return (
    <div className={clsx('detail-view', `detail-view--${variant}`, className)} {...props}>
      <header className="detail-header">
        <div className="detail-header-main">
          {avatar && <div className="detail-avatar">{avatar}</div>}
          <div className="detail-identity">
            {eyebrow && (
              <Eyebrow as="div" variant="eyebrow" className="detail-eyebrow">
                {localize(eyebrow)}
              </Eyebrow>
            )}
            <div className="detail-title-row">
              <Heading as="h2" variant={variant === 'compact' ? 'card' : 'section'}>
                {localize(title)}
              </Heading>
              {badge}
            </div>
            {description && (
              <Text as="p" variant="description" className="detail-description">
                {localize(description)}
              </Text>
            )}
          </div>
          {actions && <div className="detail-actions">{actions}</div>}
        </div>
        {meta && (
          <Text as="div" variant="body" className="detail-meta">
            {meta}
          </Text>
        )}
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
      <SectionHeader
        className="detail-section-header"
        title={localize(title)}
        description={localize(description)}
        leading={icon}
        actions={actions}
        padding="md"
        paddingX="lg"
        slotProps={{
          title: { id },
          leading: { className: 'detail-section-icon', 'aria-hidden': true },
          actions: { className: 'detail-section-actions' },
        }}
      />
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
          <Text as="dt" variant="label">
            {item.icon && (
              <Text as="span" variant="label" tone="inherit" aria-hidden="true">
                {item.icon}
              </Text>
            )}
            {localize(item.label)}
          </Text>
          <Text as="dd" variant="body">
            {item.value === null || item.value === undefined || item.value === ''
              ? localize(emptyValue)
              : localize(item.value)}
            {item.hint && (
              <Text as="small" variant="caption">
                {localize(item.hint)}
              </Text>
            )}
          </Text>
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
          <Text as="dt" variant="label">
            {localize(item.label)}
            {item.icon && (
              <Text as="span" variant="label" tone="inherit" aria-hidden="true">
                {item.icon}
              </Text>
            )}
          </Text>
          <Text as="dd" variant="body">
            <MetricValue as="strong" variant="metric">
              {localize(item.value)}
            </MetricValue>
            {item.hint && (
              <Text as="small" variant="caption">
                {localize(item.hint)}
              </Text>
            )}
          </Text>
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
          <Text
            as="span"
            variant="label"
            tone="inherit"
            className="detail-timeline-marker"
            aria-hidden="true"
          >
            {item.icon}
          </Text>
          <div>
            <Text as="strong" variant="label">
              {localize(item.title)}
            </Text>
            {item.description && (
              <Text as="p" variant="body">
                {localize(item.description)}
              </Text>
            )}
            {item.time && (
              <Text as="time" variant="caption" dateTime={item.dateTime}>
                {localize(item.time)}
              </Text>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
