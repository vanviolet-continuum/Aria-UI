import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SpiceRackIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M55 62v86m150-86v86M51 98h158v8H51v-8Zm0 50h158v8H51v-8Z" fill={c.surface} />
      {[72, 112, 152].map((x) => (
        <g key={x}>
          <rect x={x} y="66" width="27" height="32" rx="4" fill={c.tint} stroke={c.line} />
          <path d={`M${x} 66v-8h27v8m-21 13h15m-15 9h15`} stroke={c.line} />
        </g>
      ))}
      {[72, 112, 152].map((x) => (
        <g key={x}>
          <rect x={x} y="116" width="27" height="32" rx="4" fill={c.surface} stroke={c.line} />
          <path d={`M${x} 116v-8h27v8m-21 13h15m-15 9h15`} stroke={c.line} />
        </g>
      ))}
      <path d="M70 42h120m-112 7h104" stroke={c.line} />
    </Scene>
  )
}
