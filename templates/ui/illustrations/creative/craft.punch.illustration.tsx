import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CraftPunchIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M79 90h107v45H79V90Z" fill={c.surface} />
      <path d="M73 135h119v18H73v-18Z" fill={c.tint} />
      <path d="M94 90V76h65v14" stroke={c.line} />
      <path d="M79 76c-6-27 11-39 36-34l70 16v20H79V76Z" fill={c.surface} />
      <path d="m100 51 66 15m-68 36h66m-66 9h66" stroke={c.line} />
      <path d="M52 116h70v16H52v-16Z" fill={c.surface} stroke={c.line} />
      <circle cx="69" cy="124" r="4" fill={c.tint} stroke={c.line} />
      <circle cx="98" cy="124" r="4" fill={c.tint} stroke={c.line} />
      <path d="M87 143h90" stroke={c.line} />
    </Scene>
  )
}
