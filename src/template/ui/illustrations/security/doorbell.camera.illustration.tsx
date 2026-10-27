import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DoorbellCameraIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="102" y="27" width="57" height="129" rx="15" fill={c.surface} />
      <path d="M110 36h41v47h-41V36Z" fill={c.tint} stroke={c.line} />
      <circle cx="130.5" cy="59.5" r="12" fill={c.surface} />
      <circle cx="130.5" cy="59.5" r="6" stroke={c.line} />
      <circle cx="130.5" cy="117" r="17" fill={c.tint} stroke={c.line} />
      <path
        d="M123 123h15m-13-3v-7c0-10 11-10 11 0v7m-10 14h10M79 51c-7 10-7 23 0 33m102-33c7 10 7 23 0 33"
        stroke={c.line}
      />
    </Scene>
  )
}
