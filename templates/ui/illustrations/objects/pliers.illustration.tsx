import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PliersIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M112 79 99 44l12-20 8 36 11 15 11-15 8-36 12 20-13 35-18 21-18-21Z"
        fill={c.surface}
      />
      <circle cx="130" cy="90" r="11" fill={c.tint} />
      <path
        d="M122 98c-12 17-18 34-18 52 0 10-16 10-16 0 0-25 8-45 24-66m26 14c12 17 18 34 18 52 0 10 16 10 16 0 0-25-8-45-24-66"
        fill={c.surface}
      />
      <path
        d="M95 127h13m-13 11h11m48-11h13m-11 11h11m-50-91 7-3m19 3-7-3m-10 46h8"
        stroke={c.line}
      />
    </Scene>
  )
}
