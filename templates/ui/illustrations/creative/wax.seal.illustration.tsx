import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WaxSealIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m60 66 114-20 27 92-114 20-27-92Z" fill={c.surface} />
      <path d="m60 66 69 34 45-54m-87 112 30-58m84 38-52-43" stroke={c.line} />
      <path
        d="M130 77c12-10 29 0 27 12 15 9 8 30-6 31-6 16-28 14-34 0-16-3-22-22-8-31-1-12 10-21 21-12Z"
        fill={c.tint}
      />
      <circle cx="132" cy="102" r="19" fill={c.surface} stroke={c.line} />
      <path
        d="M128 114V93m0 12c-9-1-12-8-9-13 7 1 10 6 9 13Zm0-7c1-9 8-13 14-10 0 7-5 11-14 10Z"
        fill={c.tint}
        stroke={c.line}
      />
    </Scene>
  )
}
