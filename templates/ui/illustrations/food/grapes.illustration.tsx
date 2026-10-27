import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GrapesIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 64V35l15-12m-15 24c-29 4-43-8-38-23 22-1 36 9 38 23Z"
        fill={c.tint}
        stroke={c.line}
      />
      {[
        { x: 109, y: 75 },
        { x: 134, y: 71 },
        { x: 157, y: 78 },
        { x: 99, y: 98 },
        { x: 124, y: 96 },
        { x: 150, y: 101 },
        { x: 111, y: 120 },
        { x: 137, y: 122 },
        { x: 125, y: 144 },
      ].map(({ x, y }) => (
        <g key={x + '-' + y}>
          <circle cx={x} cy={y} r="15" fill={c.surface} />
          <path d={`M${x - 6} ${y - 5}l3-2`} stroke={c.line} />
        </g>
      ))}
    </Scene>
  )
}
