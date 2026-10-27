import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function LightPrismIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m84 136 46-91 48 91H84Z" fill={c.surface} />
      <path d="m130 45 18-13 48 91-18 13-48-91Z" fill={c.tint} stroke={c.line} />
      <path d="M51 85h58l29 19 71-24m-71 24 71-8m-71 8 71 8m-71-8 71 24" stroke={c.accent} />
      <path d="m104 121 26-52 24 46M70 153h133" stroke={c.line} />
    </Scene>
  )
}
