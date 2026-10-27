import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function VolcanoIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m51 151 54-74h41l61 74H51Z" fill={c.surface} />
      <path
        d="M105 77c7-10 33-10 41 0l8 26-13-8-8 17-10-20-10 9-8-24Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M128 70c-19-15 0-30 9-19 15-15 32-3 22 8m-34-11c-15-9-10-28 6-24 11-10 27-2 22 10"
        stroke={c.line}
      />
      <path d="m100 105-22 34m71-25 20 25M41 154h179" stroke={c.line} />
      <path d="M132 85c-4 9 2 12 0 21" stroke={c.accent} />
    </Scene>
  )
}
