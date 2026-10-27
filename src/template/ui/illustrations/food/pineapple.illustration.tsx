import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PineappleIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m130 83-27-40 22 16 5-37 13 34 23-16-15 43h-21Z" fill={c.tint} stroke={c.line} />
      <path d="M130 72c-53-5-53 84 0 84s53-89 0-84Z" fill={c.surface} />
      <path
        d="m107 81 48 58m-57-44 44 55m-45-37 28 36m28-68-48 58m57-44-44 55m45-37-28 36"
        stroke={c.line}
      />
      <path d="M127 44l3 27m22-14-10 16M109 158h43" stroke={c.line} />
    </Scene>
  )
}
