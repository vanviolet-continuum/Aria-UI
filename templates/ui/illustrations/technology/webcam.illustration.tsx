import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WebcamIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="63" y="53" width="135" height="54" rx="22" fill={c.surface} />
      <circle cx="130" cy="80" r="21" fill={c.tint} />
      <circle cx="130" cy="80" r="12" fill={c.surface} stroke={c.line} />
      <path d="M124 75c2-2 5-3 8-2m-51-5v24m7-24v24m84-24v24m7-24v24" stroke={c.line} />
      <circle cx="157" cy="79" r="2" fill={c.accent} stroke="none" />
      <path d="M119 107v18h22v-18m-37 18h52l10 26H95l9-26Z" fill={c.tint} stroke={c.line} />
      <path d="M104 143h52m-61 8h70m-101-41c-29 13-16 46 6 43" stroke={c.line} />
    </Scene>
  )
}
