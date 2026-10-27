import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TrainStationIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M56 75h148v65H56V75Z" fill={c.surface} />
      <path d="m47 76 24-29h118l24 29H47Z" fill={c.tint} />
      <path
        d="M105 48V29h50v19m-37 93V91h25v50M68 91h26v31H68V91Zm98 0h26v31h-26V91Z"
        stroke={c.line}
      />
      <circle cx="130" cy="62" r="13" fill={c.surface} />
      <path
        d="M130 54v8l6 4M47 141h166M54 152h152m-133-7-6 13m25-13-3 13m45-13v13m38-13 4 13m16-13 6 13"
        stroke={c.line}
      />
    </Scene>
  )
}
