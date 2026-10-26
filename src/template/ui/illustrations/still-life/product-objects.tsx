import type { IllustrationProps } from '../frame'
import { StillLifeScene, colors as c } from './still-life-scene'

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

export function VinylPlayerIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M62 66V39a6 6 0 0 1 6-6h126a6 6 0 0 1 6 6v27" fill={c.tint} stroke={c.line} />
      <path d="M73 44h116m-116 9h62" stroke={c.line} />
      <rect x="52" y="65" width="156" height="83" rx="9" fill={c.surface} />
      <path d="M53 122h154" stroke={c.line} />
      <ellipse cx="108" cy="93" rx="43" ry="25" fill={c.tint} />
      <ellipse cx="108" cy="93" rx="32" ry="18" stroke={c.line} />
      <ellipse cx="108" cy="93" rx="21" ry="12" stroke={c.line} />
      <ellipse cx="108" cy="93" rx="9" ry="5" fill={c.surface} stroke={c.accent} />
      <circle cx="178" cy="85" r="7" fill={c.tint} stroke={c.line} />
      <path d="M178 85v17l-19 12m-4-2 8 5" strokeWidth="2.5" />
      <circle cx="72" cy="135" r="5" fill={c.tint} stroke={c.line} />
      <circle cx="185" cy="135" r="5" fill={c.tint} stroke={c.line} />
      <path d="M91 135h49m-69 13v6m118-6v6" stroke={c.line} />
    </StillLifeScene>
  )
}

export function PortableRadioIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path
        d="M87 65V48a7 7 0 0 1 7-7h69a7 7 0 0 1 7 7v17m-73 0V51h63v14m11 0 28-38"
        stroke={c.line}
      />
      <circle cx="200" cy="25" r="3" fill={c.surface} stroke={c.line} />
      <rect x="56" y="65" width="148" height="86" rx="11" fill={c.surface} />
      <circle cx="95" cy="107" r="27" fill={c.tint} />
      <circle cx="95" cy="107" r="19" stroke={c.line} />
      <circle cx="95" cy="107" r="11" stroke={c.line} />
      <circle cx="95" cy="107" r="4" fill={c.surface} stroke={c.line} />
      <rect x="137" y="80" width="53" height="17" rx="3" fill={c.tint} stroke={c.line} />
      <path d="M145 85v6m8-6v3m9-3v6m9-6v3m10-3v6" stroke={c.line} />
      <path d="M166 81v15" stroke={c.accent} />
      <circle cx="149" cy="117" r="8" fill={c.tint} stroke={c.line} />
      <circle cx="180" cy="117" r="8" fill={c.tint} stroke={c.line} />
      <path d="m149 117 3-4m28 4 3-4m-43 25h49m-117 13v4m116-4v4" stroke={c.line} />
    </StillLifeScene>
  )
}

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

export function TableFanIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M122 110h16l6 37h-28l6-37Z" fill={c.tint} stroke={c.line} />
      <rect x="96" y="147" width="68" height="10" rx="5" fill={c.surface} />
      <circle cx="130" cy="69" r="43" fill={c.surface} />
      <path d="M130 27v84M88 69h84" stroke={c.line} />
      <g fill={c.tint} stroke={c.line}>
        <path d="M130 69c-25 10-35-12-20-21 16-8 25 8 20 21Z" />
        <path d="M130 69c-25 10-35-12-20-21 16-8 25 8 20 21Z" transform="rotate(120 130 69)" />
        <path d="M130 69c-25 10-35-12-20-21 16-8 25 8 20 21Z" transform="rotate(240 130 69)" />
      </g>
      <circle cx="130" cy="69" r="35" stroke={c.line} />
      <circle cx="130" cy="69" r="7" fill={c.surface} />
      <path d="M130 116v20m-9 16h18" stroke={c.line} />
      <circle cx="152" cy="152" r="1.5" fill={c.accent} stroke="none" />
    </StillLifeScene>
  )
}

export function MechanicalKeyboardIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M130 72V53c0-14 28-12 28-26" stroke={c.line} />
      <rect x="152" y="21" width="12" height="9" rx="3" fill={c.surface} stroke={c.line} />
      <rect x="44" y="72" width="172" height="83" rx="10" fill={c.surface} />
      {[0, 1, 2].map((row) => (
        <g key={row} fill={row === 0 ? c.tint : c.surface} stroke={c.line}>
          {Array.from({ length: 10 }, (_, column) => (
            <rect
              key={column}
              x={56 + column * 15}
              y={83 + row * 15}
              width="12"
              height="10"
              rx="2"
            />
          ))}
        </g>
      ))}
      <rect x="56" y="130" width="32" height="11" rx="3" fill={c.tint} stroke={c.line} />
      <rect x="96" y="130" width="65" height="11" rx="3" fill={c.tint} stroke={c.line} />
      <rect x="169" y="130" width="34" height="11" rx="3" fill={c.surface} stroke={c.line} />
      <path d="M62 87h3m14 0h3m12 0h3m-41 63h134" stroke={c.line} />
      <circle cx="201" cy="77" r="1.5" fill={c.accent} stroke="none" />
    </StillLifeScene>
  )
}

export function CoffeeGrinderIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M130 71V49h47" strokeWidth="2.5" />
      <ellipse cx="185" cy="49" rx="12" ry="6" fill={c.surface} />
      <circle cx="130" cy="49" r="3" fill={c.tint} stroke={c.line} />
      <path d="M83 73h94l-12 29H96L83 73Z" fill={c.tint} />
      <ellipse cx="130" cy="73" rx="47" ry="8" fill={c.surface} />
      <path d="M96 80h68" stroke={c.line} />
      <path d="M110 102h40v8h-40v-8Z" fill={c.surface} stroke={c.line} />
      <rect x="84" y="110" width="92" height="44" rx="5" fill={c.surface} />
      <rect x="96" y="121" width="68" height="23" rx="3" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="132" r="3" fill={c.surface} />
      <path d="M89 154v3m82-3v3m-78-41h74" stroke={c.line} />
    </StillLifeScene>
  )
}

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
