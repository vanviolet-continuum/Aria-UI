import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function MortarPestleIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(31 145 73)">
        <path d="M137 34c0-9 17-9 17 0l-2 65h-13l-2-65Z" fill={c.surface} />
        <path d="M139 43h13m-13 49h13" stroke={c.line} />
      </g>
      <path d="M77 91h106c-2 35-19 55-53 55S79 126 77 91Z" fill={c.tint} />
      <ellipse cx="130" cy="91" rx="53" ry="11" fill={c.surface} />
      <path d="M91 109c7 17 18 24 31 26m-17 11v9h50v-9" stroke={c.line} />
      <path
        d="M57 122c-4-16 4-24 14-21 0 13-5 18-14 21Zm1 12c-12 2-18-5-16-11 10-1 16 4 16 11Z"
        fill={c.tint}
        stroke={c.line}
      />
    </Scene>
  )
}
