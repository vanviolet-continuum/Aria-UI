import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function AdjustableWrenchIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(20 130 94)">
        <path
          d="M113 83c-27-13-22-47 0-57l-2 23h26l-2-23c22 10 27 44 0 57v62c0 19-22 19-22 0V83Z"
          fill={c.surface}
        />
        <path d="M108 59h34v15h-34V59Z" fill={c.tint} stroke={c.line} />
        <path d="M116 62v9m7-9v9m7-9v9m-6 24v36" stroke={c.line} />
        <circle cx="124" cy="145" r="4" fill={c.tint} stroke={c.line} />
      </g>
      <path d="M73 151h25m65 0h24" stroke={c.line} />
    </Scene>
  )
}
