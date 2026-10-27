import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function RollerSkateIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M80 42h50v59l41 14c22 7 27 21 12 24H66v-22l14-23V42Z" fill={c.surface} />
      <path
        d="M80 54h50m-35 10 29-3m-30 15 30-3m-30 15 30-3m-26 16 27-9m-18 21 29-10M66 132h123"
        stroke={c.line}
      />
      <path d="M77 139h100v9H77v-9Z" fill={c.tint} />
      <circle cx="89" cy="151" r="10" fill={c.surface} />
      <circle cx="164" cy="151" r="10" fill={c.surface} />
      <circle cx="89" cy="151" r="3" fill={c.tint} stroke={c.line} />
      <circle cx="164" cy="151" r="3" fill={c.tint} stroke={c.line} />
      <path d="m187 138 10 7" stroke={c.line} />
    </Scene>
  )
}
