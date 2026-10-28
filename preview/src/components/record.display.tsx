import type { ReactNode } from 'react'
import { useI18n } from '@templates/i18n'
import { Grid } from '@templates/ui/grid'
import { StatCard, type StatCardProps } from '@templates/ui/stat.card'
import { Badge, type BadgeVariant } from '@templates/ui/badge'
import { statusLabels } from '../data/operations/model'
import { metricVisual } from './metric.visual'

export function RecordStatus({ value }: { value: string }) {
  const { t } = useI18n()
  const variant: BadgeVariant = [
    'active',
    'completed',
    'done',
    'paid',
    'published',
    'delivered',
    'in.stock',
  ].includes(value)
    ? 'success'
    : ['overdue', 'high', 'out.of.stock', 'cancelled'].includes(value)
      ? 'danger'
      : ['lead', 'medium', 'sent', 'planning', 'pending', 'low.stock'].includes(value)
        ? 'warning'
        : ['in.progress', 'processing', 'shipped'].includes(value)
          ? 'primary'
          : 'neutral'
  return (
    <Badge variant={variant} dot>
      {t(statusLabels[value] ?? value)}
    </Badge>
  )
}
export function RecordMetrics({
  items,
}: {
  items: {
    label: string
    value: ReactNode
    hint?: string
    icon?: ReactNode
    illustration?: ReactNode
    color?: StatCardProps['color']
  }[]
}) {
  const { t } = useI18n()
  return (
    <Grid columns={{ base: 2, lg: 4 }} gap="md">
      {items.map((item) => {
        const visual = metricVisual(item.label),
          Icon = visual.icon
        return (
          <StatCard
            key={item.label}
            label={t(item.label)}
            value={item.value}
            description={item.hint ? t(item.hint) : undefined}
            icon={item.icon ?? <Icon size={22} />}
            illustration={item.illustration}
            color={item.color ?? visual.color}
            valueStyle={
              typeof item.value === 'string' && item.value.length > 11
                ? { fontSize: 'calc(var(--typography-metric-size) * .72)' }
                : undefined
            }
          />
        )
      })}
    </Grid>
  )
}
export function money(value: number, locale: string) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}
export function shortDate(value: string, locale: string) {
  return value
    ? new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(
        new Date(value.includes('T') ? value : value + 'T12:00:00'),
      )
    : '—'
}
export function downloadText(name: string, content: string, type = 'text/plain') {
  const url = URL.createObjectURL(new Blob([content], { type }))
  const link = document.createElement('a')
  link.href = url
  link.download = name
  document.body.append(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
