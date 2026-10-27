import { Text } from '../text/text'
const labels: Record<string, string> = {
  pending: 'Pending',
  partial: 'Partially received',
  complete: 'Complete',
  'in-stock': 'In stock',
  'low-stock': 'Low stock',
  'out-of-stock': 'Out of stock',
}

export function StatusBadge({ status, label }: { status: string; label?: string }) {
  const { t } = useI18n()
  return (
    <Text
      as="span"
      variant="label"
      tone="inherit"
      className={`status-badge status-badge--${status}`}
    >
      <span />
      {t(label ?? labels[status] ?? status)}
    </Text>
  )
}
import { useI18n } from '../../i18n/use.i18n'
