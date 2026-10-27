import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CampingStoveIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M91 87h77l-7 21H98l-7-21Z" fill={c.surface} />
      <path d="M100 106h61v31h-61v-31Z" fill={c.tint} />
      <path d="m108 138-17 18m61-18 17 18m-39-18v18" stroke={c.line} strokeWidth="3" />
      <path d="M90 87H74m95 0h15M111 87l-5-12m42 12 5-12" stroke={c.line} />
      <path d="M126 75c-17-13-6-25 2-34-1 14 18 21 6 34h-8Z" fill={c.tint} stroke={c.accent} />
      <path d="M161 121h14c21 0 20 22 35 22m-5 0h13v13h-13v-13m-95-25h17" stroke={c.line} />
      <circle cx="141" cy="122" r="5" fill={c.surface} stroke={c.line} />
    </Scene>
  )
}
