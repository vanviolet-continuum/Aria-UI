import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function FileCabinetIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="84" y="30" width="92" height="123" rx="6" fill={c.surface} />
      <path d="M92 40h76v48H92V40Zm0 56h76v48H92V96Z" fill={c.tint} stroke={c.line} />
      <path
        d="M116 54h28v12h-28V54Zm0 56h28v12h-28v-12m-24-36h20m-20 56h20m-24 23v5m76-5v5"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M122 60h16m-16 56h16" stroke={c.line} />
    </Scene>
  )
}
