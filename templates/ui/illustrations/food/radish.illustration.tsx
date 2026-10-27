import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function RadishIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 78c-24-38-12-59 0-59 12 0 24 21 0 59Zm0 0c-32-4-48-24-38-37 18-1 34 12 38 37Zm0 0c32-4 48-24 38-37-18-1-34 12-38 37Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M130 78c-47-15-55 48-1 73 52-25 48-88 1-73Z" fill={c.surface} />
      <path
        d="M129 151c-1 9 13 11 17 5m-33-69c-14 5-19 17-13 31m12 11 7 3m27-35h7"
        stroke={c.line}
      />
    </Scene>
  )
}
