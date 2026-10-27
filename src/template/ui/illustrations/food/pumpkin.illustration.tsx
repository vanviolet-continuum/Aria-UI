import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PumpkinIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 65c-26-18-65-3-65 34 0 43 34 63 65 51 31 12 65-8 65-51 0-37-39-52-65-34Z"
        fill={c.surface}
      />
      <path
        d="M130 66c-20-24-43-1-43 35s22 62 43 49c21 13 43-13 43-49s-23-59-43-35Z"
        stroke={c.line}
      />
      <path
        d="M130 64c-11 20-11 64 0 86m-3-86c5-17-1-25-12-32l9-10c17 9 23 24 15 41"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M106 157h49" stroke={c.line} />
    </Scene>
  )
}
