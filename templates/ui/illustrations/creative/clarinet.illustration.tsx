import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ClarinetIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m125 23 10 2-2 24h-10l2-26Zm-3 26h13v78l15 26h-43l15-26V49Z" fill={c.surface} />
      <path d="M122 59h13m-13 46h13m-13 18h13m-19 18h25m-29 8h34" stroke={c.line} />
      {[70, 84, 98, 112].map((y) => (
        <g key={y}>
          <circle cx="143" cy={y} r="4" fill={c.tint} stroke={c.line} />
          <path d={`M135 ${y}h4`} stroke={c.line} />
        </g>
      ))}
      <path d="M127 68v45m17-35v24M83 151h13m57 0h25" stroke={c.line} />
    </Scene>
  )
}
