import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function AppleIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 66c-14-18-47-13-49 15-3 34 17 69 49 69s52-35 49-69c-2-28-35-33-49-15Z"
        fill={c.surface}
      />
      <path
        d="M130 66c-2-21 4-31 14-39m-9 20c-21 3-31-7-28-20 17 0 27 8 28 20Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M96 80c-8 13-4 33 5 44m21-59h15m-27 88h40" stroke={c.line} />
    </Scene>
  )
}
