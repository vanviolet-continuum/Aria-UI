import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GarlicIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M115 33h29l-3 31c32 17 45 34 38 57-9 29-31 35-49 29-18 6-40 0-49-29-7-23 6-40 38-57l-4-31Z"
        fill={c.surface}
      />
      <path
        d="M122 40h15m-16 10h15m-17 14c-28 24-29 57-9 84m20-83c-18 27-18 58 0 85m9-86c28 24 29 57 9 84m-18 2v9m-7-8-4 7m17-7 4 7"
        stroke={c.line}
      />
    </Scene>
  )
}
