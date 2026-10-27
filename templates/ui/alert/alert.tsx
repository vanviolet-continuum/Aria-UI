import clsx from 'clsx'
import { useState, type HTMLAttributes, type ReactNode } from 'react'
import { Info } from '../../icons/interface/info.icon'
import { CircleCheck } from '../../icons/interface/circle.check.icon'
import { TriangleAlert } from '../../icons/interface/triangle.alert.icon'
import { CircleAlert } from '../../icons/interface/circle.alert.icon'
import { X } from '../../icons/interface/x.icon'
import { useI18n } from '../../i18n/use.i18n'
import { Text } from '../text/text'

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode
  description?: ReactNode
  severity?: 'info' | 'success' | 'warning' | 'error'
  variant?: 'soft' | 'outlined'
  icon?: ReactNode | false
  actions?: ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  dismissLabel?: string
}
export function Alert({
  title,
  description,
  severity = 'info',
  variant = 'soft',
  icon,
  actions,
  dismissible,
  onDismiss,
  dismissLabel,
  children,
  className,
  ...props
}: AlertProps) {
  const { t } = useI18n()
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null
  const Icon =
    severity === 'success'
      ? CircleCheck
      : severity === 'warning'
        ? TriangleAlert
        : severity === 'error'
          ? CircleAlert
          : Info
  return (
    <div
      role={severity === 'error' || severity === 'warning' ? 'alert' : 'status'}
      {...props}
      className={clsx('ui-alert', 'ui-alert--' + severity, 'ui-alert--' + variant, className)}
    >
      {icon !== false && (
        <span className="ui-alert-icon" aria-hidden="true">
          {icon ?? <Icon size={19} />}
        </span>
      )}
      <div className="ui-alert-content">
        {title && (
          <Text variant="label" tone="inherit">
            {title}
          </Text>
        )}
        {description && (
          <Text variant="description" tone="inherit">
            {description}
          </Text>
        )}
        {children}
      </div>
      {actions && <div className="ui-alert-actions">{actions}</div>}
      {dismissible && (
        <button
          type="button"
          className="ui-alert-dismiss"
          aria-label={dismissLabel ?? t('Dismiss notification')}
          onClick={() => {
            setDismissed(true)
            onDismiss?.()
          }}
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
