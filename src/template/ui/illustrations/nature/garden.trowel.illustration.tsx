import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GardenTrowelIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(23 128 93)">
        <path d="M112 31h32v38h-32V31Z" fill={c.surface} />
        <path d="M119 38h18v22h-18V38Z" fill={c.tint} stroke={c.line} />
        <path
          d="M125 69v25h6V69m-22 26c4-12 34-12 38 0 8 26-5 48-19 61-14-13-27-35-19-61Z"
          fill={c.tint}
        />
        <path d="M128 96v45m-14-44c-2 10-1 19 3 28" stroke={c.line} />
      </g>
      <path d="M57 150h61m53 0h31m-8-7h8m-123-20h7" stroke={c.line} />
      <path d="M64 142c-9-13-3-20 5-20 3 10 1 15-5 20Z" fill={c.tint} stroke={c.line} />
    </Scene>
  )
}
