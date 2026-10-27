import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ChargingStationIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M62 119h136l11 25v11H51v-11l11-25Z" fill={c.surface} />
      <path d="M52 144h156m-137-17h120" stroke={c.line} />
      <rect x="74" y="33" width="59" height="97" rx="9" fill={c.surface} />
      <path d="M82 42h43v74H82V42Z" fill={c.tint} stroke={c.line} />
      <path d="m102 63-9 18h12l-5 16 17-22h-12l6-12" stroke={c.accent} />
      <rect x="150" y="90" width="34" height="39" rx="10" fill={c.tint} stroke={c.line} />
      <path d="M151 106h32m-63 43h21m18-72v7m15-7v7" stroke={c.line} />
      <circle cx="171" cy="117" r="2" fill={c.accent} stroke="none" />
    </Scene>
  )
}
