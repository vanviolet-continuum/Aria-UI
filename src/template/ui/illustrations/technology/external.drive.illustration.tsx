import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ExternalDriveIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="88" y="38" width="85" height="111" rx="12" fill={c.surface} />
      <rect x="98" y="48" width="65" height="77" rx="5" fill={c.tint} stroke={c.line} />
      <path
        d="M107 57h47m-47 10h47m-47 10h47m-47 10h47m-47 10h47m-47 10h47m-37 31h25"
        stroke={c.line}
      />
      <circle cx="157" cy="138" r="2" fill={c.accent} stroke="none" />
      <path d="M130 149c0 15-60 16-66-1-8-18 9-21 9-43" stroke={c.line} />
      <rect x="66" y="89" width="14" height="20" rx="3" fill={c.surface} stroke={c.line} />
    </Scene>
  )
}
