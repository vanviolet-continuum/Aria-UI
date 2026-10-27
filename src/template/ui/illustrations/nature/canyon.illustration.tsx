import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CanyonIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="m45 53 48-6 22 34-20 21 7 53H45V53Zm172 0-47-9-25 35 21 23-9 53h60V53Z"
        fill={c.surface}
      />
      <path
        d="M46 71h56m-56 17h62m-62 27h51m-51 22h53m62-71h55m-64 19h64m-54 30h54m-57 21h57"
        stroke={c.line}
      />
      <path
        d="M128 87c-30 22 27 31 7 49-14 11-12 16-6 21h22c-17-14 17-15 15-34-2-20-30-20-20-36h-18Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M41 156h179" stroke={c.line} />
    </Scene>
  )
}
