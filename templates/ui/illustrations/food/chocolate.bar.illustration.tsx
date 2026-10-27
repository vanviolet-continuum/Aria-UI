import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ChocolateBarIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(13 130 90)">
        <path d="M88 25h84v127H88V25Z" fill={c.surface} />
        <path d="M97 34h66v90H97V34Z" fill={c.tint} stroke={c.line} />
        <path d="M119 34v90m22-90v90M97 56h66M97 79h66M97 102h66" stroke={c.line} />
        <path
          d="M85 100c12 6 18-9 30-2 12 8 18-7 30 0 10 6 18-5 30 1v58H85v-57Z"
          fill={c.surface}
        />
        <path d="M94 117h71m-61 12h51m-43 13h35" stroke={c.line} />
      </g>
    </Scene>
  )
}
