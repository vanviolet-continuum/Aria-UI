import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HikingPolesIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(-15 108 95)">
        <rect x="101" y="28" width="14" height="40" rx="5" fill={c.surface} />
        <path
          d="M108 68v86m-12-20h24m-18-94h12m-12 9h12m-12 9h12m14-30c20-3 21 35 0 37"
          stroke={c.line}
        />
      </g>
      <g transform="rotate(15 153 95)">
        <rect x="146" y="28" width="14" height="40" rx="5" fill={c.tint} />
        <path
          d="M153 68v86m-12-20h24m-18-94h12m-12 9h12m-12 9h12m-15-30c-20-3-21 35 0 37"
          stroke={c.line}
        />
      </g>
      <path d="M70 157h120" stroke={c.line} />
    </Scene>
  )
}
