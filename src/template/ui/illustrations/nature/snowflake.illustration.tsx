import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SnowflakeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 130 90)`}>
          <path d="M130 90V32m0 28-15-12m15 12 15-12m-15 29-23-15m23 15 23-15" stroke={c.line} />
          <path d="m130 26 4 6-4 6-4-6 4-6Z" fill={c.tint} />
        </g>
      ))}
      <path d="m130 77 11 6v14l-11 6-11-6V83l11-6Z" fill={c.surface} />
      <circle cx="130" cy="90" r="4" fill={c.tint} stroke={c.line} />
    </Scene>
  )
}
