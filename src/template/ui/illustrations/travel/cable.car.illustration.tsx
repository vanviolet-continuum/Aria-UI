import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CableCarIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m44 60 173-34m-173 43 173-34m-95 14 13 28m-5-30 13 28" stroke={c.line} />
      <path d="M108 74h50v10h-50V74Z" fill={c.tint} />
      <rect x="90" y="84" width="85" height="65" rx="13" fill={c.surface} />
      <path d="M99 93h67v31H99V93Zm33 0v31m-42 9h85m-71 10h58" fill={c.tint} stroke={c.line} />
      <path d="M117 156h32m-12-47h8m-37 0h8" stroke={c.line} />
    </Scene>
  )
}
