import type { IllustrationProps } from '../frame'
import { CollectionScene, SceneCloud, ScenePlant, sceneColors as c } from './collection-scene'

export function HomeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M71 78h118v76H71V78Z" fill={c.surface} />
      <path d="m54 81 76-51 76 51-10 12-66-44-66 44-10-12Z" fill={c.tint} />
      <path d="M168 53V29h15v34" fill={c.surface} stroke={c.line} />
      <rect x="113" y="106" width="31" height="48" rx="3" fill={c.tint} />
      <circle cx="136" cy="132" r="2" fill={c.ink} stroke="none" />
      <path d="M83 98h20v25H83V98Zm72 0h20v25h-20V98Z" fill={c.tint} stroke={c.line} />
      <path d="M93 99v23m-9-11h18m63-12v23m-9-11h18M62 155h140" stroke={c.line} />
      <ScenePlant x={40} y={114} scale={0.65} />
      <path d="M203 150v-27m-12 12h24m-24 9h24m-24-20v29m24-29v29" stroke={c.line} />
      <SceneCloud x={62} y={22} scale={0.55} />
    </CollectionScene>
  )
}

export function KeyIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M104 88c-2 27-38 38-56 16S43 49 69 46c18-2 33 8 37 24l69 1 19 19-16 17-15-13-13 12-13-13-33-5Z"
        fill={c.surface}
      />
      <circle cx="73" cy="74" r="12" fill={c.tint} stroke={c.line} />
      <path d="M109 79h62m0 0 12 11" stroke={c.line} />
      <path d="M109 89c19 5 28 22 30 36" stroke={c.line} />
      <path d="m128 126 27-7 18 29-27 8-18-30Z" fill={c.tint} />
      <circle cx="142" cy="130" r="3" fill={c.surface} stroke={c.line} />
      <path d="m145 140 14-4m-10 11 13-4" stroke={c.line} />
      <path d="M206 68v10m-5-5h10m-131 64v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}

export function UmbrellaIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M57 91c4-69 142-69 147 0-11-13-25-13-36 0-11-13-25-13-37 0-11-13-25-13-37 0-11-13-25-13-37 0Z"
        fill={c.surface}
      />
      <path
        d="M94 91c0-27 15-49 37-58 22 9 37 31 37 58-11-13-25-13-37 0-11-13-25-13-37 0Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M131 33v-9m0 67v45c0 23-27 22-27 4" strokeWidth="3" />
      <path
        d="m53 49-4 9m29-25-4 9m114-9-4 9m27 17-4 9m-147 47-4 9m141-11-4 9m-109 8-3 7m90-6-3 7"
        stroke={c.line}
      />
      <ellipse cx="133" cy="158" rx="55" ry="5" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}

export function BackpackIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M109 41v-9a7 7 0 0 1 7-7h28a7 7 0 0 1 7 7v9m-32-2v-5h22v5M83 58c-14 12-16 39-12 72m106-72c14 12 16 39 12 72"
        stroke={c.line}
      />
      <path
        d="M80 69a50 50 0 0 1 100 0v74a10 10 0 0 1-10 10H90a10 10 0 0 1-10-10V69Z"
        fill={c.surface}
      />
      <path d="M90 73a40 40 0 0 1 80 0" stroke={c.line} />
      <path d="M92 69h76v23a7 7 0 0 1-7 7H99a7 7 0 0 1-7-7V69Z" fill={c.tint} stroke={c.line} />
      <rect x="96" y="108" width="68" height="35" rx="7" fill={c.tint} />
      <path d="M97 121h66m-13 0v7m-27-46h14v22h-14V82Z" fill={c.surface} stroke={c.line} />
      <path d="M70 109H59v31h21m100-31h21v31h-21m-115-19h10m112 0h10" stroke={c.line} />
    </CollectionScene>
  )
}

export function ShoesIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m96 53 29 14 18 32 47 17c17 6 20 20 9 24H80V98l16-45Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M83 97c4 5 13 5 18-1l6-6 30 32 38 10c13 4 15 19 4 22H48v-19c2-15 16-15 22-33l2-13 11 8Z"
        fill={c.surface}
      />
      <path
        d="M49 144h137m-81-27 15-9m-7 17 15-9m-7 17 15-9M79 105l-8 24H52m39-15 20 22 35 2m-27-54 12-7m-5 17 13-8m-7 18 14-7"
        stroke={c.line}
      />
      <path d="M151 117c6-5 12-5 15-1m-6-4 2 8" stroke={c.accent} />
      <path d="M55 70h16m-9-13h18m108 41h17" stroke={c.line} />
    </CollectionScene>
  )
}

