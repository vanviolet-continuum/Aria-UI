import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function UsbHubIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M116 77V55c0-24 51-11 51-36" stroke={c.line} />
      <rect x="161" y="15" width="13" height="18" rx="3" fill={c.surface} stroke={c.line} />
      <rect x="54" y="77" width="151" height="63" rx="11" fill={c.surface} />
      <path d="M55 91h149m-137 36h125" stroke={c.line} />
      {[70, 102, 134, 166].map((x) => (
        <g key={x}>
          <rect x={x} y="104" width="23" height="12" rx="2" fill={c.tint} stroke={c.line} />
          <path d={`M${x + 5} 108h13`} stroke={c.line} />
        </g>
      ))}
      <path d="M81 141v10m95-10v10m-96 4h98" stroke={c.line} />
      <circle cx="194" cy="85" r="2" fill={c.accent} stroke="none" />
    </Scene>
  )
}
