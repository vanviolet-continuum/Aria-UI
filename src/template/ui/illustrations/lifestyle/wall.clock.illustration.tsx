import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WallClockIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="130" cy="89" r="56" fill={c.surface} />
      <circle cx="130" cy="89" r="46" fill={c.tint} stroke={c.line} />
      {Array.from({ length: 12 }, (_, i) => (
        <path key={i} d="M130 45v7" transform={`rotate(${i * 30} 130 89)`} stroke={c.line} />
      ))}
      <path d="M130 89V60m0 29 22 13" strokeWidth="2.5" />
      <circle cx="130" cy="89" r="4" fill={c.surface} />
      <path d="M96 156h68" stroke={c.line} />
    </Scene>
  )
}
