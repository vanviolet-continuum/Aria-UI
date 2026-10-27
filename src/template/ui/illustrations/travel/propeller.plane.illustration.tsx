import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PropellerPlaneIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M62 102h103c30 0 38 19 10 25H74l-21-15V81h14l9 21" fill={c.surface} />
      <path d="m106 102 15-29h19l-8 29m-28 24-23 19h18l36-19" fill={c.tint} stroke={c.line} />
      <path d="M119 78h15m-72 31h32m68-8V84h14v18" stroke={c.line} />
      <path d="M197 94v43m-6-21h12m-79 11v15m-10 0h20" stroke={c.line} />
      <circle cx="124" cy="144" r="8" fill={c.surface} stroke={c.line} />
      <path d="M55 155h156m-119-104h29m-13 9h30" stroke={c.line} />
    </Scene>
  )
}
