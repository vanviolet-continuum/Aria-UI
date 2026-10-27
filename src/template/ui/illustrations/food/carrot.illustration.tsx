import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CarrotIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(20 130 95)">
        <path d="M108 69c1-16 43-16 44 0 0 34-12 66-22 89-10-23-22-55-22-89Z" fill={c.surface} />
        <path
          d="M130 61c-23-13-30-29-21-36 13 2 21 17 21 36Zm0 0c-6-26 2-40 13-38 7 13 0 29-13 38Zm0 0c13-24 28-31 35-22-3 12-18 21-35 22Z"
          fill={c.tint}
          stroke={c.line}
        />
        <path d="M112 83h17m7 17h11m-29 15h14m-7 19h10" stroke={c.line} />
      </g>
    </Scene>
  )
}
