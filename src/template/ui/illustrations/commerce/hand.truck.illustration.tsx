import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HandTruckIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(-12 132 92)">
        <path d="M90 137V36c0-11 15-11 15 0v101m-15 0h69v11H90v-11Z" fill={c.surface} />
        <path d="M105 62h57v70h-57V62Z" fill={c.tint} stroke={c.line} />
        <path d="M126 62h14v23h-14V62Zm-10 39h35m-35 11h25m-49-62h11" stroke={c.line} />
        <circle cx="106" cy="148" r="12" fill={c.surface} />
        <circle cx="106" cy="148" r="4" fill={c.tint} stroke={c.line} />
      </g>
      <path d="M66 157h124" stroke={c.line} />
    </Scene>
  )
}
