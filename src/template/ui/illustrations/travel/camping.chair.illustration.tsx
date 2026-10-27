import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CampingChairIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M84 41h93l-10 58H94L84 41Z" fill={c.surface} />
      <path d="M94 99h73l19 24H74l20-24Z" fill={c.tint} />
      <path
        d="M88 42 74 123l111 34M173 42l13 81L75 157m14-58-23-3m105 3 23-3M64 96h29m74 0h29"
        stroke={c.line}
        strokeWidth="2.5"
      />
      <path d="M94 51h73m-65 59h56m-77 14h100m-51-71v37" stroke={c.line} />
      <path d="M60 157h140" stroke={c.line} />
    </Scene>
  )
}
