import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CoatRackIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 30v111m0-70L99 44m31 45 32-26m-32 46L99 86m31-37 23-17m-23 109-27 16m27-16 27 16m-27-16v16"
        stroke={c.line}
        strokeWidth="3"
      />
      <circle cx="130" cy="27" r="5" fill={c.surface} />
      <circle cx="96" cy="41" r="5" fill={c.surface} />
      <circle cx="165" cy="60" r="5" fill={c.surface} />
      <circle cx="96" cy="83" r="5" fill={c.surface} />
      <circle cx="156" cy="29" r="5" fill={c.surface} />
      <path d="M90 157h80m-15-65h19m-86 29h17" stroke={c.line} />
    </Scene>
  )
}
