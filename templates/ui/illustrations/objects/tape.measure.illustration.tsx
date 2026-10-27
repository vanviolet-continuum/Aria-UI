import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TapeMeasureIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="91" y="49" width="97" height="93" rx="22" fill={c.surface} />
      <circle cx="139" cy="96" r="29" fill={c.tint} />
      <circle cx="139" cy="96" r="18" fill={c.surface} stroke={c.line} />
      <path d="M128 96h23m-15-8v16m34-41h7" stroke={c.line} />
      <path d="M93 118H52v22h81v-16H93v-6Z" fill={c.tint} />
      <path
        d="M59 119v11m12-11v7m12-7v11m12-5v9m12-9v5m12-5v9M49 118v25h9m71 6h43"
        stroke={c.line}
      />
    </Scene>
  )
}
