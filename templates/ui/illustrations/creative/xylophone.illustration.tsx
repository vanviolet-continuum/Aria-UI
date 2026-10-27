import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function XylophoneIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m99 43-20 110m82-110 20 110" stroke={c.line} strokeWidth="4" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect
            x={93 - i * 6}
            y={40 + i * 19}
            width={74 + i * 12}
            height="14"
            rx="4"
            fill={i % 2 ? c.surface : c.tint}
          />
          <circle cx={101 - i * 6} cy={47 + i * 19} r="1.5" fill={c.line} stroke="none" />
          <circle cx={159 + i * 6} cy={47 + i * 19} r="1.5" fill={c.line} stroke="none" />
        </g>
      ))}
      <path d="m50 74 30 47m128-48-28 47" stroke={c.line} />
      <circle cx="47" cy="69" r="7" fill={c.surface} />
      <circle cx="211" cy="68" r="7" fill={c.surface} />
    </Scene>
  )
}
