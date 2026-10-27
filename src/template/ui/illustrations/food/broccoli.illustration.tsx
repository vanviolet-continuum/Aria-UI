import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BroccoliIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m115 87 5 30-18 38h53l-14-38 10-30-19 9-17-9Z" fill={c.surface} />
      <path d="m130 146 2-45m-10 21-18-19m34 16 18-17" stroke={c.line} />
      <path
        d="M82 94c-25-5-24-31-4-36 0-23 27-31 41-14 18-23 48-13 49 9 23-3 38 21 21 37-14 14-33 10-42-2-12 17-33 16-42 2-7 6-17 7-23 4Z"
        fill={c.tint}
      />
      <path
        d="M85 71c-2-12 11-18 20-11m17-5c9-11 22-7 25 3m13 13c10-7 21-1 20 9m-60-1c7-7 18-6 23 2"
        stroke={c.line}
      />
    </Scene>
  )
}
