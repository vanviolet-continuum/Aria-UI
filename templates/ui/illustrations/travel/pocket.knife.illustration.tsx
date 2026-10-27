import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PocketKnifeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m124 92 62-51c1 25-17 49-46 64l-16-13Z" fill={c.surface} />
      <path d="m139 87 23-19m-37 22-4-42 14-6 2 45" stroke={c.line} />
      <path
        d="m103 92-28-31c-7-8-15 0-7 8l25 32m9-8-16-34m-4-7 8-4"
        fill={c.tint}
        stroke={c.line}
      />
      <g transform="rotate(-21 125 121)">
        <rect x="70" y="105" width="112" height="32" rx="16" fill={c.tint} />
        <circle cx="88" cy="121" r="5" fill={c.surface} />
        <circle cx="165" cy="121" r="5" fill={c.surface} />
        <path d="M105 121h39" stroke={c.line} />
      </g>
      <path d="M64 139c-20-8-23 13-8 15" stroke={c.line} />
    </Scene>
  )
}
