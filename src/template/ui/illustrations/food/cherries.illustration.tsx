import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CherriesIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M103 91c4-27 15-45 34-61m23 66c0-31-9-49-23-66m0 3c-16-18-35-15-38-3 13 13 25 15 38 3Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="103" cy="119" r="29" fill={c.surface} />
      <circle cx="161" cy="125" r="29" fill={c.surface} />
      <path
        d="M88 108c4-5 9-7 15-6m43 12c4-5 9-7 15-6M98 91h11m46 5h11M88 157h89"
        stroke={c.line}
      />
    </Scene>
  )
}
