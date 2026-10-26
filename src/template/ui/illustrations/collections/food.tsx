import type { IllustrationProps } from '../frame'
import { CollectionScene, sceneColors as c } from './collection-scene'

export function BreakfastIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="128" cy="113" rx="65" ry="42" fill={c.surface} stroke={c.line} />
      <ellipse cx="128" cy="113" rx="52" ry="31" stroke={c.line} />
      <path
        d="M91 96c-10 3-13 18-4 26-1 15 16 18 25 10 16 7 28-6 20-18 5-15-9-25-22-18-7-5-12-5-19 0Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="109" cy="113" r="11" fill={c.accent} fillOpacity=".45" />
      <path d="M147 88c-4-10 8-19 15-9 6-4 13 3 8 9l-10 35-23-7 10-28Z" fill={c.tint} />
      <path d="m146 94 18 5m-21 4 18 5m-21 3 18 5" stroke={c.line} />
      <path d="M46 76v29m-5-29v15c0 7 10 7 10 0V76m-5 29v45m165-74c-9 10-9 26 0 31v43m0-74v31" />
      <path d="M88 37h36v22c0 13-36 13-36 0V37Z" fill={c.surface} />
      <path
        d="M124 42h6c13 0 12 17-6 17m-26-32c-7-5 5-8 0-13m12 13c-7-5 5-8 0-13"
        stroke={c.line}
      />
      <ellipse cx="106" cy="37" rx="18" ry="4" fill={c.tint} />
    </CollectionScene>
  )
}

export function PizzaIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="130" cy="139" rx="86" ry="16" fill={c.surface} stroke={c.line} />
      <path d="M67 59c32-28 74-28 117 0l-55 88L67 59Z" fill={c.tint} />
      <path
        d="M64 60c-5-5-1-12 4-14 36-24 79-20 116 0 6 3 9 10 4 14l-4 3c-43-25-76-25-114 0l-6-3Z"
        fill={c.surface}
      />
      <path d="m90 94 10 5 4-12m38 16 8-4 6 6m-36-34 6-4 6 4m-4 59 3 6" stroke={c.line} />
      <circle cx="108" cy="74" r="9" fill={c.surface} />
      <circle cx="148" cy="75" r="10" fill={c.surface} />
      <circle cx="127" cy="108" r="9" fill={c.surface} />
      <path
        d="M162 46c-16 7-25-2-26-9 12-4 20 0 26 9ZM86 77c-3 11 4 17 11 17 3-9 0-14-11-17Z"
        fill={c.accent}
        fillOpacity=".3"
        stroke={c.line}
      />
      <path d="M164 134h18m-132-8h15" stroke={c.line} />
    </CollectionScene>
  )
}

export function SushiIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m48 111 122-14 45 37-125 18-42-41Z" fill={c.surface} stroke={c.line} />
      <path d="m48 111 2 9 40 39 125-18v-7m-125 18v7" stroke={c.line} />
      <path d="M75 87v28c0 15 42 15 42 0V87H75Z" fill={c.tint} />
      <ellipse cx="96" cy="87" rx="21" ry="12" fill={c.surface} />
      <ellipse cx="96" cy="87" rx="10" ry="6" fill={c.tint} stroke={c.accent} />
      <path d="M129 91v28c0 15 42 15 42 0V91h-42Z" fill={c.tint} />
      <ellipse cx="150" cy="91" rx="21" ry="12" fill={c.surface} />
      <ellipse cx="150" cy="91" rx="10" ry="6" fill={c.tint} stroke={c.accent} />
      <path d="m112 56 29-8 21 14-28 9-22-15Z" fill={c.tint} />
      <path d="m116 57 2 11 16 12 26-8 2-10m-28 9v9m-12-28 20 13m-10-16 19 12" stroke={c.line} />
      <path d="m50 50 127-21M48 58l130-17" strokeWidth="3" />
      <path d="m176 119 12-1 6 6-12 1-6-6Z" fill={c.tint} stroke={c.accent} />
    </CollectionScene>
  )
}

export function BurgerIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="130" cy="151" rx="79" ry="10" fill={c.surface} stroke={c.line} />
      <path d="M66 81c0-61 128-61 128 0H66Z" fill={c.tint} />
      <path d="M70 132h120c-1 17-12 21-25 21H95c-13 0-24-4-25-21Z" fill={c.tint} />
      <path
        d="M66 87c9-8 18 9 28 0s18 9 28 0 18 9 28 0 18 9 28 0 18 9 22 0v13H66V87Z"
        fill={c.surface}
        stroke={c.line}
      />
      <rect x="66" y="101" width="129" height="14" rx="7" fill={c.surface} />
      <path d="m71 115 30 5 14 13 14-15 27 11 17-12 18-2" fill={c.tint} stroke={c.accent} />
      <path d="M71 127h119" strokeWidth="8" stroke={c.line} />
      <path
        d="m102 56 3 3m21-13 2 4m23 4 4 2m-18 12 3 2m-52-2 4 1m42-11 3 2m-19 6 1 3m48-6 3 3"
        stroke={c.accent}
      />
      <path d="M52 145h12m133 0h14" stroke={c.line} />
    </CollectionScene>
  )
}

