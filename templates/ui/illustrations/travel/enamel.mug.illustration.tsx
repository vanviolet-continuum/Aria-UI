import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function EnamelMugIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M166 80h14c36 0 36 47 0 47h-14m0-37h13c20 0 20 27 0 27h-13"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M80 70h89v64c0 25-89 25-89 0V70Z" fill={c.surface} />
      <ellipse cx="124.5" cy="70" rx="44.5" ry="9" fill={c.tint} />
      <path d="M92 87v40m-7 13c16 10 63 10 79 0" stroke={c.line} />
      <path
        d="m110 119 15-24 15 24h-30Zm9-9 6-5 6 5m-24-61c-8-8 6-11 0-20m23 20c-8-8 6-11 0-20"
        stroke={c.line}
      />
    </Scene>
  )
}
