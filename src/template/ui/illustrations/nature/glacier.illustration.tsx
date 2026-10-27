import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GlacierIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m52 128 9-44 29-24 27 19 19-41 36 24 32 64-35 21-117-19Z" fill={c.surface} />
      <path d="m90 60 10 64 17-45m19-41 8 69 28-45m-28 45 25 40m-69-23-48 4" stroke={c.line} />
      <path d="m117 79 27 28 60 19-35 21-69-23 17-45Z" fill={c.tint} stroke={c.line} />
      <path d="M50 146h30m13 9h35m24 3h36m-10-12h31" stroke={c.line} />
      <path d="M62 82h16m65-19 14 9" stroke={c.line} />
    </Scene>
  )
}
