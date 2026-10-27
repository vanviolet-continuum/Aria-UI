import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function VinylPlayerIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M62 66V39a6 6 0 0 1 6-6h126a6 6 0 0 1 6 6v27" fill={c.tint} stroke={c.line} />
      <path d="M73 44h116m-116 9h62" stroke={c.line} />
      <rect x="52" y="65" width="156" height="83" rx="9" fill={c.surface} />
      <path d="M53 122h154" stroke={c.line} />
      <ellipse cx="108" cy="93" rx="43" ry="25" fill={c.tint} />
      <ellipse cx="108" cy="93" rx="32" ry="18" stroke={c.line} />
      <ellipse cx="108" cy="93" rx="21" ry="12" stroke={c.line} />
      <ellipse cx="108" cy="93" rx="9" ry="5" fill={c.surface} stroke={c.accent} />
      <circle cx="178" cy="85" r="7" fill={c.tint} stroke={c.line} />
      <path d="M178 85v17l-19 12m-4-2 8 5" strokeWidth="2.5" />
      <circle cx="72" cy="135" r="5" fill={c.tint} stroke={c.line} />
      <circle cx="185" cy="135" r="5" fill={c.tint} stroke={c.line} />
      <path d="M91 135h49m-69 13v6m118-6v6" stroke={c.line} />
    </StillLifeScene>
  )
}
