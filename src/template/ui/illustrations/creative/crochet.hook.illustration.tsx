import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CrochetHookIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(23 136 90)">
        <path
          d="M132 100V40c0-16 22-16 20-3m-14 63V40c0-7 9-7 8-2m-14 62h6v47c0 12-17 12-17 0v-32c0-8 2-15 11-15Z"
          fill={c.surface}
        />
        <path d="M128 116v28" stroke={c.line} />
      </g>
      <circle cx="84" cy="127" r="24" fill={c.tint} />
      <path
        d="m65 114 31 31m-21-40 31 31m-45-7 30-19m-24 31 33-21m2 23c24 24 63 15 60-6"
        stroke={c.line}
      />
    </Scene>
  )
}
