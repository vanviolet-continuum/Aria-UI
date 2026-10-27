import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HammerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(18 132 89)">
        <path d="M122 61h17v88c0 11-17 11-17 0V61Z" fill={c.surface} />
        <path d="M122 104h17v44c0 8-17 8-17 0v-44Z" fill={c.tint} stroke={c.line} />
        <path d="M98 36h61v31h-61V36Zm61 6h17v19h-17m-61-22-25 6-8 24 23-14h10" fill={c.surface} />
        <path d="m73 58 13-9m38 64h13m-13 10h13m-13 10h13m-13 10h13m-24-99v15" stroke={c.line} />
      </g>
    </Scene>
  )
}
