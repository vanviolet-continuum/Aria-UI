import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function UmbrellaStandIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M105 103V43c0-23 30-23 30 0v7m13 53V54c0-20 25-20 25 0v7"
        stroke={c.line}
        strokeWidth="3"
      />
      <path
        d="M94 106V59l11-16 10 16v47H94Zm43 0V71l11-16 10 16v35h-21Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m85 101 8 54h73l8-54H85Z" fill={c.surface} />
      <ellipse cx="129.5" cy="101" rx="44.5" ry="7" fill={c.tint} stroke={c.line} />
      <path d="m100 114 4 29m13-29 1 29m16-29-1 29m16-29-3 29" stroke={c.line} />
    </Scene>
  )
}
