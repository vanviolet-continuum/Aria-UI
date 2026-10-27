import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function MotorcycleIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="76" cy="132" r="23" fill={c.surface} />
      <circle cx="183" cy="132" r="23" fill={c.surface} />
      <path
        d="m76 132 41-2 32-38 34 40m-66-2L97 95m59 0-9-37h-15"
        stroke={c.line}
        strokeWidth="2.5"
      />
      <path d="M114 73h24l15 23h-50l11-23Z" fill={c.tint} />
      <path d="M65 83h44v10H65V83Zm51 24h24v25h-24v-25Z" fill={c.surface} stroke={c.line} />
      <path
        d="M120 114h14m-14 8h14M74 132h8m97 0h8m-56 14h39m-3-75h12v17h-12V71Z"
        stroke={c.line}
      />
    </Scene>
  )
}
