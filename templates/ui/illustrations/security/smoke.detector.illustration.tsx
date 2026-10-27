import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SmokeDetectorIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M75 92h110v13c0 48-110 48-110 0V92Z" fill={c.surface} />
      <ellipse cx="130" cy="92" rx="55" ry="39" fill={c.surface} />
      <ellipse cx="130" cy="92" rx="43" ry="29" fill={c.tint} stroke={c.line} />
      <ellipse cx="130" cy="92" rx="17" ry="12" fill={c.surface} stroke={c.line} />
      <path
        d="M103 73h54m-64 10h17m40 0h17m-75 18h17m42 0h17m-66 11h56m-33-23h10m-46 51c22 12 60 12 82 0M82 38l-7-8m104 8 7-8"
        stroke={c.line}
      />
      <circle cx="156" cy="74" r="2" fill={c.accent} stroke="none" />
    </Scene>
  )
}
