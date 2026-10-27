import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { X } from 'lucide-react'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Badge, type BadgeProps } from '../badge/badge'

export interface ChipProps extends BadgeProps {
  onRemove?: () => void
  icon?: ReactNode
  disabled?: boolean
  removeLabel?: string
}

export function Chip({
  children,
  onRemove,
  variant = 'neutral',
  appearance = 'soft',
  size = 'md',
  icon,
  disabled = false,
  removeLabel,
  className,
  ...props
}: ChipProps) {
  const { t: tr, text: localize } = useI18n()

  return (
    <Badge
      {...props}
      variant={variant}
      appearance={appearance}
      size={size}
      aria-disabled={disabled || undefined}
      className={clsx(
        'ui-chip',
        `ui-chip--${size}`,
        onRemove && 'ui-chip--removable',
        disabled && 'ui-chip--disabled',
        className,
      )}
    >
      {icon && (
        <span className="ui-chip-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <Text as="span" variant="label" tone="inherit" className="ui-chip-label">
        {localize(children)}
      </Text>
      {onRemove && (
        <Text
          as="button"
          variant="button"
          tone="inherit"
          type="button"
          className="ui-chip-remove"
          disabled={disabled}
          aria-label={
            removeLabel ??
            tr('Remove {{value0}}', {
              value0: localize(typeof children === 'string' ? children : 'filter'),
            })
          }
          onClick={(event) => {
            event.stopPropagation()
            onRemove()
          }}
        >
          <X size={12} />
        </Text>
      )}
    </Badge>
  )
}
