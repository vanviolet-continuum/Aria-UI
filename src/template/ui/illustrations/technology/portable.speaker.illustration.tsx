import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PortableSpeakerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="70" y="45" width="120" height="104" rx="21" fill={c.surface} />
      <path d="M80 58h100v76H80V58Z" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="97" r="27" fill={c.surface} stroke={c.line} />
      <circle cx="130" cy="97" r="17" stroke={c.line} />
      <circle cx="130" cy="97" r="6" fill={c.tint} stroke={c.line} />
      <path
        d="M98 45V30h64v15m-52 94h40m-57-64v5m74-5v5m-74 34v5m74-5v5m-67 30v6m60-6v6"
        stroke={c.line}
      />
      <path d="M123 38h14m-7-5v10" stroke={c.line} />
    </Scene>
  )
}