export function CupcakeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m83 100 14 54h68l14-54H83Z" fill={c.tint} />
      <path d="m101 110 7 36m12-36 2 36m18-36-2 36m23-36-7 36" stroke={c.line} />
      <path
        d="M88 102c-14 0-16-19-5-24-5-16 7-29 22-26 2-15 13-20 25-16 11-6 26 0 27 15 19-3 31 9 25 25 12 6 10 26-4 26H88Z"
        fill={c.surface}
      />
      <path d="M98 71c9-5 14-3 20 0m18 8c9-5 14-3 20 0m-44-26 12 2" stroke={c.line} />
      <circle cx="131" cy="27" r="10" fill={c.tint} stroke={c.accent} />
      <path d="M132 17c0-9 6-10 12-10" stroke={c.line} />
      <path d="m92 87 5-2m34 4 4 3m29-31 1 5m-29-21 4 1M66 122l-4 5m131 8 4 4" stroke={c.accent} />
    </CollectionScene>
  )
}

export function IceCreamIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m94 92 37 68 36-68H94Z" fill={c.tint} />
      <path d="m105 97 37 43m-22-43 28 32m-44-15 27-17m-20 30 40-25m-33 39 25-17" stroke={c.line} />
      <path
        d="M88 95c-12-2-11-19-1-22-3-16 7-25 21-24 3-15 21-22 33-11 18-5 32 7 28 24 17 2 24 22 10 32-5 5-10-2-15 2-6 7-12-3-19 1-7 7-12-4-19 0-8 6-11-5-17-1-7 4-13-1-21-1Z"
        fill={c.surface}
      />
      <path d="M100 66c5-11 21-13 27-5m12-12c9-3 17 3 17 11m-31 19c9-7 18-6 24 0" stroke={c.line} />
      <circle cx="128" cy="28" r="8" fill={c.tint} stroke={c.accent} />
      <path
        d="m129 20 5-8m-44 28 3 5m72 51 3 5m-51-31 4 1m-14-17 3 2m48 13-3 3"
        stroke={c.accent}
      />
    </CollectionScene>
  )
}

export function FruitBasketIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M70 102V80a60 60 0 0 1 120 0v22m-110 0V80a50 50 0 0 1 100 0v22" stroke={c.line} />
      <path d="M76 102c-16-27 9-45 27-32 15-12 37 6 23 32H76Z" fill={c.surface} />
      <path d="M102 70v-12m0 6c8-10 17-8 19-4-5 7-11 7-19 4Z" fill={c.tint} stroke={c.line} />
      <path
        d="M139 99c-4-26 3-35 8-43 5 28 19 26 25 38-7 11-22 11-33 5Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="174" cy="91" r="20" fill={c.surface} />
      <path d="M174 72c-1-6 3-8 8-9" stroke={c.line} />
      <path d="m62 103 16 50h108l15-50H62Z" fill={c.tint} />
      <path
        d="M66 114h132m-126 13h122m-118 13h114m-102-36 10 48m17-48 4 48m18-48v48m19-48-4 48m21-48-9 48"
        stroke={c.line}
      />
    </CollectionScene>
  )
}

export function TeaPotIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="132" cy="151" rx="77" ry="9" fill={c.surface} stroke={c.line} />
      <path d="M171 82c31-27 59 18 20 37l-7-10c22-13 11-37-8-19" stroke={c.line} strokeWidth="6" />
      <path d="M87 82c-10 5-21 7-37-3 2 27 18 45 44 44" fill={c.tint} />
      <path d="M96 71c-25 15-25 72 4 77h67c29-5 29-62 4-77H96Z" fill={c.surface} />
      <path d="M93 71c0-16 80-16 80 0H93Z" fill={c.tint} />
      <path d="M124 59v-7h16v7" fill={c.tint} />
      <path
        d="M133 87v44m0-29c-13 1-18-8-16-15 11 2 16 7 16 15Zm0 17c15-2 21-11 17-18-10 1-17 8-17 18Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M109 43c-9-9 8-11 1-20m24 20c-9-9 8-11 1-20m23 20c-9-9 8-11 1-20" stroke={c.line} />
    </CollectionScene>
  )
}

export function CookingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M72 89h114v42c0 15-114 15-114 0V89Z" fill={c.surface} />
      <path d="M72 97H54v15h18m114-15h18v15h-18M64 89h130" />
      <path d="M77 84c8-26 95-26 104 0H77Z" fill={c.tint} />
      <path d="M119 66v-7h22v7" fill={c.surface} />
      <path d="M83 103v24m8-24v16" stroke={c.line} />
      <rect x="66" y="144" width="128" height="12" rx="4" fill={c.tint} stroke={c.line} />
      <path d="m94 144 5-8m53 8 5-8" stroke={c.accent} />
      <path d="M96 50c-9-9 8-11 1-20m25 19c-9-9 8-11 1-20m24 20c-9-9 8-11 1-20" stroke={c.line} />
      <path d="m195 72 9-35c1-5 9-5 10 0l-3 39-16-4Z" fill={c.tint} stroke={c.line} />
      <path d="m199 60 10 2m-10-10 10 2M51 144h8" stroke={c.line} />
    </CollectionScene>
  )
}

export function PicnicIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m44 123 125-20 51 41-135 18-41-39Z" fill={c.surface} stroke={c.line} />
      <path
        d="m67 120 42 39m-12-43 42 39m-12-44 42 39m-12-44 40 38m-141-14 134-18m-124 28 135-18m-125 27 135-18"
        stroke={c.line}
      />
      <path d="m82 79 8 49h63l9-49H82Z" fill={c.tint} />
      <path
        d="M96 79V66a27 27 0 0 1 54 0v13m-43 0V66a16 16 0 0 1 32 0v13"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M86 93h72m-69 14h66m-52-27 4 47m29-47-4 47" stroke={c.line} />
      <path d="M172 97h24v32h-24V97Z" fill={c.surface} />
      <path d="M196 102h6c8 0 8 16-6 16m-18-31c-5-5 5-8 0-12" stroke={c.line} />
      <path d="M51 93c-7-10-5-18 3-19 9 3 8 12-3 19Z" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
