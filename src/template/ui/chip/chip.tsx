import { useI18n } from '../../i18n/use-i18n'
import { X } from 'lucide-react'
import type { ReactNode } from 'react'
import { Badge, type BadgeVariant } from '../badge/badge'

export function Chip({
  children,
  onRemove,
  variant = 'neutral',
  icon,
}: {
  children: ReactNode
  onRemove?: () => void
  variant?: BadgeVariant
  icon?: ReactNode
}) {
  const { t: tr, text: localize } = useI18n()

  return (
    <Badge variant={variant} className="ui-chip">
      {icon}
      {localize(children)}
      {onRemove && (
        <button
          type="button"
          aria-label={tr('Remove {{value0}}', {
            value0: localize(typeof children === 'string' ? children : 'filter'),
          })}
          onClick={onRemove}
        >
          <X size={12} />
        </button>
      )}
    </Badge>
  )
}
