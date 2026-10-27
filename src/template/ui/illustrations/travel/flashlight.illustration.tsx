import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function FlashlightIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(25 126 101)">
        <path d="M112 70h29v76a7 7 0 0 1-7 7h-15a7 7 0 0 1-7-7V70Z" fill={c.surface} />
        <path d="M103 42h47v17l-9 11h-29l-9-11V42Z" fill={c.tint} />
        <ellipse cx="126.5" cy="42" rx="23.5" ry="7" fill={c.surface} />
        <path d="M120 85v41m13-41v41m-20 16h27" stroke={c.line} />
        <rect x="119" y="76" width="15" height="21" rx="4" fill={c.tint} stroke={c.line} />
      </g>
      <path d="m146 27 5-11m11 17 10-5m-42-5-2-9M73 151h33m63 0h25" stroke={c.line} />
    </Scene>
  )
}
