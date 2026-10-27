import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PaperLanternIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M130 22v14m-13 0h26v12h-26V36Z" fill={c.surface} />
      <path d="M103 47h54c45 20 45 73 0 93h-54c-45-20-45-73 0-93Z" fill={c.surface} />
      <path
        d="M112 47c-26 27-26 66 0 93m18-93v93m18-93c26 27 26 66 0 93M88 64h84M77 83h106M77 103h106M88 122h84"
        stroke={c.line}
      />
      <path d="M113 140h34v9h-34v-9m17 9v12m-7-12v12m14-12v12" stroke={c.line} />
    </Scene>
  )
}
