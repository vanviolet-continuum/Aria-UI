import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function InstantCameraIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M75 89V49a8 8 0 0 1 8-8h94a8 8 0 0 1 8 8v40" fill={c.surface} />
      <path d="M75 80h110" stroke={c.line} />
      <rect x="84" y="49" width="20" height="12" rx="3" fill={c.tint} stroke={c.line} />
      <rect x="162" y="49" width="14" height="9" rx="2" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="70" r="21" fill={c.tint} />
      <circle cx="130" cy="70" r="13" fill={c.surface} stroke={c.line} />
      <path d="M123 65c2-3 5-4 8-4" stroke={c.accent} />
      <path d="M75 87h110l15 20v25a7 7 0 0 1-7 7H67a7 7 0 0 1-7-7v-25l15-20Z" fill={c.tint} />
      <path d="M68 112h124" stroke={c.line} strokeWidth="3" />
      <path d="M94 113h72v45H94v-45Z" fill={c.surface} />
      <path d="M102 121h56v25h-56v-25Z" fill={c.tint} stroke={c.line} />
      <path d="m103 144 16-16 12 10 9-7 17 13" stroke={c.line} />
      <circle cx="146" cy="127" r="3" fill={c.accent} stroke="none" />
    </StillLifeScene>
  )
}
