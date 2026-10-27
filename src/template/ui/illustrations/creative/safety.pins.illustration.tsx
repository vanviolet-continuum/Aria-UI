import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SafetyPinsIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(25 113 93)">
        <path d="M105 51V34c0-15 23-15 23 0v89c0 40-40 40-40 0V59l17-8Z" fill={c.surface} />
        <path d="M98 63v60c0 25 20 25 20 0V34" stroke={c.line} />
        <path d="M98 49h14v19H98V49Z" fill={c.tint} />
      </g>
      <g transform="rotate(-15 162 110)">
        <path d="M158 81V66c0-11 17-11 17 0v64c0 29-29 29-29 0V87l12-6Z" fill={c.surface} />
        <path d="M153 91v39c0 17 15 17 15 0V66" stroke={c.line} />
        <path d="M153 79h10v15h-10V79Z" fill={c.tint} />
      </g>
    </Scene>
  )
}
