import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function KitchenScaleIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M87 91h86l20 48a8 8 0 0 1-7 12H74a8 8 0 0 1-7-12l20-48Z" fill={c.surface} />
      <rect x="100" y="112" width="60" height="25" rx="4" fill={c.tint} stroke={c.line} />
      <path d="M112 121h11m8 0h12m-31 7h11m8 0h12" stroke={c.line} />
      <path d="M121 91V77h18v14M76 48h108c-3 25-21 33-54 33s-51-8-54-33Z" fill={c.tint} />
      <ellipse cx="130" cy="48" rx="54" ry="9" fill={c.surface} stroke={c.line} />
      <path d="M87 52h86m-93 94h100" stroke={c.line} />
      <circle cx="175" cy="127" r="3" fill={c.surface} stroke={c.line} />
    </Scene>
  )
}
