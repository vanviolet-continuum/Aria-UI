import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HarmonicaIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m68 68 127-1 12 22H54l14-21Z" fill={c.surface} />
      <rect x="54" y="89" width="153" height="41" rx="5" fill={c.surface} />
      <path d="M55 99h151m-151 22h151M76 77h103" stroke={c.line} />
      {Array.from({ length: 10 }, (_, i) => (
        <rect
          key={i}
          x={65 + i * 13}
          y="103"
          width="8"
          height="12"
          rx="1"
          fill={c.tint}
          stroke={c.line}
        />
      ))}
      <circle cx="66" cy="94" r="1" fill={c.accent} stroke="none" />
      <circle cx="195" cy="94" r="1" fill={c.accent} stroke="none" />
      <path d="M70 141h120m-103 9h86" stroke={c.line} />
    </Scene>
  )
}
