import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TambourineIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="130" cy="91" r="54" fill={c.surface} />
      <circle cx="130" cy="91" r="42" fill={c.tint} stroke={c.line} />
      {Array.from({ length: 8 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 45} 130 91)`}>
          <rect x="120" y="37" width="20" height="13" rx="3" fill={c.surface} stroke={c.line} />
          <path d="M123 43h14" stroke={c.line} />
        </g>
      ))}
      <path d="M101 77c4-7 11-12 20-14M93 154h74" stroke={c.line} />
    </Scene>
  )
}
