import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function CandleIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <ellipse cx="130" cy="152" rx="57" ry="7" fill={c.tint} stroke={c.line} />
      <path d="M88 73h84v65c0 16-84 16-84 0V73Z" fill={c.surface} />
      <ellipse cx="130" cy="73" rx="42" ry="9" fill={c.tint} />
      <path d="M130 72V55" stroke={c.line} />
      <path d="M130 55c-15-4-12-16-1-29-1 12 15 19 1 29Z" fill={c.tint} stroke={c.accent} />
      <rect x="108" y="98" width="44" height="32" rx="4" fill={c.tint} stroke={c.line} />
      <path
        d="M126 120c-6-12 1-19 9-17 1 9-2 14-9 17Zm1-1 7-13M97 91v43m64-43v43"
        stroke={c.line}
      />
      <path d="m111 41-5-4m43 4 5-4" stroke={c.line} />
    </StillLifeScene>
  )
}
