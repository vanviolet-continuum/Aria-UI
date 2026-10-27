import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TravelCompassIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M121 35V24a9 9 0 0 1 18 0v11" stroke={c.line} />
      <circle cx="130" cy="91" r="55" fill={c.surface} />
      <circle cx="130" cy="91" r="44" fill={c.tint} stroke={c.line} />
      <path
        d="M130 48v9m0 77v-9M87 91h9m77 0h-9m-64-30 6 6m48 48 6 6m-60 0 6-6m48-48 6-6"
        stroke={c.line}
      />
      <path d="m146 66-9 31-23 19 9-31 23-19Z" fill={c.surface} />
      <path d="m146 66-23 19 14 12 9-31Z" fill={c.tint} stroke={c.accent} />
      <circle cx="130" cy="91" r="4" fill={c.surface} />
      <path d="M104 155h52" stroke={c.line} />
    </Scene>
  )
}
