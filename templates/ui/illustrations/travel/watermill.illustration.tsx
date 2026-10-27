import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WatermillIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M119 72h78v72h-78V72Z" fill={c.surface} />
      <path d="m109 73 49-35 49 35h-98Z" fill={c.tint} />
      <path d="M147 144v-34h25v34m-38-60h17v17h-17V84Zm36 0h16v17h-16V84Z" stroke={c.line} />
      <circle cx="97" cy="116" r="35" fill={c.surface} />
      <circle cx="97" cy="116" r="25" stroke={c.line} />
      <circle cx="97" cy="116" r="5" fill={c.tint} />
      {[0, 45, 90, 135].map((angle) => (
        <path key={angle} d="M97 82v68" transform={`rotate(${angle} 97 116)`} stroke={c.line} />
      ))}
      <path d="M48 153h61m17 2h35m14-4h38" stroke={c.line} />
    </Scene>
  )
}
