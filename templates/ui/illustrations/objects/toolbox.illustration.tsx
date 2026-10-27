import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ToolboxIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M66 69h128l11 25v57H55V94l11-25Z" fill={c.surface} />
      <path d="M55 94h150m-131-25 7-17h98l8 17m-72-17V35h30v17" fill={c.tint} stroke={c.line} />
      <path d="M102 69v82m56-82v82" stroke={c.line} />
      <rect x="92" y="85" width="19" height="22" rx="3" fill={c.surface} />
      <rect x="149" y="85" width="19" height="22" rx="3" fill={c.surface} />
      <path d="M70 136h17m87 0h17m-74 0h25" stroke={c.line} />
    </Scene>
  )
}
