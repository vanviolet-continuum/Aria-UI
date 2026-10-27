import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function InkPadIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M68 84V43a7 7 0 0 1 7-7h111a7 7 0 0 1 7 7v41H68Z" fill={c.surface} />
      <path d="M80 47h101v26H80V47Z" fill={c.tint} stroke={c.line} />
      <path d="M67 88h126l12 45v19H55v-19l12-45Z" fill={c.surface} />
      <path d="M76 97h108l7 29H68l8-29Z" fill={c.tint} stroke={c.line} />
      <path d="M55 133h150m-85 9h20m-55-33h89m-86 8h84" stroke={c.line} />
    </Scene>
  )
}
