import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DrumKitIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="130" cy="122" r="30" fill={c.surface} />
      <circle cx="130" cy="122" r="22" fill={c.tint} stroke={c.line} />
      <path d="m112 147-5 10m41-10 5 10M87 87v42m86-42v42" stroke={c.line} />
      <path d="M71 79h32v27H71V79Zm86 0h32v27h-32V79Z" fill={c.tint} />
      <ellipse cx="87" cy="79" rx="16" ry="6" fill={c.surface} />
      <ellipse cx="173" cy="79" rx="16" ry="6" fill={c.surface} />
      <ellipse cx="62" cy="62" rx="25" ry="5" fill={c.surface} />
      <ellipse cx="197" cy="48" rx="25" ry="5" fill={c.surface} />
      <path
        d="M62 57v94m-12 6 12-13 12 13m123-114v108m-12 6 12-13 12 13M122 71l-15-22m29 22 15-22"
        stroke={c.line}
      />
    </Scene>
  )
}
