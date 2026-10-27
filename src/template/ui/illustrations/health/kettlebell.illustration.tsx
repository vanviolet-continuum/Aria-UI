import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function KettlebellIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M99 86V57c0-45 62-45 62 0v29h-13V57c0-26-36-26-36 0v29H99Z" fill={c.surface} />
      <path d="M92 88c-31 48-13 66 38 66s69-18 38-66c-14-15-62-15-76 0Z" fill={c.tint} />
      <path d="M97 101c-8 13-10 23-7 31m21 7h38" stroke={c.line} />
      <circle cx="130" cy="116" r="15" fill={c.surface} stroke={c.line} />
      <path d="M124 116h12m-6-6v12" stroke={c.line} />
    </Scene>
  )
}
