import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function OvenMittIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M99 126 78 91c-9-15 5-24 16-12l8 10V47c0-28 57-28 57 0v46l-13 33H99Z"
        fill={c.tint}
      />
      <path d="M96 126h54v27H96v-27Z" fill={c.surface} />
      <path
        d="M105 126V48m13 78V35m13 91V34m13 81V40M103 57h55m-55 18h55m-58 18h58m-47 18h42m-48 24h36m-36 9h36"
        stroke={c.line}
      />
      <path d="M150 143c21 0 21 17 5 17" stroke={c.line} />
    </Scene>
  )
}
