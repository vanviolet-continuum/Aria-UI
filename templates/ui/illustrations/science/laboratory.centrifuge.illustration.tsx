import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function LaboratoryCentrifugeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M83 66V34c0-24 95-24 95 0v32" fill={c.surface} />
      <path d="M96 38c0-12 69-12 69 0v17H96V38Z" fill={c.tint} stroke={c.line} />
      <rect x="66" y="66" width="129" height="87" rx="11" fill={c.surface} />
      <ellipse cx="130.5" cy="90" rx="48" ry="17" fill={c.tint} />
      <ellipse cx="130.5" cy="90" rx="18" ry="7" fill={c.surface} stroke={c.line} />
      <path
        d="m100 84 6 3m-8 10 7-2m22-16v4m25 1-6 3m15 10-7-2m-25 8v-4"
        stroke={c.line}
        strokeWidth="3"
      />
      <rect x="86" y="122" width="55" height="17" rx="3" fill={c.tint} stroke={c.line} />
      <circle cx="170" cy="131" r="8" fill={c.surface} stroke={c.line} />
      <path d="M95 131h36m39 0 3-3" stroke={c.line} />
    </Scene>
  )
}
