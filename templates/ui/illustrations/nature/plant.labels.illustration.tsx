import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PlantLabelsIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(-13 88 94)">
        <path d="M68 42h41v48H94v61l-6 8-6-8V90H68V42Z" fill={c.surface} />
        <path d="M78 56h20m-20 10h15m-15 10h20" stroke={c.line} />
      </g>
      <path d="M112 29h42v48h-15v72l-6 9-6-9V77h-15V29Z" fill={c.tint} />
      <path d="M123 43h20m-20 10h15m-15 10h20" stroke={c.line} />
      <g transform="rotate(13 178 100)">
        <path d="M158 53h41v48h-15v50l-6 8-6-8v-50h-14V53Z" fill={c.surface} />
        <path d="M169 67h19m-19 10h14m-14 10h19" stroke={c.line} />
      </g>
    </Scene>
  )
}
