import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SoapBarIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <ellipse cx="130" cy="135" rx="73" ry="19" fill={c.surface} />
      <ellipse cx="130" cy="135" rx="60" ry="12" fill={c.tint} stroke={c.line} />
      <path d="M82 84h97v31c0 28-97 28-97 0V84Z" fill={c.surface} />
      <ellipse cx="130.5" cy="84" rx="48.5" ry="23" fill={c.tint} />
      <path d="M107 82c15-6 33-6 48 0m-43 10h34" stroke={c.line} />
      <circle cx="83" cy="49" r="8" fill={c.surface} stroke={c.line} />
      <circle cx="104" cy="34" r="5" stroke={c.line} />
      <circle cx="178" cy="55" r="10" fill={c.surface} stroke={c.line} />
    </Scene>
  )
}
