import type { ReactNode } from 'react'
import { IllustrationFrame, type IllustrationProps } from './illustration.frame'

export { sceneColors as colors } from './collection.scene'

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
