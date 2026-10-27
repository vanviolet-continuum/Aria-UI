import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HairDryerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M87 54h61c37 0 37 49 0 49H87V54Z" fill={c.surface} />
      <path d="M87 59 54 66v24l33 8V59Z" fill={c.tint} />
      <path d="m111 103 16 41c5 14 22 7 17-7l-12-34h-21Z" fill={c.surface} />
      <circle cx="148" cy="78.5" r="17" fill={c.tint} stroke={c.line} />
      <path
        d="M138 69h20m-23 9h26m-23 9h20m-38 30 11-4m-1 36c1 15 59 15 59 0m-135-78H40m14 13H37"
        stroke={c.line}
      />
    </Scene>
  )
}
