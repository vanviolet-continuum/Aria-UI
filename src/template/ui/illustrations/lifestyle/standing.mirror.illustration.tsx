import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function StandingMirrorIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M94 145 85 157m81-12 9 12m-45-11v11" stroke={c.line} />
      <rect x="87" y="25" width="86" height="122" rx="40" fill={c.surface} />
      <rect x="96" y="34" width="68" height="104" rx="31" fill={c.tint} stroke={c.line} />
      <path d="m109 88 35-36m-30 56 39-39m-44 48 19-19M81 158h98" stroke={c.line} />
    </Scene>
  )
}