export function ShoppingBagIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M70 69h104l9 84H61l9-84Z" fill={c.surface} />
      <path d="M94 76V48a28 28 0 0 1 56 0v28" />
      <path d="m71 70 9 83m93-83-9 83" stroke={c.line} />
      <path
        d="M119 102s-9-13-18-4c-13 13 18 29 18 29s31-16 18-29c-9-9-18 4-18 4Z"
        fill={c.tint}
        stroke={c.accent}
      />
      <path d="M165 97h35l8 58h-35l-8-58Z" fill={c.tint} stroke={c.line} />
      <path d="M176 101V85c0-16 17-16 17 0v16" stroke={c.line} />
      <path d="M47 113v10m-5-5h10m139-66v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}

export function LaundryIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="64" y="34" width="112" height="123" rx="8" fill={c.surface} />
      <path d="M64 62h112" stroke={c.line} />
      <rect x="75" y="44" width="28" height="9" rx="2" fill={c.tint} stroke={c.line} />
      <circle cx="155" cy="48" r="6" fill={c.tint} />
      <circle cx="120" cy="109" r="35" fill={c.tint} />
      <circle cx="120" cy="109" r="26" fill={c.surface} stroke={c.line} />
      <path d="M96 116c8-11 14 10 24 0s17 10 24 0m-31-27c-8 2-14 9-15 16" stroke={c.line} />
      <path d="M181 94V76h17v18l7 6v48h-31v-48l7-6Z" fill={c.tint} stroke={c.line} />
      <path d="M178 119h23m-17-35h10m-17 53h25" stroke={c.line} />
      <circle cx="191" cy="47" r="7" fill={c.surface} stroke={c.line} />
      <circle cx="208" cy="60" r="4" stroke={c.line} />
    </CollectionScene>
  )
}

export function CleaningIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m89 89 8-28h16l9 8-13 6-5 18" fill={c.surface} />
      <path d="M98 61V49h26l10 10-12 10m-9-7v8" stroke={c.line} />
      <path d="M91 89h17l10 15v49H78v-49l13-15Z" fill={c.tint} />
      <path d="M80 117h36v23H80v-23Z" fill={c.surface} stroke={c.line} />
      <path d="M93 123v11m-5-5h10" stroke={c.accent} />
      <path d="m159 120 19-91 7 2-18 91" fill={c.surface} />
      <path d="m145 117 34 7 8 30h-63l21-37Z" fill={c.tint} />
      <path d="m146 130-10 24m19-22-5 22m14-20v20m9-19 4 19" stroke={c.line} />
      <path
        d="M52 78v14m-7-7h14m91-24v10m-5-5h10m-11 39v8m-4-4h8m52-25v10m-5-5h10"
        stroke={c.accent}
      />
      <circle cx="63" cy="116" r="5" stroke={c.line} />
    </CollectionScene>
  )
}

export function PetDogIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M120 93c34-7 59 5 62 21 20 2 25-10 19-17 23 11 10 35-18 30v25h-18v-26h-26v26h-17l-2-59Z"
        fill={c.tint}
      />
      <path d="M85 74c-22-16-25 1-16 24l15 1m24-25c22-16 25 1 16 24l-15 1" fill={c.surface} />
      <path d="M79 77c9-17 30-17 39 0v26c0 28-39 28-39 0V77Z" fill={c.surface} />
      <path d="M86 104c7-8 18-8 25 0m-17 2h11l-5 6-6-6Z" fill={c.tint} />
      <path d="M88 89v4m22-4v4m-10 19v6m-7 1c4 3 10 3 14 0" stroke={c.line} />
      <path d="M80 126h39v7H80v-7Z" fill={c.tint} stroke={c.accent} />
      <circle cx="101" cy="137" r="5" fill={c.surface} stroke={c.accent} />
      <path
        d="M73 154H56c-7 4-7 11 0 11 5 6 13 3 13-1h13c0 4 8 7 13 1 7 0 7-7 0-11H78"
        stroke={c.line}
      />
    </CollectionScene>
  )
}

export function PetCatIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M113 102c36-10 57 9 53 37 30 8 44-16 29-28-11-8-4-18 5-11 30 27 4 67-47 49H99l14-47Z"
        fill={c.tint}
      />
      <path
        d="m78 77-1-32 27 18c10-4 18-4 28 0l27-18-1 32c15 32-6 49-40 49S63 109 78 77Z"
        fill={c.surface}
      />
      <path d="m83 73-1-18 16 13m37 0 17-13-1 18m-32-8v13m-11-11 2 9m20-9-2 9" stroke={c.line} />
      <path
        d="m93 90 6 3 6-3m26 0 6 3 6-3m-30 12h10l-5 5-5-5Zm5 5v5m-7 0c4 3 10 3 14 0"
        stroke={c.line}
      />
      <path
        d="m91 104-22-2m22 8-20 5m73-11 22-2m-22 8 20 5M101 148h34m-25-15v15m17-15v15"
        stroke={c.line}
      />
      <circle cx="69" cy="142" r="13" fill={c.surface} stroke={c.line} />
      <path d="m60 133 17 17m-22-7 19-12m-9 24 15-18" stroke={c.line} />
    </CollectionScene>
  )
}
