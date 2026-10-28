import clsx from 'clsx'
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import { Card } from '../card/card'
import { CardBody } from '../card/card.parts'
import { Text } from '../text/text'
import { MetricValue } from '../metric.value/metric.value'
import { Layers } from '../../icons/layout/layers.icon'
import type { SemanticColor } from '../button/button.types'

export interface StatCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'color'> {
  label: ReactNode
  value: ReactNode
  description?: ReactNode
  icon?: ReactNode | false
  illustration?: ReactNode
  color?: SemanticColor
  valueClassName?: string
  valueStyle?: CSSProperties
  visualClassName?: string
}
/** A consistent metric block with a configurable visual and room for custom content. */
export function StatCard({
  label,
  value,
  description,
  icon,
  illustration,
  color = 'primary',
  valueClassName,
  valueStyle,
  visualClassName,
  children,
  className,
  style,
  ...props
}: StatCardProps) {
  const visual = illustration ?? (icon === false ? null : (icon ?? <Layers size={22} />))
  return (
    <Card
      {...props}
      className={clsx('ui-stat-card', className)}
      style={{ '--stat-card-color': `var(--${color})`, ...style } as CSSProperties}
    >
      <CardBody>
        <div className="stat-card-layout">
          <div className="stat-card-content">
            <Text variant="label" tone="secondary">
              {label}
            </Text>
            <MetricValue className={valueClassName} style={valueStyle}>
              {value}
            </MetricValue>
            {description && <Text variant="caption">{description}</Text>}
          </div>
          {visual && (
            <div
              className={clsx(
                'stat-card-visual',
                illustration && 'stat-card-visual--illustration',
                visualClassName,
              )}
              aria-hidden="true"
            >
              {visual}
            </div>
          )}
        </div>
        {children}
      </CardBody>
    </Card>
  )
}
