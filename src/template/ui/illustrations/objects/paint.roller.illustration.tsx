import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PaintRollerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="68" y="31" width="104" height="34" rx="9" fill={c.surface} />
      <path d="M78 32v32m84-32v32M172 48h17v34h-60v22" stroke={c.line} />
      <path d="M118 104h22v42c0 16-22 16-22 0v-42Z" fill={c.tint} />
      <path d="M124 114v29m9-29v29m-53-95h69" stroke={c.line} />
      <path d="M129 157v3m-59-40h17m92 15h18" stroke={c.line} />
    </Scene>
  )
}
