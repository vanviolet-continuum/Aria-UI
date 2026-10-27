import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BaseballBatIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(28 134 92)">
        <path d="M120 37c0-21 26-21 26 0 0 46-8 69-8 105h-10c0-36-8-59-8-105Z" fill={c.surface} />
        <path d="M124 143h18v12h-18v-12m4-27h10m-10 8h10m-10 8h10m-10-87v29" stroke={c.line} />
      </g>
      <circle cx="80" cy="132" r="21" fill={c.tint} />
      <path
        d="M65 117c14 5 17 17 9 35m22-35c-14 5-17 17-9 35M65 124l7-1m-9 10 7-1m20-9 7 1m-5 8 7 1"
        stroke={c.line}
      />
    </Scene>
  )
}
