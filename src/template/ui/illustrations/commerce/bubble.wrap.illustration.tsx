import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BubbleWrapIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M73 35h111v104l-16 18H73V35Z" fill={c.surface} />
      <path d="M168 157v-18h16m-101 8h77" stroke={c.line} />
      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          {[0, 1, 2, 3].map((col) => (
            <circle
              key={col}
              cx={89 + col * 25}
              cy={51 + row * 20}
              r="7"
              fill={c.tint}
              stroke={c.line}
            />
          ))}
        </g>
      ))}
      <path d="M62 77h-8m150 25h9" stroke={c.line} />
    </Scene>
  )
}
