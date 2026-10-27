import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DiningChairIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M94 33h72v67H94V33Z" fill={c.surface} />
      <path d="M103 43h54v43h-54V43Zm18 0v43m18-43v43" stroke={c.line} />
      <path d="m94 99-13 24h98l-13-24H94Zm-13 24v8h98v-8" fill={c.tint} />
      <path d="m86 131-6 26m94-26 6 26m-83-26v20m66-20v20M94 112h72" stroke={c.line} />
    </Scene>
  )
}
