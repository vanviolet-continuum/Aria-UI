import clsx from 'clsx'
import type { CSSProperties } from 'react'

export function Skeleton({
  width,
  height,
  circle,
  className,
}: {
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  circle?: boolean
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={clsx('ui-skeleton', circle && 'ui-skeleton--circle', className)}
      style={{ width, height }}
    />
  )
}
