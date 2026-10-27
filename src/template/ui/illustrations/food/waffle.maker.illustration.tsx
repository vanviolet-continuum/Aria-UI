import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WaffleMakerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M78 37h105a8 8 0 0 1 8 8v55H70V45a8 8 0 0 1 8-8Z" fill={c.surface} />
      <rect x="81" y="47" width="98" height="46" rx="4" fill={c.tint} stroke={c.line} />
      <path d="M93 48v44m17-44v44m18-44v44m18-44v44m18-44v44m-82-29h96m-96 15h96" stroke={c.line} />
      <path d="M70 102h121l12 38a8 8 0 0 1-8 11H64a8 8 0 0 1-8-11l14-38Z" fill={c.surface} />
      <path d="M80 109h101l6 25H73l7-25Z" fill={c.tint} stroke={c.line} />
      <path d="M97 109v25m20-25v25m20-25v25m20-25v25m-81-12h107m-71 22h35" stroke={c.line} />
      <circle cx="183" cy="144" r="2" fill={c.accent} stroke="none" />
    </Scene>
  )
}
