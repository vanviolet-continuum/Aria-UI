import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function FabricRollIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M91 63h95v80H91V63Z" fill={c.tint} />
      <ellipse cx="91" cy="103" rx="24" ry="40" fill={c.surface} />
      <ellipse cx="91" cy="103" rx="15" ry="29" stroke={c.line} />
      <ellipse cx="91" cy="103" rx="6" ry="16" fill={c.tint} stroke={c.line} />
      <path d="M187 63c-5 29-6 55 7 82l-51 10c-13-25-15-56-8-85" fill={c.surface} />
      <path
        d="m143 82 42-6m-45 21 43-6m-43 22 44-7m-41 22 45-8m-39 22 45-9"
        stroke={c.line}
        strokeDasharray="4 5"
      />
    </Scene>
  )
}
