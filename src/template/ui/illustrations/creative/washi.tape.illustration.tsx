import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WashiTapeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M77 66h80v42H77V66Z" fill={c.tint} />
      <ellipse cx="77" cy="87" rx="24" ry="31" fill={c.surface} />
      <ellipse cx="77" cy="87" rx="12" ry="19" fill={c.tint} stroke={c.line} />
      <path d="M156 66c-6 34-10 53 24 56h25v24h-25c-52-4-52-31-43-60" fill={c.surface} />
      <path
        d="M100 70v29m17-29v29m17-29v29m19 11 10 7m-2 14 15 3m9-10v20m13-20v20"
        stroke={c.line}
      />
      <path d="M59 145h65m-43 9h26" stroke={c.line} />
    </Scene>
  )
}
