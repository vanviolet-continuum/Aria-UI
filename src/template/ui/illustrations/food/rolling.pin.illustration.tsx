import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function RollingPinIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <ellipse cx="130" cy="128" rx="66" ry="24" fill={c.tint} stroke={c.line} />
      <path d="M83 127c19-15 64-15 87 0" stroke={c.line} />
      <g transform="rotate(-16 130 82)">
        <rect x="80" y="65" width="101" height="34" rx="10" fill={c.surface} />
        <path
          d="M80 74H57a8 8 0 0 0 0 16h23m101-16h22a8 8 0 0 1 0 16h-22m-89-20v25m77-25v25m-67-17h48"
          fill={c.tint}
          stroke={c.line}
        />
      </g>
      <path d="M65 153h132m-143-36h8m135 11h9m-112 28h8" stroke={c.line} />
    </Scene>
  )
}
