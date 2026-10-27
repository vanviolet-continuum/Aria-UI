import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HairCombIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(-18 130 91)">
        <rect x="52" y="72" width="157" height="39" rx="8" fill={c.surface} />
        <path d="M63 84h134" stroke={c.line} />
        {Array.from({ length: 18 }, (_, i) => (
          <path key={i} d={`M${65 + i * 7.5} 86v25`} stroke={c.line} />
        ))}
        <path d="M64 77h132" stroke={c.line} />
      </g>
      <path d="M71 150h119m-96 8h74" stroke={c.line} />
    </Scene>
  )
}
