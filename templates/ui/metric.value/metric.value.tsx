import type { ElementType } from 'react'
import {
  renderTypography,
  type HeadingSize,
  type TypographyProps,
} from '../block.shared/typography'
export type MetricValueProps<E extends ElementType = 'strong'> = TypographyProps<E, HeadingSize>
export function MetricValue<E extends ElementType = 'strong'>(props: MetricValueProps<E>) {
  return renderTypography(
    {
      ...props,
      as: props.as ?? 'strong',
      variant: props.variant ?? 'metric',
      style: { fontVariantNumeric: 'tabular-nums', ...props.style },
    },
    'heading',
    'aria-metric-value',
  )
}
