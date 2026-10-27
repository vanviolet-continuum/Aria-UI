import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function LavenderIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m130 151-23-83m23 83V51m0 100 25-89" stroke={c.line} />
      {[
        { x: 106, y: 52, a: -14 },
        { x: 130, y: 34, a: 0 },
        { x: 156, y: 46, a: 15 },
      ].map(({ x, y, a }) => (
        <g key={x} transform={`rotate(${a} ${x} ${y + 15})`} fill={c.tint} stroke={c.line}>
          <path
            d={`M${x} ${y - 10}c-8 4-8 12 0 15 8-3 8-11 0-15Zm0 12c-16-9-23 3-9 9l9 3 9-3c14-6 7-18-9-9Zm0 17c-17-9-24 3-9 9l9 3 9-3c15-6 8-18-9-9Z`}
          />
        </g>
      ))}
      <path
        d="m118 109-17-13m40 9 17-11m-41 43 26-7-1 14-22 6-3-13Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M130 144v13m-3-13-8 12m16-13 9 12" stroke={c.line} />
    </Scene>
  )
}
