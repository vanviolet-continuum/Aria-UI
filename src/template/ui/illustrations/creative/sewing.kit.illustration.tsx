import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SewingKitIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="61" y="78" width="139" height="77" rx="10" fill={c.surface} />
      <path d="M59 65h143v20H59V65Zm45-1V50h52v14" fill={c.tint} stroke={c.line} />
      <path d="M70 91h121m-121 53h121" stroke={c.line} strokeDasharray="3 4" />
      <rect x="116" y="76" width="27" height="15" rx="3" fill={c.surface} />
      <path
        d="M92 116h13m-13 0v12h13v-12m-4-7v7m32-17 1 35m12-36-14 36m-9 0h18m25-26h14m-14 8h14m-14 8h14"
        stroke={c.line}
      />
    </Scene>
  )
}
