import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ToasterIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M79 72V51c-9-18 16-30 30-21 14-9 39 3 30 21v21m-48 0V54c-7-12 8-18 18-14 10-4 25 2 18 14v18"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M65 69h111c12 0 20 10 20 23v50H65V69Z" fill={c.surface} />
      <path d="M65 83h131m-119 7v43m10 0h54" stroke={c.line} />
      <path d="M172 91v24m-7-18h14" stroke={c.line} strokeWidth="3" />
      <circle cx="172" cy="129" r="7" fill={c.tint} />
      <path d="m172 129 3-3M68 142h125v9H68v-9Z" fill={c.tint} stroke={c.line} />
    </Scene>
  )
}
