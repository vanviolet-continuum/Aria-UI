import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function PendantLampIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="m104 115-25 38h102l-25-38" fill={c.tint} stroke="none" opacity=".6" />
      <path d="M103 23h54m-27 0v35" stroke={c.line} />
      <rect x="117" y="57" width="26" height="12" rx="5" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="111" r="11" fill={c.tint} stroke={c.accent} />
      <path d="M82 107c7-30 23-44 48-44s41 14 48 44H82Z" fill={c.surface} />
      <path d="M99 93c5-10 12-17 22-20" stroke={c.line} />
      <ellipse cx="130" cy="107" rx="48" ry="8" fill={c.surface} />
      <path d="M94 108h72M89 153h82" stroke={c.line} />
    </StillLifeScene>
  )
}
