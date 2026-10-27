import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SwimFinsIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(-9 100 93)">
        <path d="M88 33h26l16 113c-20 13-44 13-63 0L88 33Z" fill={c.surface} />
        <path d="M91 42h20l4 38H85l6-38Z" fill={c.tint} stroke={c.line} />
        <path d="m85 92-7 45m22-45v52m15-52 5 45" stroke={c.line} />
      </g>
      <g transform="rotate(9 166 93)">
        <path d="M153 33h26l16 113c-20 13-44 13-63 0l21-113Z" fill={c.surface} />
        <path d="M156 42h20l4 38h-30l6-38Z" fill={c.tint} stroke={c.line} />
        <path d="m150 92-7 45m22-45v52m15-52 5 45" stroke={c.line} />
      </g>
    </Scene>
  )
}
