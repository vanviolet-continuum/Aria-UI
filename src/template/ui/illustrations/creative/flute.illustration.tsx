import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function FluteIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(24 130 90)">
        <rect x="124" y="24" width="13" height="134" rx="5" fill={c.surface} />
        <path d="M124 40h13m-13 92h13m-13 16h13" stroke={c.line} />
        <ellipse cx="130.5" cy="51" rx="4" ry="2" fill={c.tint} stroke={c.line} />
        {[68, 81, 94, 107, 120].map((y) => (
          <g key={y}>
            <circle cx="143" cy={y} r="4" fill={c.tint} stroke={c.line} />
            <path d={`M136 ${y}h3`} stroke={c.line} />
          </g>
        ))}
        <path d="M143 69v50" stroke={c.line} />
      </g>
      <path d="M60 149h34m72-110h21m-15 10h15" stroke={c.line} />
    </Scene>
  )
}
