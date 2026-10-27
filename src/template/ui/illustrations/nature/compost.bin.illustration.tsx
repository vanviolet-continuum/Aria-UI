import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CompostBinIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M80 58h101v95H80V58Z" fill={c.surface} />
      <path d="M73 48h115v12H73V48Zm12-9h91v9H85v-9Z" fill={c.tint} />
      <path d="M89 68h83m-83 17h83m-83 17h83m-83 17h83m-83 17h83" stroke={c.line} />
      <path d="M122 119c-20-23-6-41 10-41 15 9 15 29-10 41Z" fill={c.tint} />
      <path d="m122 119 12-33m-12 14 11 1m-35 52v4m65-4v4" stroke={c.line} />
      <path
        d="M54 143c-9-13-3-20 4-20 4 9 2 15-4 20Zm146-27c1-13 11-19 18-14-2 10-8 14-18 14Z"
        fill={c.tint}
        stroke={c.line}
      />
    </Scene>
  )
}
