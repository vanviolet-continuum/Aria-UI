import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function MechanicalKeyboardIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M130 72V53c0-14 28-12 28-26" stroke={c.line} />
      <rect x="152" y="21" width="12" height="9" rx="3" fill={c.surface} stroke={c.line} />
      <rect x="44" y="72" width="172" height="83" rx="10" fill={c.surface} />
      {[0, 1, 2].map((row) => (
        <g key={row} fill={row === 0 ? c.tint : c.surface} stroke={c.line}>
          {Array.from({ length: 10 }, (_, column) => (
            <rect
              key={column}
              x={56 + column * 15}
              y={83 + row * 15}
              width="12"
              height="10"
              rx="2"
            />
          ))}
        </g>
      ))}
      <rect x="56" y="130" width="32" height="11" rx="3" fill={c.tint} stroke={c.line} />
      <rect x="96" y="130" width="65" height="11" rx="3" fill={c.tint} stroke={c.line} />
      <rect x="169" y="130" width="34" height="11" rx="3" fill={c.surface} stroke={c.line} />
      <path d="M62 87h3m14 0h3m12 0h3m-41 63h134" stroke={c.line} />
      <circle cx="201" cy="77" r="1.5" fill={c.accent} stroke="none" />
    </StillLifeScene>
  )
}
