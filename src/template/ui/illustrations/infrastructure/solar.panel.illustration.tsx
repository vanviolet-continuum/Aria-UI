import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SolarPanelIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m80 70 119 1-22 66H58l22-67Z" fill={c.surface} />
      <path d="m88 79 97 1-16 48H72l16-49Z" fill={c.tint} stroke={c.line} />
      <path
        d="m108 80-16 48m36-48-16 48m36-48-16 48m36-48-16 48m-69-33h96m-101 16h96M91 138v17m60-17v17m-75 0h91"
        stroke={c.line}
      />
      <circle cx="97" cy="39" r="13" fill={c.tint} stroke={c.line} />
      <path d="M97 19v-7m-20 7 5 6m30 0 5-6m-47 20h8m39 0h8m-10 17 5 4" stroke={c.line} />
    </Scene>
  )
}
