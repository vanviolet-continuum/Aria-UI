import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PrinterIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M89 64V29h82v35" fill={c.surface} />
      <path d="M101 41h58m-58 10h40" stroke={c.line} />
      <rect x="57" y="62" width="146" height="76" rx="10" fill={c.surface} />
      <path d="M57 86h146M80 104h99v25H80v-25Z" fill={c.tint} stroke={c.line} />
      <path d="M92 111h76v45H92v-45Z" fill={c.surface} />
      <path d="M103 125h54m-54 11h38m-38 11h47" stroke={c.line} />
      <circle cx="181" cy="74" r="3" fill={c.accent} stroke="none" />
      <path d="M70 74h17m-24 64v8m134-8v8" stroke={c.line} />
    </Scene>
  )
}
