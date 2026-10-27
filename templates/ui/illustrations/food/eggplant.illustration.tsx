import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function EggplantIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M143 55c-24 7-25 23-47 39-42 30-8 80 35 54 23-14 26-40 27-65l-15-28Z"
        fill={c.surface}
      />
      <path d="m143 55-19 7 5 15 16-3 4 20 13-11 7 9 8-22-34-15Z" fill={c.tint} stroke={c.line} />
      <path d="M160 60c-3-20 3-27 14-31m-60 69c-16 12-24 26-17 35M93 157h73" stroke={c.line} />
    </Scene>
  )
}
