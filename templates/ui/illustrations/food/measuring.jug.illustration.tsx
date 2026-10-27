import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function MeasuringJugIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M163 71h14c38 0 31 57-12 57m0-47h11c20 0 15 35-11 37"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M74 52h91v86a12 12 0 0 1-12 12H93a12 12 0 0 1-12-12V67l-7-15Z" fill={c.surface} />
      <path
        d="M83 103c27-8 50 7 80 0v34a10 10 0 0 1-10 10H93a10 10 0 0 1-10-10v-34Z"
        fill={c.tint}
        stroke="none"
      />
      <path
        d="M84 103c27-8 49 7 78 0m-52-36h22m-12 14h12m-22 14h22m-12 14h12m-22 14h22m-38-55v65"
        stroke={c.line}
      />
      <path d="M80 58h77" stroke={c.line} />
    </Scene>
  )
}
