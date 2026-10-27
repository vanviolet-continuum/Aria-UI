import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DresserIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="66" y="70" width="129" height="79" rx="4" fill={c.surface} />
      <path d="M61 61h139v11H61V61Z" fill={c.tint} />
      <path d="M75 81h49v24H75V81Zm59 0h52v24h-52V81Zm-59 34h111v25H75v-25Z" stroke={c.line} />
      <path d="M94 93h12m47 0h14m-54 34h35m-74 23v7m112-7v7" stroke={c.line} />
      <path
        d="M96 61V42c0-23 69-23 69 0v19m-60 0V42c0-12 51-12 51 0v19"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="m118 43 9-8m4 18 15-13" stroke={c.line} />
    </Scene>
  )
}
