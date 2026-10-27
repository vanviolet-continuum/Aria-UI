import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SteppingStonesIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M89 153c-12-32-8-46 17-64s30-35 17-59m53 123c-15-27-29-44-18-63 12-24 13-42-2-64"
        stroke={c.line}
      />
      <path
        d="M133 37c-5-9 19-14 24-6 6 11-18 16-24 6Zm-17 25c-14-9 11-19 22-15 14 7-7 22-22 15Zm7 31c-17-6-9-22 10-23 25 0 18 23-10 23Zm-22 32c-28-5-12-26 12-24 28 2 18 28-12 24Zm21 30c-29-9-10-28 17-25 33 4 20 33-17 25Z"
        fill={c.surface}
      />
      <path d="m69 105-4-11m6 17 8-8m103-33 5-10m-7 16-5-9m15 74 4-9m-106 9-3-7" stroke={c.line} />
    </Scene>
  )
}
