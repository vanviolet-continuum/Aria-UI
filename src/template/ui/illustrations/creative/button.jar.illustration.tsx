import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ButtonJarIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M95 54h70v20c13 7 17 14 17 29v39c0 19-104 19-104 0v-39c0-15 4-22 17-29V54Z"
        fill={c.surface}
      />
      <rect x="90" y="39" width="80" height="17" rx="4" fill={c.tint} />
      <path d="M97 44v7m11-7v7m11-7v7m11-7v7m11-7v7m11-7v7m11-7v7M88 88v42" stroke={c.line} />
      {[
        { x: 111, y: 111, r: 15 },
        { x: 151, y: 125, r: 17 },
        { x: 114, y: 140, r: 12 },
      ].map(({ x, y, r }) => (
        <g key={y}>
          <circle cx={x} cy={y} r={r} fill={c.tint} stroke={c.line} />
          <path d={`M${x - 4} ${y - 3}h1m6 0h1m-8 6h1m6 0h1`} stroke={c.line} />
        </g>
      ))}
    </Scene>
  )
}
