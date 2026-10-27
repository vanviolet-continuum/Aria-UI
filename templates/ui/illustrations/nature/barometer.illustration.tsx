import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BarometerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M121 36V25c0-12 18-12 18 0v11" stroke={c.line} />
      <circle cx="130" cy="91" r="55" fill={c.surface} />
      <circle cx="130" cy="91" r="45" fill={c.tint} stroke={c.line} />
      {Array.from({ length: 12 }, (_, i) => (
        <path key={i} d="M130 48v7" transform={`rotate(${i * 30} 130 91)`} stroke={c.line} />
      ))}
      <path d="M130 91 151 66m-21 25-8 12" strokeWidth="2.5" />
      <circle cx="130" cy="91" r="5" fill={c.surface} />
      <path d="M115 116h30m-24 9h18M106 156h48" stroke={c.line} />
    </Scene>
  )
}
