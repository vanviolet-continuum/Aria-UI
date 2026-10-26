import type { IllustrationProps } from '../frame'
import { StillLifeScene, colors as c } from './still-life-scene'

export function BonsaiIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path
        d="M118 132c17-19 0-36 13-56l-17-15 7-7 22 18c-11 25 4 42-10 60h-15Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m133 99 32-22m-37 27-29-21" stroke={c.line} strokeWidth="3" />
      <path d="M98 53c-3-23 24-32 38-22 19-13 43 1 37 23-18 11-52 13-75-1Z" fill={c.tint} />
      <path
        d="M56 84c0-19 18-27 31-20 17-11 39 2 34 20-18 9-47 9-65 0Zm93-2c-2-17 17-26 30-18 16-9 35 3 29 20-17 8-42 8-59-2Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M111 48c7-6 15-7 23-3m-62 31c7-5 15-5 22-2m70 0c7-4 15-4 22-1" stroke={c.line} />
      <ellipse cx="130" cy="132" rx="48" ry="7" fill={c.surface} stroke={c.line} />
      <path d="m83 132 9 23h76l9-23c-24 8-70 8-94 0Z" fill={c.surface} />
      <path d="M99 145h62m-62 10v3m62-3v3" stroke={c.line} />
    </StillLifeScene>
  )
}

export function MonsteraIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M130 132c-3-22-10-41-25-59m25 59c0-24 10-43 28-65" stroke={c.line} />
      <path
        d="M124 102c-31 0-59-19-45-41 8-13 23-11 30 2 3-17 18-17 25-6 10 17 1 36-10 45Z"
        fill={c.tint}
      />
      <path
        d="M139 89c-15-25-6-58 16-57 16 0 22 12 14 25 17-5 26 8 18 20-12 18-32 20-48 12Z"
        fill={c.tint}
      />
      <path d="M124 102 98 69m41 20 22-42" stroke={c.line} />
      <path
        d="m86 72 14 6m-12 7 21 6m20-22-9 12m43-42-1 14m18 5-17 7m10 9-18 2"
        stroke={c.surface}
        strokeWidth="3.5"
      />
      <path d="m105 128 6 29h39l6-29h-51Z" fill={c.surface} />
      <path d="M107 135h47m-37 7 2 9m23-9-2 9" stroke={c.line} />
    </StillLifeScene>
  )
}

export function FernIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <g fill={c.tint} stroke={c.line}>
        <path d="M134 53c-13-10-9-23 0-28 8 8 9 18 0 28Z" />
        <path d="M131 70c-18-1-26-12-22-23 15 4 23 12 22 23Z" />
        <path d="M132 79c2-19 14-29 27-25-4 16-14 24-27 25Z" />
        <path d="M130 88c-21 0-35-13-32-26 19 4 30 13 32 26Z" />
        <path d="M130 101c3-21 18-33 35-28-6 18-19 27-35 28Z" />
        <path d="M130 109c-25 0-41-13-38-29 22 4 36 14 38 29Z" />
        <path d="M129 124c5-19 20-28 36-21-7 14-19 21-36 21Z" />
      </g>
      <path
        d="M130 133c0-38-3-56 4-91m-4 65L99 88m32 9 26-17m-26-12-16-15m18 24 19-17"
        stroke={c.line}
      />
      <path d="m107 130 6 27h34l6-27h-46Z" fill={c.surface} />
      <path d="M109 137h42m-30 7v7m18-7v7" stroke={c.line} />
    </StillLifeScene>
  )
}

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
