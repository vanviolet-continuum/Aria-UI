import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WheelbarrowIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m58 74 110 8-19 41H88L58 74Z" fill={c.surface} />
      <path d="m64 82 98 7m-68 24h46" stroke={c.line} />
      <path
        d="m166 86 31-19 13 3m-61 53 19 31m-80-31-10 23m19-23 36 25"
        stroke={c.line}
        strokeWidth="3"
      />
      <circle cx="135" cy="143" r="17" fill={c.tint} />
      <circle cx="135" cy="143" r="7" fill={c.surface} stroke={c.line} />
      <path
        d="M87 75c2-19 25-23 37-8 9-10 28-2 26 13m-39-15-7-14m15 16 9-14"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M55 156h55m58 0h41" stroke={c.line} />
    </Scene>
  )
}
