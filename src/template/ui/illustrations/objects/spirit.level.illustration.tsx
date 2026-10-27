import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SpiritLevelIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(-16 130 91)">
        <rect x="49" y="67" width="162" height="49" rx="6" fill={c.surface} />
        <rect x="80" y="79" width="43" height="25" rx="8" fill={c.tint} stroke={c.line} />
        <rect x="150" y="77" width="24" height="29" rx="8" fill={c.tint} stroke={c.line} />
        <path d="M101 80v23m-8-23v23m8-11h13m37-1h22m-6-9v18M58 69v45m144-45v45" stroke={c.line} />
        <ellipse cx="103" cy="91.5" rx="5" ry="8" fill={c.surface} stroke={c.line} />
      </g>
      <path d="M69 150h121m-99 9h79" stroke={c.line} />
    </Scene>
  )
}
