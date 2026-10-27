import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function StapleRemoverIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(18 130 96)">
        <path d="M94 64c25-20 47-20 72 0l-8 44h-56l-8-44Z" fill={c.surface} />
        <path d="M104 64c18-11 34-11 52 0m-51 10h50" stroke={c.line} />
        <path d="M102 108h21v37l-21-13v-24Zm35 0h21v24l-21 13v-37Z" fill={c.tint} stroke={c.line} />
        <path d="m109 109 3 15 11 9m28-24-3 15-11 9m-21-42h28" stroke={c.line} />
      </g>
      <path d="M80 155h100" stroke={c.line} />
    </Scene>
  )
}
