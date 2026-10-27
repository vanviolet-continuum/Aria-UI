import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function NasStorageIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="80" y="32" width="100" height="120" rx="9" fill={c.surface} />
      <rect x="91" y="45" width="28" height="88" rx="4" fill={c.tint} stroke={c.line} />
      <rect x="127" y="45" width="28" height="88" rx="4" fill={c.tint} stroke={c.line} />
      <path
        d="M98 55h14m-14 8h14m22-8h14m-14 8h14m-47 49v12h12v-12m24 0v12h12v-12"
        stroke={c.line}
      />
      <circle cx="166" cy="57" r="3" fill={c.accent} stroke="none" />
      <path d="M162 79h8m-8 9h8m-8 9h8m-69 45h57m-59 10v5m66-5v5" stroke={c.line} />
    </Scene>
  )
}
