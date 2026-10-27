import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CarabinerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(20 130 91)">
        <path
          d="M101 55c0-37 58-37 58 0v62c0 51-70 51-70 0V85h13v32c0 34 44 34 44 0V55c0-20-32-20-32 0v26h-13V55Z"
          fill={c.surface}
        />
        <path d="M95 77h13v47H95V77Z" fill={c.tint} />
        <path d="M96 85h11m-11 8h11m-11 8h11m-11 8h11m7-74c8-7 18-7 24 0" stroke={c.line} />
      </g>
      <path d="M65 149h24m86 0h23m-3-66h10m-143 4h9" stroke={c.line} />
    </Scene>
  )
}
