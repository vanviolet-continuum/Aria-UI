import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DryBagIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M92 55h76v85c0 22-76 22-76 0V55Z" fill={c.surface} />
      <path d="M89 40h82v16H89V40Z" fill={c.tint} />
      <path d="M104 40V29h52v11m-59 14h66m-59 17v64m-3 13h58" stroke={c.line} />
      <path d="M127 87c-20 24-20 34-6 39 19 7 26-12 15-25l-9-14Z" fill={c.tint} stroke={c.line} />
      <path d="M151 56c34-9 47 66 18 79m-8-74c20-2 26 49 7 58" stroke={c.line} />
      <rect x="119" y="43" width="22" height="11" rx="3" fill={c.surface} stroke={c.line} />
    </Scene>
  )
}
