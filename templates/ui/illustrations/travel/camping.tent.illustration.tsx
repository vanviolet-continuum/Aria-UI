import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CampingTentIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M51 145c4-67 35-104 78-104 45 0 76 37 80 104H51Z" fill={c.surface} />
      <path d="M129 41c24 21 40 59 43 104h37c-4-67-35-104-80-104Z" fill={c.tint} stroke={c.line} />
      <path d="M75 145c3-42 20-71 49-89 29 18 46 47 49 89H75Z" stroke={c.line} />
      <path d="M99 145c1-30 9-52 25-69 15 17 24 39 25 69H99Z" fill={c.tint} />
      <path d="M124 76v69m-73 0-10 10m168-10 10 10M43 156h176m-111-8h32" stroke={c.line} />
    </Scene>
  )
}
