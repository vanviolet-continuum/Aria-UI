import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BathtubIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M54 90h153l-13 37c-9 29-118 29-127 0L54 90Z" fill={c.surface} />
      <path d="M50 84h161v12H50V84Z" fill={c.tint} />
      <path
        d="M74 84V47c0-26 37-26 37 0v9H99v-9c0-10-13-10-13 0v37"
        fill={c.surface}
        stroke={c.line}
      />
      <path
        d="M81 145v11m99-11v11M76 109c4 10 10 17 19 20m-2-45V73m-5 0h10m53 11h-12V58h12v26Z"
        stroke={c.line}
      />
      <circle cx="182" cy="63" r="7" fill={c.surface} stroke={c.line} />
      <circle cx="167" cy="43" r="4" stroke={c.line} />
    </Scene>
  )
}
