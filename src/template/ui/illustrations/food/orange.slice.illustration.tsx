import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function OrangeSliceIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="130" cy="91" r="55" fill={c.surface} />
      <circle cx="130" cy="91" r="45" fill={c.tint} stroke={c.line} />
      {Array.from({ length: 8 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 45} 130 91)`}>
          <path d="M130 84V47" stroke={c.surface} strokeWidth="3" />
          <ellipse cx="138" cy="65" rx="2" ry="4" fill={c.surface} stroke="none" />
        </g>
      ))}
      <circle cx="130" cy="91" r="6" fill={c.surface} stroke={c.line} />
      <path d="M92 156h76" stroke={c.line} />
    </Scene>
  )
}
