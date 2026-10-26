import type { IllustrationProps } from '../frame'
import { StillLifeScene, colors as c } from './still-life-scene'

export function ArmchairIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <rect x="75" y="49" width="110" height="88" rx="22" fill={c.tint} />
      <rect x="87" y="63" width="86" height="55" rx="13" fill={c.surface} stroke={c.line} />
      <path d="M130 68v39" stroke={c.line} />
      <rect x="86" y="113" width="88" height="28" rx="9" fill={c.tint} stroke={c.line} />
      <rect x="58" y="80" width="28" height="63" rx="13" fill={c.surface} />
      <rect x="174" y="80" width="28" height="63" rx="13" fill={c.surface} />
      <path d="M67 102v23m126-23v23M75 143v12h9l4-12m84 0 4 12h9v-12" stroke={c.line} />
      <g transform="rotate(-8 113 88)">
        <rect x="96" y="74" width="34" height="28" rx="7" fill={c.tint} stroke={c.line} />
        <path d="M103 81h20m-20 14h20" stroke={c.line} />
      </g>
      <path d="M91 145h78" stroke={c.line} />
    </StillLifeScene>
  )
}

export function PendantLampIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="m104 115-25 38h102l-25-38" fill={c.tint} stroke="none" opacity=".6" />
      <path d="M103 23h54m-27 0v35" stroke={c.line} />
      <rect x="117" y="57" width="26" height="12" rx="5" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="111" r="11" fill={c.tint} stroke={c.accent} />
      <path d="M82 107c7-30 23-44 48-44s41 14 48 44H82Z" fill={c.surface} />
      <path d="M99 93c5-10 12-17 22-20" stroke={c.line} />
      <ellipse cx="130" cy="107" rx="48" ry="8" fill={c.surface} />
      <path d="M94 108h72M89 153h82" stroke={c.line} />
    </StillLifeScene>
  )
}

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

export function WallShelfIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M65 79h12v45H65V79Zm16 6h12v39H81V85Z" fill={c.surface} />
      <path d="M66 91h10m6 30h10" stroke={c.line} />
      <g transform="rotate(-8 101 106)">
        <rect x="95" y="79" width="13" height="45" rx="2" fill={c.tint} stroke={c.line} />
        <path d="M96 87h11m-11 29h11" stroke={c.line} />
      </g>
      <path
        d="M129 103V74m0 16c-17 0-22-12-18-20 13 1 20 10 18 20Zm0-9c1-18 13-26 24-21 0 13-10 21-24 21Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m114 102 4 22h22l4-22h-30Z" fill={c.surface} />
      <rect x="162" y="70" width="37" height="54" rx="3" fill={c.surface} />
      <path d="M168 77h25v39h-25V77Z" fill={c.tint} stroke={c.line} />
      <path d="m168 110 10-13 7 7 8-9" stroke={c.line} />
      <circle cx="184" cy="86" r="3" fill={c.accent} stroke="none" />
      <rect x="47" y="124" width="166" height="9" rx="2" fill={c.tint} />
      <path d="M66 134v12h14m100-12v12h14" stroke={c.line} />
    </StillLifeScene>
  )
}

export function WateringCanIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M76 98C40 66 35 136 74 132m2-23c-22-22-24 17-2 12" fill={c.tint} stroke={c.line} />
      <path d="m148 109 32-33 13 9-33 50-12-26Z" fill={c.tint} />
      <ellipse cx="190" cy="80" rx="9" ry="14" transform="rotate(-34 190 80)" fill={c.surface} />
      <path d="m186 75 6 9m-1-13 6 9" stroke={c.line} />
      <rect x="72" y="89" width="88" height="60" rx="13" fill={c.surface} />
      <path d="M81 83h70v10H81V83Z" fill={c.tint} />
      <path d="M89 83V70a27 27 0 0 1 54 0v13m-45 0V70a18 18 0 0 1 36 0v13" stroke={c.line} />
      <path d="M82 104v28m6 8h55" stroke={c.line} />
      <path d="M115 125c-6-13 3-22 12-20 2 10-4 17-12 20Z" fill={c.tint} stroke={c.line} />
    </StillLifeScene>
  )
}

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
