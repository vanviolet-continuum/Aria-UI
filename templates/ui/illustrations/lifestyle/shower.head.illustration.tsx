import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ShowerHeadIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M89 148V51c0-34 64-34 64 0v10h-12V51c0-18-40-18-40 0v97H89Z" fill={c.surface} />
      <path d="M126 61h41l15 16h-71l15-16Z" fill={c.tint} />
      <path
        d="M115 77h64v6h-64v-6M121 94l-4 12M138 94l-2 12M155 94v12M172 94l2 12M117 121l-5 16M135 121l-2 16M155 121v16M174 121l4 16M85 149h20v8H85v-8Z"
        stroke={c.line}
      />
    </Scene>
  )
}
