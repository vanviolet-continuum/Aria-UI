import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SofaIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="59" y="56" width="142" height="77" rx="18" fill={c.tint} />
      <path d="M75 68h110v46H75V68Zm37 1v44m36-44v44" stroke={c.line} />
      <rect x="75" y="113" width="110" height="29" rx="8" fill={c.surface} stroke={c.line} />
      <path d="M112 114v26m36-26v26" stroke={c.line} />
      <rect x="45" y="85" width="30" height="60" rx="12" fill={c.surface} />
      <rect x="185" y="85" width="30" height="60" rx="12" fill={c.surface} />
      <path d="M61 145v11h11v-11m116 0v11h11v-11M83 146h95m-122-43v26m148-26v26" stroke={c.line} />
    </Scene>
  )
}
