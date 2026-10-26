import type { ReactNode } from 'react'
import { IllustrationFrame, type IllustrationProps } from '../frame'

export { sceneColors as colors } from '../collections/collection-scene'

export function StillLifeScene({
  children,
  ...props
}: IllustrationProps & { children: ReactNode }) {
  return (
    <IllustrationFrame {...props}>
      <g
        stroke="var(--illustration-primary)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </IllustrationFrame>
  )
}
