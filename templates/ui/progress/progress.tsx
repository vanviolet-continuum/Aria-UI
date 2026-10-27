import clsx from 'clsx'
import { useId, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'
import { useI18n } from '../../i18n/use.i18n'
import { Text } from '../text/text'
import type { SemanticColor } from '../button/button.types'

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'color'> {
  value?: number | null
  min?: number
  max?: number
  label?: ReactNode
  showValue?: boolean
  formatValue?: (percent: number) => string
  size?: 'sm' | 'md' | 'lg'
  color?: SemanticColor
  trackClassName?: string
  indicatorClassName?: string
}
export function Progress({
  value,
  min = 0,
  max = 100,
  label,
  showValue,
  formatValue,
  size = 'md',
  color = 'primary',
  trackClassName,
  indicatorClassName,
  className,
  style,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: ProgressProps) {
  const id = useId()
  const { t, locale } = useI18n()
  const lower = Number.isFinite(min) ? min : 0
  const upper = Number.isFinite(max) && max > lower ? max : lower + 100
  const determinate = typeof value === 'number' && Number.isFinite(value)
  const actual = determinate ? Math.max(lower, Math.min(upper, value)) : undefined
  const percent = actual === undefined ? 0 : ((actual - lower) / (upper - lower)) * 100
  const rendered = formatValue
    ? formatValue(percent)
    : new Intl.NumberFormat(locale, { style: 'percent', maximumFractionDigits: 0 }).format(
        percent / 100,
      )
  return (
    <div
      className={clsx('ui-progress-field', className)}
      style={{ '--progress-color': 'var(--' + color + ')', ...style } as CSSProperties}
    >
      {(label || showValue) && (
        <div className="ui-progress-heading">
          {label && (
            <Text as="span" variant="label" id={id}>
              {label}
            </Text>
          )}
          {showValue && (
            <Text as="span" variant="caption">
              {determinate ? rendered : t('Loading…')}
            </Text>
          )}
        </div>
      )}
      <div
        {...props}
        role="progressbar"
        aria-label={ariaLabel ?? (!label ? t('Progress') : undefined)}
        aria-labelledby={ariaLabelledBy ?? (label ? id : undefined)}
        aria-valuemin={lower}
        aria-valuemax={upper}
        aria-valuenow={actual}
        aria-valuetext={determinate ? rendered : undefined}
        className={clsx('ui-progress', 'ui-progress--' + size, trackClassName)}
        data-indeterminate={!determinate || undefined}
      >
        <div
          className={clsx('ui-progress-indicator', indicatorClassName)}
          style={{ width: determinate ? percent + '%' : undefined }}
        />
      </div>
    </div>
  )
}
