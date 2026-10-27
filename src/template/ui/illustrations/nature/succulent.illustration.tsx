import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function SucculentIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path
        d="M129 113c-33-11-43-31-36-45 20 0 38 19 36 45Zm2 0c33-11 43-31 36-45-20 0-38 19-36 45Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M130 113c-23-27-13-47 0-58 13 11 23 31 0 58Z" fill={c.tint} />
      <path
        d="M130 114c-40 7-56-10-57-24 24-8 45 2 57 24Zm0 0c40 7 56-10 57-24-24-8-45 2-57 24Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M130 119c-27 6-42-4-45-18 20-6 37 0 45 18Zm0 0c27 6 42-4 45-18-20-6-37 0-45 18Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M130 120c-15-13-9-30 0-38 9 8 15 25 0 38Z" fill={c.tint} />
      <path d="M130 88v25" stroke={c.line} />
      <path d="m102 124 7 32h42l7-32h-56Z" fill={c.surface} />
      <ellipse cx="130" cy="124" rx="28" ry="5" fill={c.tint} stroke={c.line} />
      <path d="M106 136h48m-40 12h32" stroke={c.line} />
    </StillLifeScene>
  )
}
