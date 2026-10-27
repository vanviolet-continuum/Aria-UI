import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function KeycardIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="57" y="54" width="147" height="90" rx="10" fill={c.surface} />
      <path d="M58 72h145v17H58V72Z" fill={c.tint} stroke={c.line} />
      <rect x="76" y="101" width="29" height="23" rx="4" fill={c.tint} stroke={c.line} />
      <path d="M84 102v21m12-21v21m-19-10h27m15-8h58m-58 11h41m-41 12h48" stroke={c.line} />
      <path d="M168 32c9 4 14 10 14 17m-19-12c5 3 8 7 8 12m-25 105h36" stroke={c.line} />
      <circle cx="159" cy="45" r="2" fill={c.accent} stroke="none" />
    </Scene>
  )
}
