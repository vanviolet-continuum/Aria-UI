import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BirdhouseIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M89 75h83v65H89V75Z" fill={c.surface} />
      <path d="m77 76 53-44 54 44-8 9-46-37-45 37-8-9Z" fill={c.tint} />
      <circle cx="130" cy="93" r="15" fill={c.tint} />
      <path d="M130 117v9m-8 0h16m-48 14h81m-48 0v17h14v-17" stroke={c.line} />
      <path d="M130 33V17m-33 68v43m66-43v43M63 151h32m69 0h35" stroke={c.line} />
      <path d="M58 137c-7-12-1-19 7-18 2 10-1 15-7 18Z" fill={c.tint} stroke={c.line} />
    </Scene>
  )
}
