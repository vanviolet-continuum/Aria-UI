import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SwimmingGogglesIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M77 88C40 50 70 28 130 28s90 22 53 60m-100-7C60 51 80 39 130 39s70 12 47 42"
        stroke={c.line}
      />
      <path
        d="M66 77h44c9 0 12 8 11 17l-3 18c-4 25-56 25-61 0l-4-18c-2-10 3-17 13-17Zm84 0h44c10 0 15 7 13 17l-4 18c-5 25-57 25-61 0l-3-18c-1-9 2-17 11-17Z"
        fill={c.surface}
      />
      <path
        d="M68 87h39l-3 24c-2 11-31 11-34 0l-5-18c-1-3 0-6 3-6Zm85 0h39c3 0 4 3 3 6l-5 18c-3 11-32 11-34 0l-3-24Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M121 90c7-5 11-5 18 0m-18 9c7-5 11-5 18 0M98 151h64" stroke={c.line} />
    </Scene>
  )
}
