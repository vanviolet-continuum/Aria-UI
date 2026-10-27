import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function OnionIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M122 47h16c-2 15 6 25 26 35 42 27 23 71-34 71S54 109 96 82c20-10 28-20 26-35Z"
        fill={c.surface}
      />
      <path
        d="M122 47 112 27l11 7 7-18 7 18 11-7-10 20m-10 9c-6 27-39 36-31 64m40-64c6 27 39 36 31 64m-37-52c-17 31-17 61-1 84m-13 1-4 7m17-7v9m12-9 4 7"
        stroke={c.line}
      />
    </Scene>
  )
}
