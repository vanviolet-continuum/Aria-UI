import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function StickyNotesIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M71 55h110v98H71V55Z" fill={c.tint} transform="rotate(-9 126 104)" stroke={c.line} />
      <path d="M83 39h105v100l-15 15H83V39Z" fill={c.surface} />
      <path
        d="M173 154v-15h15m-105-86h105M98 76h74m-74 13h51m-51 13h74m-74 13h40m-39 23h59"
        stroke={c.line}
      />
      <path d="M93 145h65" stroke={c.line} />
    </Scene>
  )
}
