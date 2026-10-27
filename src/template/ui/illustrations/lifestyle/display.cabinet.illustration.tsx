import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DisplayCabinetIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="82" y="29" width="96" height="121" rx="5" fill={c.surface} />
      <path d="M91 39h78v74H91V39Zm39 0v74m-39-37h78m-78 46h78v20H91v-20Z" stroke={c.line} />
      <path
        d="M101 54h14v20h-14V54Zm-1 0 2-7h12l2 7m25 2h18v18h-18V56m-16 64v8m14-8v8M99 97c0-20 16-20 16 0v14H99V97Zm43-8h17v22h-17V89Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M92 150v7m76-7v7m-45-18h14" stroke={c.line} />
    </Scene>
  )
}
