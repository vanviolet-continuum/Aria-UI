import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GardenForkIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M114 25h32v31h-32V25Z" fill={c.surface} />
      <path d="M122 33h16v15h-16V33Zm4 23h8v49h-8V56Z" fill={c.tint} stroke={c.line} />
      <path d="M105 105h50v13c0 7-5 12-12 12h-26c-7 0-12-5-12-12v-13Z" fill={c.surface} />
      <path d="M105 117v39m17-27v27m16-27v27m17-39v39" strokeWidth="3" />
      <path d="M64 151h28m76 0h29m-138-8h9m119-14h9" stroke={c.line} />
      <path d="M76 135c-9-12-4-19 3-20 4 9 3 15-3 20Z" fill={c.tint} stroke={c.line} />
    </Scene>
  )
}
