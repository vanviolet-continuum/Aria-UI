import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BinderClipsIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m91 106 17-36h49l16 36v38H91v-38Z" fill={c.tint} />
      <path d="M100 106h65m-65 29h65" stroke={c.line} />
      <path d="M115 108V47c0-26 37-26 37 0v61m-28 0V48c0-13 19-13 19 0v60" stroke={c.line} />
      <g transform="rotate(-15 80 132)">
        <path d="m55 127 10-21h27l10 21v25H55v-25Z" fill={c.surface} />
        <path d="M70 128V93c0-15 21-15 21 0v35m-38 1h49" stroke={c.line} />
      </g>
    </Scene>
  )
}
