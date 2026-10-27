import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WifiRouterIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M76 98V54m108 44V54" stroke={c.line} strokeWidth="5" />
      <path d="M74 95h112l18 37v18H56v-18l18-37Z" fill={c.surface} />
      <path d="M56 132h148m-128-29h107m-74 13h42" stroke={c.line} />
      <path d="M72 141h5m9 0h5m9 0h5m9 0h5" stroke={c.accent} strokeWidth="3" />
      <rect x="174" y="138" width="18" height="7" rx="2" fill={c.tint} stroke={c.line} />
      <path
        d="M102 47c16-14 40-14 56 0m-47 10c11-9 27-9 38 0m-28 10c6-4 13-4 19 0"
        stroke={c.line}
      />
      <circle cx="130" cy="76" r="3" fill={c.accent} stroke="none" />
    </Scene>
  )
}
