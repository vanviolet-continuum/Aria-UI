import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SafeVaultIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="72" y="34" width="116" height="116" rx="9" fill={c.surface} />
      <rect x="83" y="45" width="94" height="94" rx="6" fill={c.tint} stroke={c.line} />
      <path d="M75 62h12v18H75V62Zm0 49h12v18H75v-18Z" fill={c.surface} stroke={c.line} />
      <circle cx="135" cy="93" r="21" fill={c.surface} />
      <circle cx="135" cy="93" r="7" fill={c.tint} />
      <path d="M135 72v14m0 14v14m-21-21h14m14 0h14m-50-31h46m-42 87v7m66-7v7" stroke={c.line} />
    </Scene>
  )
}
