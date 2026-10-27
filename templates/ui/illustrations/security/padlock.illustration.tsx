import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PadlockIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M97 80V56c0-45 66-45 66 0v24h-13V56c0-26-40-26-40 0v24H97Z" fill={c.surface} />
      <rect x="84" y="79" width="92" height="75" rx="12" fill={c.tint} />
      <path d="M94 88h72v56H94V88Z" stroke={c.line} />
      <path
        d="M123 119c-13-10 3-23 13-14 6 6 2 12-1 14v13h-12v-13Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M102 149h56" stroke={c.line} />
    </Scene>
  )
}
