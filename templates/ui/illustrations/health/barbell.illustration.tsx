import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BarbellIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="47" y="84" width="166" height="14" rx="4" fill={c.surface} />
      <rect x="70" y="49" width="20" height="84" rx="5" fill={c.tint} />
      <rect x="51" y="62" width="19" height="58" rx="4" fill={c.surface} />
      <rect x="170" y="49" width="20" height="84" rx="5" fill={c.tint} />
      <rect x="190" y="62" width="19" height="58" rx="4" fill={c.surface} />
      <path
        d="M79 60v62m100-62v62m-76-32v7m11-7v7m11-7v7m11-7v7m11-7v7m11-7v7M64 147h132m-109 9h86"
        stroke={c.line}
      />
    </Scene>
  )
}
