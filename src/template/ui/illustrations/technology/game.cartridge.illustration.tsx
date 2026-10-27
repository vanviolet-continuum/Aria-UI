import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GameCartridgeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M87 34h86v111H87V34Z" fill={c.surface} />
      <path d="M95 42h70v14H95V42Zm9 89h52v14h-52v-14Z" fill={c.tint} stroke={c.line} />
      <path
        d="M110 134v10m9-10v10m9-10v10m9-10v10m9-10v10M99 67h62v48H99V67Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m108 104 16-24 11 15 9-10 11 19h-47Z" fill={c.surface} stroke={c.line} />
      <circle cx="148" cy="77" r="4" fill={c.surface} stroke={c.line} />
      <path d="M75 154h110m-119-54h9m110-30h10" stroke={c.line} />
    </Scene>
  )
}
