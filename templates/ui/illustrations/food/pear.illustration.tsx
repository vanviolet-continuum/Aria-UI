import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PearIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M115 51c-1-20 31-20 30 0-2 21 29 38 29 64 0 52-88 52-88 0 0-26 31-43 29-64Z"
        fill={c.surface}
      />
      <path
        d="M130 40V25l10-10m-10 20c16-21 33-13 33-2-13 9-23 9-33 2Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M108 85c-14 16-16 31-10 43m27 9h1m13-9h1m-8 15h1M108 156h44" stroke={c.line} />
    </Scene>
  )
}
