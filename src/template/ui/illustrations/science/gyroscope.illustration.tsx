import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GyroscopeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <ellipse cx="130" cy="83" rx="55" ry="27" fill={c.surface} />
      <ellipse cx="130" cy="83" rx="29" ry="54" stroke={c.line} />
      <ellipse cx="130" cy="83" rx="29" ry="54" transform="rotate(55 130 83)" stroke={c.line} />
      <ellipse cx="130" cy="83" rx="29" ry="54" transform="rotate(-55 130 83)" stroke={c.line} />
      <circle cx="130" cy="83" r="15" fill={c.tint} />
      <path d="M130 68V24m0 74v47m-22 10 22-11 22 11M91 83h23m32 0h23" stroke={c.line} />
      <circle cx="130" cy="23" r="4" fill={c.surface} />
      <path d="M105 156h50" stroke={c.line} />
    </Scene>
  )
}
