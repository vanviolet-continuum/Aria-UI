import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ShuttlecockIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="m110 124-31-66c-4-11 10-18 17-9 0-15 17-18 23-6 6-14 22-14 28 0 6-12 23-9 23 6 7-9 21-2 17 9l-36 66h-41Z"
        fill={c.surface}
      />
      <path
        d="m96 49 23 75m0-81 6 81m22-81-13 81m36-75-26 75m-51-35h76m-68 17h58m-64-35h75"
        stroke={c.line}
      />
      <path d="M110 124h41v11c0 27-41 27-41 0v-11Z" fill={c.tint} />
      <path d="M111 132h39m-35 16h30" stroke={c.line} />
    </Scene>
  )
}
