import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SealingWaxIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(18 133 88)">
        <rect x="101" y="32" width="17" height="117" rx="3" fill={c.surface} />
        <rect x="125" y="32" width="17" height="117" rx="3" fill={c.tint} />
        <rect x="149" y="32" width="17" height="117" rx="3" fill={c.surface} />
        <path
          d="M105 43h9m-9 11h9m15-11h9m-9 11h9m15-11h9m-9 11h9m-57 82h9m15 0h9m15 0h9"
          stroke={c.line}
        />
      </g>
      <path d="M72 130c-16 19-15 25 0 25 16 0 16-6 0-25Z" fill={c.tint} stroke={c.line} />
      <path d="M101 157h81" stroke={c.line} />
    </Scene>
  )
}
