import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PingPongIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(23 140 91)">
        <path d="M130 106h20v43c0 12-20 12-20 0v-43Z" fill={c.surface} />
        <ellipse cx="140" cy="72" rx="35" ry="43" fill={c.tint} />
        <path d="M108 91c17-11 46-11 64 0m-37 28v29m10-29v29" stroke={c.line} />
      </g>
      <circle cx="78" cy="136" r="17" fill={c.surface} />
      <path d="M70 128c3-3 7-4 11-3M53 156h56m59-9h24" stroke={c.line} />
    </Scene>
  )
}
