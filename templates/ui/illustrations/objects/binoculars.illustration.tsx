import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function BinocularsIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M107 84h46v18h-46V84Z" fill={c.tint} stroke={c.line} />
      <path
        d="M75 65h35l11 61c0 26-58 26-58 0l12-61Zm75 0h35l12 61c0 26-58 26-58 0l11-61Z"
        fill={c.surface}
      />
      <rect x="75" y="43" width="35" height="25" rx="8" fill={c.tint} />
      <rect x="150" y="43" width="35" height="25" rx="8" fill={c.tint} />
      <path d="M81 54h23m52 0h23M79 78l-6 30m104-30 6 30" stroke={c.line} />
      <ellipse cx="92" cy="126" rx="29" ry="20" fill={c.tint} />
      <ellipse cx="168" cy="126" rx="29" ry="20" fill={c.tint} />
      <ellipse cx="92" cy="126" rx="20" ry="13" fill={c.surface} stroke={c.line} />
      <ellipse cx="168" cy="126" rx="20" ry="13" fill={c.surface} stroke={c.line} />
      <path d="M80 122c3-4 7-5 12-5m64 5c3-4 7-5 12-5" stroke={c.accent} />
      <circle cx="130" cy="83" r="10" fill={c.surface} />
      <path d="M124 80h12m-12 6h12M83 154h94" stroke={c.line} />
    </StillLifeScene>
  )
}
