import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function MetronomeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M117 26h26l33 129H84l33-129Z" fill={c.surface} />
      <path d="M121 39h18l23 90h-64l23-90Z" fill={c.tint} stroke={c.line} />
      <path d="M130 47v73m-7-61h14m-16 14h18m-20 14h22m-24 14h26m-27 14h28" stroke={c.line} />
      <path d="m130 122 22-76" strokeWidth="2.5" />
      <path d="m138 76 12 4 5-17-12-4-5 17Z" fill={c.surface} />
      <circle cx="130" cy="122" r="4" fill={c.surface} />
      <path d="M96 142h68m-52 6h36" stroke={c.line} />
    </Scene>
  )
}
