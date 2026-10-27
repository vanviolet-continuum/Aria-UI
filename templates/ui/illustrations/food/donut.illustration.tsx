import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DonutIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <ellipse cx="130" cy="96" rx="56" ry="43" fill={c.surface} />
      <path
        d="M80 91c-6-16 6-28 20-28 4-17 29-20 39-8 17-6 34 3 34 17 18 7 12 28-1 28-6 0-7 15-17 12-8-3-9 9-19 3-10-7-11 8-21 1-8-6-10 3-17-7-8-9-16-3-18-18Z"
        fill={c.tint}
        stroke={c.line}
      />
      <ellipse cx="130" cy="88" rx="18" ry="13" fill={c.surface} />
      <path
        d="m98 80 6 3m12-18 3 6m27-5-3 6m20 11-6 3m-9 19 5 3m-38-2-5 3m3 32h34"
        stroke={c.line}
      />
      <path d="M94 148h72m-59 9h46" stroke={c.line} />
    </Scene>
  )
}
