import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function CeramicVaseIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="m129 53 18-30m-11 18-12-14m13 10 17-3" stroke={c.line} />
      <path
        d="M146 25c-2-12 8-18 15-14-1 9-7 14-15 14Zm-21 4c-13 1-20-8-16-15 10 0 15 6 16 15Zm28 6c2-12 12-16 18-9-4 8-10 10-18 9Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M115 52h30v32c29 15 34 49 18 68H97c-16-19-11-53 18-68V52Z" fill={c.surface} />
      <ellipse cx="130" cy="52" rx="15" ry="4" fill={c.tint} />
      <path
        d="M115 84c7 5 23 5 30 0m-38 18c-11 14-13 29-8 40m61-36c8 13 8 25 4 36"
        stroke={c.line}
      />
      <path d="M103 146h54" stroke={c.line} />
    </StillLifeScene>
  )
}
