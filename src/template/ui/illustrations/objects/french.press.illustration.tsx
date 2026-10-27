import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function FrenchPressIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path
        d="M162 77h12c34 0 34 52 0 52h-12m0-42h11c20 0 20 32 0 32h-11"
        fill={c.tint}
        stroke={c.line}
      />
      <rect x="86" y="59" width="76" height="90" rx="7" fill={c.surface} />
      <path
        d="M90 103c22-8 43 7 68 0v36a6 6 0 0 1-6 6H96a6 6 0 0 1-6-6v-36Z"
        fill={c.tint}
        stroke="none"
      />
      <path d="M90 103c22-8 43 7 68 0M96 72v23m0 19v20" stroke={c.line} />
      <ellipse cx="124" cy="59" rx="42" ry="7" fill={c.tint} />
      <path d="M124 59V34m0 28v68m-30 0h60m-60 5h60" stroke={c.line} />
      <rect x="116" y="26" width="16" height="8" rx="4" fill={c.surface} />
      <path d="M86 146h76v7H86v-7Z" fill={c.surface} />
    </StillLifeScene>
  )
}
