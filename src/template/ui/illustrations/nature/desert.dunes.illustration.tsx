import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DesertDunesIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="163" cy="52" r="21" fill={c.tint} stroke={c.line} />
      <path d="M42 124c46-52 80-62 127-7l50 10v28H42v-31Z" fill={c.surface} />
      <path d="M42 142c53 9 93-66 177-43v56H42v-13Z" fill={c.tint} stroke={c.line} />
      <path
        d="M104 91c15 7 26 17 35 27m9-10c22-12 43-14 62-10m-86 45h48m-105 7h27"
        stroke={c.line}
      />
      <path d="M66 124V99c0-8 12-8 12 0v25m-12-6H55v-12m23 3h9V98" stroke={c.line} />
      <path d="M41 156h179" stroke={c.line} />
    </Scene>
  )
}
