import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function NetworkSwitchIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m68 64 122-1 20 29H49l19-28Z" fill={c.tint} />
      <rect x="49" y="92" width="161" height="52" rx="6" fill={c.surface} />
      {[64, 91, 118, 145].map((x) => (
        <g key={x}>
          <rect x={x} y="109" width="20" height="15" rx="2" fill={c.tint} stroke={c.line} />
          <path d={`M${x + 5} 113h10m-10 5h10`} stroke={c.line} />
          <circle cx={x + 10} cy="101" r="1.5" fill={c.accent} stroke="none" />
        </g>
      ))}
      <path
        d="M180 106h18m-18 9h18m-18 9h18m-122 20v10m108-10v10M81 73h98m-91 8h98"
        stroke={c.line}
      />
    </Scene>
  )
}
