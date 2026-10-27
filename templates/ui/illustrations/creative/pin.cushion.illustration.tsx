import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PinCushionIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M79 113c0-43 102-43 102 0 0 53-102 53-102 0Z" fill={c.tint} />
      <path
        d="M130 82v68m-16-65c-25 22-25 40 0 63m32-63c25 22 25 40 0 63M82 116h96"
        stroke={c.line}
      />
      <path d="m104 93-13-40m39 30V35m22 59 18-40" stroke={c.line} />
      <circle cx="90" cy="49" r="5" fill={c.surface} />
      <circle cx="130" cy="30" r="5" fill={c.surface} />
      <circle cx="172" cy="49" r="5" fill={c.surface} />
      <path d="M120 81h21m-45 74h68" stroke={c.line} />
    </Scene>
  )
}
