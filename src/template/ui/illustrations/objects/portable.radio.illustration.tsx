import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function PortableRadioIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path
        d="M87 65V48a7 7 0 0 1 7-7h69a7 7 0 0 1 7 7v17m-73 0V51h63v14m11 0 28-38"
        stroke={c.line}
      />
      <circle cx="200" cy="25" r="3" fill={c.surface} stroke={c.line} />
      <rect x="56" y="65" width="148" height="86" rx="11" fill={c.surface} />
      <circle cx="95" cy="107" r="27" fill={c.tint} />
      <circle cx="95" cy="107" r="19" stroke={c.line} />
      <circle cx="95" cy="107" r="11" stroke={c.line} />
      <circle cx="95" cy="107" r="4" fill={c.surface} stroke={c.line} />
      <rect x="137" y="80" width="53" height="17" rx="3" fill={c.tint} stroke={c.line} />
      <path d="M145 85v6m8-6v3m9-3v6m9-6v3m10-3v6" stroke={c.line} />
      <path d="M166 81v15" stroke={c.accent} />
      <circle cx="149" cy="117" r="8" fill={c.tint} stroke={c.line} />
      <circle cx="180" cy="117" r="8" fill={c.tint} stroke={c.line} />
      <path d="m149 117 3-4m28 4 3-4m-43 25h49m-117 13v4m116-4v4" stroke={c.line} />
    </StillLifeScene>
  )
}
