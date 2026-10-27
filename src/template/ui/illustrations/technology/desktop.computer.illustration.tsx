import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DesktopComputerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="48" y="37" width="118" height="86" rx="7" fill={c.surface} />
      <rect x="57" y="46" width="100" height="63" rx="3" fill={c.tint} stroke={c.line} />
      <path d="M95 123v21m23-21v21m-35 0h47m-55-82h34m-34 11h57m-57 11h40" stroke={c.line} />
      <rect x="177" y="49" width="35" height="102" rx="5" fill={c.surface} />
      <path d="M185 61h19m-19 10h19m-19 13h19m-19 8h19m-19 8h19" stroke={c.line} />
      <circle cx="195" cy="132" r="5" fill={c.tint} stroke={c.line} />
      <path d="M51 154h112m-103-6h94" stroke={c.line} />
    </Scene>
  )
}
