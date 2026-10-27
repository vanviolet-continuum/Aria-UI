import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function YarnSpoolsIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      {[
        { x: 89, y: 91, h: 53 },
        { x: 133, y: 62, h: 82 },
        { x: 176, y: 100, h: 44 },
      ].map(({ x, y, h }) => (
        <g key={x}>
          <path d={`M${x - 16} ${y}h32v${h}h-32V${y}Z`} fill={c.surface} />
          <ellipse cx={x} cy={y} rx="21" ry="6" fill={c.tint} />
          <ellipse cx={x} cy={y + h} rx="21" ry="6" fill={c.surface} />
          <path d={`M${x - 16} ${y + 11}h32m-32 8h32m-32 8h32m-32 8h32`} stroke={c.line} />
        </g>
      ))}
      <path d="M68 153h130m-65-97v-7m-5 0h10" stroke={c.line} />
    </Scene>
  )
}
