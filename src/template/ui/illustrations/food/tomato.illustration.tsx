import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TomatoIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 65c-21-14-53-4-54 26-2 37 20 62 54 62s56-25 54-62c-1-30-33-40-54-26Z"
        fill={c.surface}
      />
      <path
        d="m130 71-30 11 14-19-15-9 25 2 8-25 7 26 25-6-14 14 15 17-35-11Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M93 88c-5 13-3 26 5 38m18 30h32" stroke={c.line} />
    </Scene>
  )
}
