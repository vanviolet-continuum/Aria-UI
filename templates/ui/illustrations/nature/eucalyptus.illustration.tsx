import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function EucalyptusIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M130 132c-3-47 3-76 22-109m-22 76-28-43m28 63 31-44" stroke={c.line} />
      {[
        { x: 151, y: 35, r: 11 },
        { x: 139, y: 58, r: 14 },
        { x: 112, y: 68, r: 15 },
        { x: 146, y: 83, r: 15 },
        { x: 118, y: 102, r: 15 },
        { x: 154, y: 106, r: 14 },
      ].map(({ x, y, r }) => (
        <ellipse
          key={y}
          cx={x}
          cy={y}
          rx={r}
          ry={r * 0.72}
          transform={`rotate(-15 ${x} ${y})`}
          fill={c.tint}
          stroke={c.line}
        />
      ))}
      <path d="M113 130h34l7 24h-48l7-24Z" fill={c.surface} />
      <path d="M110 144h40m-31 5h22" stroke={c.line} />
    </Scene>
  )
}
