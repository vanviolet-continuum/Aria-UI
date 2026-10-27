import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function MemoryCardIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M93 31h67v112H83V43l10-12Z" fill={c.surface} />
      <path
        d="M94 43h10v20H94V43Zm16 0h10v20h-10V43Zm16 0h10v20h-10V43Zm16 0h10v20h-10V43Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M93 82h57v39H93V82Z" fill={c.tint} stroke={c.line} />
      <path d="M104 94h34m-34 10h23" stroke={c.line} />
      <path d="M163 95h26v60h-44v-42l18-18Z" fill={c.surface} />
      <path d="M160 111h19m-19 7h19m-24 13h24v14h-24v-14Z" fill={c.tint} stroke={c.line} />
    </Scene>
  )
}
