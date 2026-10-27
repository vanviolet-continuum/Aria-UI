import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function PebbleGardenIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <rect x="47" y="105" width="166" height="46" rx="13" fill={c.surface} />
      <rect x="56" y="113" width="148" height="29" rx="9" fill={c.tint} stroke={c.line} />
      <path d="M66 121c25-8 49-8 76-1m-75 8c24-7 48-7 72-1m-68 8c22-5 43-5 63 0" stroke={c.line} />
      <ellipse cx="168" cy="119" rx="26" ry="10" fill={c.surface} stroke={c.line} />
      <ellipse cx="167" cy="104" rx="20" ry="9" fill={c.tint} />
      <ellipse cx="166" cy="91" rx="14" ry="7" fill={c.surface} stroke={c.line} />
      <path
        d="M95 106c1-16 6-31 15-44m-10 25c-20 1-29-11-24-23 14 2 23 11 24 23Zm4-10c-4-20 4-34 16-34 5 16-1 27-16 34Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M65 151v4m130-4v4" stroke={c.line} />
    </StillLifeScene>
  )
}
