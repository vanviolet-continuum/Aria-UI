import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ObservatoryIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M76 91h109v60H76V91Z" fill={c.surface} />
      <path d="M70 91c0-73 121-73 121 0H70Z" fill={c.tint} />
      <path
        d="M137 36c-24 14-33 34-33 55h25c-1-23 5-40 18-52m-73 57h113M91 113h19v24H91v-24Zm59 0h19v24h-19v-24Zm-30 38v-29h20v29"
        stroke={c.line}
      />
      <path d="m120 69 36-29 7 8-36 29-7-8Z" fill={c.surface} />
      <path d="m153 37 13 15m-92 100h113m9-104v9m-4-4h8M78 39v8m-4-4h8" stroke={c.line} />
    </Scene>
  )
}
