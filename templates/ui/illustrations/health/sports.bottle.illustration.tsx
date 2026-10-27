import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SportsBottleIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M112 47h36v19l13 17v65a7 7 0 0 1-7 7h-48a7 7 0 0 1-7-7V83l13-17V47Z"
        fill={c.surface}
      />
      <path d="M108 39h44v13h-44V39Zm11-13h22v13h-22V26Z" fill={c.tint} stroke={c.line} />
      <path d="M100 90h60m-60 45h60m-48-38h36v31h-36V97Z" fill={c.tint} stroke={c.line} />
      <path d="m129 102-8 14h10l-4 9 14-17h-11l4-6m-27-24-2 7m43-7 4 7m-41 60h27" stroke={c.line} />
      <path d="M151 43c31-6 42 18 23 28" stroke={c.line} />
    </Scene>
  )
}
