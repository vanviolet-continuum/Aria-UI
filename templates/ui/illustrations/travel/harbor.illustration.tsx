import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HarborIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M50 116h164v10H50v-10Zm12 10v24m38-24v24m60-24v24m38-24v24" fill={c.surface} />
      <path d="M58 111v-11m43 11v-11m57 11v-11m43 11v-11" stroke={c.line} />
      <path d="M72 76h105l-17 28H90L72 76Z" fill={c.tint} />
      <path d="M111 76V57h37v19m-18-19V39h37l10 18h-47" fill={c.surface} stroke={c.line} />
      <path
        d="M78 83h92m-62 7h39m-10-28h10m-94 93h27m38 0h27m33 0h28m-119-118h20"
        stroke={c.line}
      />
    </Scene>
  )
}
