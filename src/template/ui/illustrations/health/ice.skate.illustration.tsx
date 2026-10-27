import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function IceSkateIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M84 34h48v65l39 13c23 8 28 23 14 25H69v-22l15-20V34Z" fill={c.surface} />
      <path
        d="M84 47h48M98 61l29-3M98 74l29-3M98 87l29-3m-25 17 27-9m-19 21 30-10M69 129h123"
        stroke={c.line}
      />
      <path
        d="M85 137v11m20-11v11m55-11v11m18-11v11M74 148h117c14 0 16-7 13-14m-127 21h113"
        stroke={c.line}
      />
      <path d="m69 148-9 8h30" stroke={c.line} />
    </Scene>
  )
}
