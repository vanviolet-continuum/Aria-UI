import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BasketballIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="130" cy="91" r="55" fill={c.surface} />
      <path
        d="M75 91h110m-55-55v110M91 52c37 17 48 54 26 92m52-92c-37 17-48 54-26 92"
        stroke={c.line}
      />
      <path d="M94 48c10-8 20-11 31-12" stroke={c.line} />
      <path d="M95 156h70" stroke={c.line} />
    </Scene>
  )
}
