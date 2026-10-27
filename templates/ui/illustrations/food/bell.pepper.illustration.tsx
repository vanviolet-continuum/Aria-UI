import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BellPepperIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M113 60c-18-14-36 1-32 25l8 48c4 24 27 27 41 13 14 14 37 11 41-13l8-48c4-24-14-39-32-25-9-9-25-9-34 0Z"
        fill={c.surface}
      />
      <path
        d="M124 56c3-14-3-24-10-27l9-8c14 9 19 22 13 36m-23 4c-13 21-12 54 2 85m32-85c13 21 12 54-2 85M94 74c-4 9-4 19 0 32"
        stroke={c.line}
      />
      <path d="M118 58h24" stroke={c.line} />
    </Scene>
  )
}
