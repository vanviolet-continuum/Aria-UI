import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function MushroomsIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M91 87c5 26 4 44-3 62h37c-8-18-8-36-3-62H91Z" fill={c.surface} stroke={c.line} />
      <path d="M58 85c6-61 87-61 93 0H58Z" fill={c.tint} />
      <ellipse cx="104.5" cy="85" rx="46.5" ry="8" fill={c.surface} stroke={c.line} />
      <path d="m76 85 17 5m10-5v7m11-7 18 3M99 105v29" stroke={c.line} />
      <g fill={c.surface} stroke="none">
        <circle cx="87" cy="63" r="5" />
        <circle cx="119" cy="57" r="6" />
        <circle cx="134" cy="73" r="3" />
      </g>
      <path d="M164 119c2 12 2 21-3 30h25c-5-10-5-19-3-30" fill={c.surface} stroke={c.line} />
      <path d="M143 118c5-38 54-38 60 0h-60Z" fill={c.tint} />
      <ellipse cx="173" cy="118" rx="30" ry="5" fill={c.surface} stroke={c.line} />
      <circle cx="166" cy="104" r="4" fill={c.surface} stroke="none" />
      <path d="M53 151h155m-144-1-5-8m9 8 3-10m123 10 4-8" stroke={c.line} />
    </StillLifeScene>
  )
}
