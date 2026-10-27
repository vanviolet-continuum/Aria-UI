import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TabletStandIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m136 105 19 44H89l22-44" fill={c.tint} stroke={c.line} />
      <rect
        x="69"
        y="30"
        width="121"
        height="105"
        rx="10"
        fill={c.surface}
        transform="rotate(-6 129 82)"
      />
      <g transform="rotate(-6 129 82)">
        <path d="M78 40h103v80H78V40Z" fill={c.tint} stroke={c.line} />
        <path d="M94 57h68m-68 12h46m-46 21h68m-68 12h40m-4 25h13" stroke={c.line} />
      </g>
      <path d="M83 149h79v7H83v-7Z" fill={c.surface} />
      <path d="M122 137h16" stroke={c.line} />
    </Scene>
  )
}
