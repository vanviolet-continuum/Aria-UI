import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function UsbDriveIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(24 130 90)">
        <path d="M114 31h32v35h-32V31Z" fill={c.surface} />
        <path d="M120 40h7v9h-7v-9Zm14 0h7v9h-7v-9Z" fill={c.tint} stroke={c.line} />
        <rect x="106" y="65" width="48" height="87" rx="12" fill={c.tint} />
        <path d="M114 76h32m-32 64h32m-19-53v33m0-22 10-8m-10 20-9-8" stroke={c.line} />
        <circle cx="127" cy="123" r="3" fill={c.surface} stroke={c.line} />
        <path d="M146 151c16 14 27-1 18-10" stroke={c.line} />
      </g>
      <path d="M65 150h34m66-110h18" stroke={c.line} />
    </Scene>
  )
}
