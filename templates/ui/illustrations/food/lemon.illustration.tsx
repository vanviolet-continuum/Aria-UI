import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function LemonIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M71 106c-11-8-11-17 1-24 15-43 77-55 98-16 12 5 14 15 3 23-8 46-75 62-102 17Z"
        fill={c.surface}
      />
      <path
        d="M87 76c14-14 34-18 49-12m-5-22c13-22 33-19 37-6-13 13-26 14-37 6Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="169" cy="127" r="29" fill={c.surface} />
      <circle cx="169" cy="127" r="22" fill={c.tint} stroke={c.line} />
      <path d="M169 105v44m-22-22h44m-38-16 32 32m0-32-32 32" stroke={c.line} />
    </Scene>
  )
}
