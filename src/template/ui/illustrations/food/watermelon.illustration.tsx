import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WatermelonIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m130 40-68 83c40 29 96 29 136 0l-68-83Z" fill={c.surface} />
      <path d="m130 55-55 65c34 22 76 22 110 0l-55-65Z" fill={c.tint} stroke={c.line} />
      <path d="M69 125c37 25 85 25 122 0" stroke={c.line} />
      {[
        { x: 130, y: 77, a: 0 },
        { x: 114, y: 98, a: -18 },
        { x: 146, y: 98, a: 18 },
        { x: 99, y: 119, a: -28 },
        { x: 130, y: 122, a: 0 },
        { x: 161, y: 119, a: 28 },
      ].map(({ x, y, a }) => (
        <ellipse
          key={x + '-' + y}
          cx={x}
          cy={y}
          rx="2"
          ry="4"
          transform={`rotate(${a} ${x} ${y})`}
          fill={c.line}
          stroke="none"
        />
      ))}
      <path d="M91 157h78" stroke={c.line} />
    </Scene>
  )
}
