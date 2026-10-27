import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PushPinsIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(22 105 93)">
        <path d="M90 52h32v17H90V52Zm6 17h20v31H96V69Zm-9 31h38v14H87v-14Z" fill={c.surface} />
        <path d="M105 114v41m-9-96h21m-28 48h33" stroke={c.line} />
      </g>
      <g transform="rotate(-20 166 113)">
        <path d="M154 79h25v13h-25V79Zm5 13h15v25h-15V92Zm-8 25h31v11h-31v-11Z" fill={c.tint} />
        <path d="M166 128v30m-10-74h21m-24 39h27" stroke={c.line} />
      </g>
    </Scene>
  )
}
