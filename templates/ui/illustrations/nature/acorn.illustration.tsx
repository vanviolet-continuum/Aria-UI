import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function AcornIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M99 83h61c5 27-5 48-31 62-24-14-35-35-30-62Z" fill={c.surface} />
      <path d="M90 85c-1-38 80-38 80 0H90Z" fill={c.tint} />
      <path
        d="M126 58V43l13-9m-33 33 11 15m1-19 13 19m0-19 13 19m1-16 11 16m-50 23c0 12 5 20 12 26"
        stroke={c.line}
      />
      <path
        d="M171 126c29-12 42-36 27-55-1 15-11 13-11 23-15-6-23 5-16 15-15 0-17 13 0 17Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m171 126 25-46m-25 46-9 16M83 156h94" stroke={c.line} />
    </Scene>
  )
}
