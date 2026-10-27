import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ScrewdriverIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(18 130 91)">
        <path d="M126 26h8v70h-8V26Zm0 0-3-11h14l-3 11" fill={c.surface} stroke={c.line} />
        <path d="M116 95h28v13c13 16 6 41-1 47h-26c-7-6-14-31-1-47V95Z" fill={c.tint} />
        <path d="M117 105h26m-19 12v29m12-29v29m-19 7h26" stroke={c.line} />
      </g>
      <path d="M77 129v26m-7-27h14v8H70v-8m-6 27h26m80-92v20m-6-20h12v7h-12v-7" stroke={c.line} />
    </Scene>
  )
}
