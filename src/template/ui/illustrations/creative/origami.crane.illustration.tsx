import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function OrigamiCraneIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="m47 81 58 17 31-61 13 59 27 15 28-45-8 60-51 24-39-23-29-6-30-40Z"
        fill={c.surface}
      />
      <path
        d="m105 98 31-61-6 77-24 13m24-13 19-18 27 15-31 39-15-36m-53 7 28-23 25 16m66 12-20-15"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m196 126 20-5-16-5m-94 11 3 18 21-31" stroke={c.line} />
      <path d="M78 157h111" stroke={c.line} />
    </Scene>
  )
}
