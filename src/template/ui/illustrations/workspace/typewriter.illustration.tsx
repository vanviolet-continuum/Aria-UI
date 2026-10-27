import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TypewriterIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M91 74V27h79v47" fill={c.surface} />
      <path d="M103 42h55m-55 11h37m-37 11h49" stroke={c.line} />
      <path d="M71 73h119v22l16 42v17H55v-17l16-42V73Z" fill={c.surface} />
      <path d="M66 136h128l-12-30H79l-13 30Z" fill={c.tint} stroke={c.line} />
      <path d="M71 83h119m-116 12h112m-69 51h29M62 73H50v19" stroke={c.line} />
      {[0, 1].map((row) => (
        <g key={row}>
          {Array.from({ length: 8 }, (_, i) => (
            <circle
              key={i}
              cx={85 + i * 13}
              cy={114 + row * 13}
              r="3"
              fill={c.surface}
              stroke={c.line}
            />
          ))}
        </g>
      ))}
    </Scene>
  )
}
