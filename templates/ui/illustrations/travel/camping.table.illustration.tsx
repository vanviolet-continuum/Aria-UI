import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CampingTableIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m66 73 113-8 29 34-151 11 9-37Z" fill={c.surface} />
      <path
        d="m83 72-6 36m25-38-6 37m25-38-6 37m25-38-6 36m25-38-6 36m25-38-6 36"
        stroke={c.line}
      />
      <path d="m58 109 149-11v8L58 117v-8Z" fill={c.tint} />
      <path
        d="m75 116 96 40m20-49L92 156m-17-40-10 40m126-49 10 49m-92-26 54-4"
        stroke={c.line}
        strokeWidth="2.5"
      />
      <path d="M114 44h27v21h-27V44Zm27 5h6c9 0 9 12-6 12" fill={c.surface} stroke={c.line} />
      <path d="M117 35c-5-5 4-8 0-14" stroke={c.line} />
    </Scene>
  )
}
