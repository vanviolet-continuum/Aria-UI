import type { IllustrationProps } from '../frame'
import {
  CollectionScene as EducationScene,
  sceneColors as c,
} from '../collections/collection-scene'
import { StudyBook, StudyPencil } from './education-parts'

export function LibraryCardIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <StudyBook x={64} y={33} scale={1.25} />
      <path d="M153 50h27v73h-27V50Z" fill={c.surface} stroke={c.line} />
      <path d="M161 59h12m-12 7h12m-12 38h12" stroke={c.line} />
      <rect x="89" y="94" width="118" height="64" rx="7" fill={c.surface} />
      <rect x="99" y="105" width="26" height="25" rx="3" fill={c.tint} stroke={c.line} />
      <path
        d="m103 116 9-5 9 5m-16 0v9m7-9v9m7-9v9m-17 0h20m14-15h55m-55 10h35m-70 25v-8m5 8v-8m5 8v-8m5 8v-8m8 8v-8m5 8v-8m5 8v-8m8 8v-8m6 8v-8m5 8v-8m7 8v-8m6 8v-8"
        stroke={c.line}
      />
      <path d="M48 120v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function BookStackIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M65 126h128v28H65c-18 0-18-28 0-28Z" fill={c.tint} />
      <path d="M67 134h121v12H67c-8 0-8-12 0-12Z" fill={c.surface} stroke={c.line} />
      <path d="M181 99H61v27h120c18 0 18-27 0-27Z" fill={c.surface} />
      <path d="M177 107H66v11h111c8 0 8-11 0-11Z" fill={c.tint} stroke={c.line} />
      <g transform="rotate(-9 124 83)">
        <path d="M73 69h119v28H73c-18 0-18-28 0-28Z" fill={c.tint} />
        <path d="M73 77h114v12H73c-8 0-8-12 0-12Z" fill={c.surface} stroke={c.line} />
      </g>
      <path d="M99 50h56v17H99V50Z" fill={c.surface} stroke={c.line} />
      <path d="m142 99 2 33 7-6 8 5-2-32" fill={c.accent} fillOpacity=".3" stroke={c.line} />
      <path d="M121 32v9m-4-4h8m65 3 4 6" stroke={c.accent} />
    </EducationScene>
  )
}

export function DictionaryIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M73 32h111v121H73c-14 0-14-22 0-22h111M73 32c-14 0-14 22 0 22" fill={c.tint} />
      <path d="M76 32v99m0 9h99" stroke={c.line} />
      <rect x="91" y="51" width="76" height="57" rx="4" fill={c.surface} />
      <path d="m104 89 10-23 10 23m-16-7h13m12-16h19l-19 23h19" strokeWidth="2.5" />
      <path d="M101 119h56m-50-9h44" stroke={c.line} />
      <path d="M184 52h13v16h-13m0 8h13v16h-13m0 8h13v16h-13" fill={c.surface} stroke={c.line} />
      <path d="M47 72h8m-4-4v8m151 64h12" stroke={c.accent} />
    </EducationScene>
  )
}

export function StorybookIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M50 110c31-12 56-8 80 5 24-13 49-17 80-5v39c-30-8-57-4-80 8-23-12-50-16-80-8v-39Z"
        fill={c.surface}
      />
      <path d="M130 115v42m-64-29c16-3 31 0 48 6m32 0c17-6 32-9 48-6" stroke={c.line} />
      <path d="M87 103V64h23v39m40 0V64h23v39m-63 0V79h40v24H87Z" fill={c.tint} />
      <path d="m82 64 17-24 17 24H82Zm63 0 17-24 17 24h-34Z" fill={c.surface} />
      <path d="M120 103V90h20v13m-44-29v9m66-9v9m-31-4V46m0 0 20 4-20 10" stroke={c.line} />
      <path d="M65 63v8m-4-4h8m126-25v10m-5-5h10m-25 51 4-5" stroke={c.accent} />
    </EducationScene>
  )
}

export function AudiobookIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <StudyBook x={98} y={64} scale={1.25} />
      <path
        d="M76 105V77a54 54 0 0 1 108 0v28m-97-1V77a43 43 0 0 1 86 0v27"
        fill={c.tint}
        stroke={c.line}
      />
      <rect x="68" y="94" width="25" height="47" rx="9" fill={c.surface} />
      <rect x="167" y="94" width="25" height="47" rx="9" fill={c.surface} />
      <path d="M79 103v29m100-29v29" stroke={c.line} strokeWidth="3" />
      <path d="m126 106 15 9-15 9v-18Z" fill={c.surface} stroke={c.accent} />
      <path d="M52 71v13m-7-9v5m163-9v13m7-9v5M84 155h93" stroke={c.line} />
    </EducationScene>
  )
}

export function BookmarkIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M64 54h94v101H64c-15 0-15-22 0-22h94" fill={c.surface} />
      <path d="M66 54v79m0 10h83" stroke={c.line} />
      <path d="M112 26h64v103l-32-21-32 21V26Z" fill={c.tint} />
      <path
        d="m144 44 5 11 12 2-9 8 2 12-10-6-10 6 2-12-9-8 12-2 5-11Z"
        fill={c.surface}
        stroke={c.accent}
      />
      <path d="M123 89h42m-35 9h28" stroke={c.line} />
      <path d="M184 78h18v16h-18m0 11h18v16h-18M86 33v8m-4-4h8m113 97 6 5" stroke={c.line} />
    </EducationScene>
  )
}

export function JournalIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="75" y="30" width="100" height="126" rx="7" fill={c.surface} />
      <path
        d="M92 31v124m-19-112h14m-14 17h14m-14 17h14m-14 17h14m-14 17h14m-14 17h14m-14 17h14"
        stroke={c.line}
      />
      <path d="M107 54h49m-49 11h33m-33 39h49m-49 12h49m-49 12h35" stroke={c.line} />
      <path d="M131 78c-7-8-18 1-10 9l10 8 10-8c8-8-3-17-10-9Z" fill={c.tint} stroke={c.accent} />
      <StudyPencil x={195} y={76} angle={17} scale={0.95} />
      <path d="m65 117-17 4 7 29 17-4" fill={c.tint} stroke={c.line} />
      <path d="M47 46v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function EssayWritingIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M78 27h88l18 19v111H78V27Z" fill={c.surface} />
      <path
        d="M166 27v20h18m-88 6h48m-48 12h65m-65 23h65m-65 12h53m-53 12h65m-65 23h65m-65 12h39"
        stroke={c.line}
      />
      <path d="M43 56h30v23H62l-8 9v-9H43V56Z" fill={c.tint} stroke={c.line} />
      <path d="m51 67 4 4 9-9m-17 49h21m-17 10h17m112-44h25m-25 10h15" stroke={c.accent} />
      <StudyPencil x={198} y={91} angle={22} scale={0.85} />
    </EducationScene>
  )
}

export function SpellingPracticeIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M57 84h148v71H57V84Z" fill={c.surface} />
      <path d="M69 102h124m-124 16h124m-124 16h124" stroke={c.line} strokeDasharray="4 4" />
      <rect
        x="65"
        y="37"
        width="37"
        height="37"
        rx="4"
        fill={c.tint}
        transform="rotate(-7 83 55)"
      />
      <rect x="111" y="34" width="37" height="37" rx="4" fill={c.surface} />
      <rect
        x="157"
        y="39"
        width="37"
        height="37"
        rx="4"
        fill={c.tint}
        transform="rotate(7 175 57)"
      />
      <path d="m76 63 7-17 8 17m-12-5h9m34-16v21h7c10 0 10-10 0-10h-7m0 0h7c9 0 9-11 0-11h-7m59 9c-16-10-20 17-3 17l5-2" />
      <path d="m82 146 5-9m-5 0 5 9m23-9v9m22-5h8m-8 5h8" stroke={c.accent} />
      <StudyPencil x={203} y={99} angle={16} scale={0.65} />
    </EducationScene>
  )
}

export function ReadingLampIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M44 147h172m-161 0v10m149-10v10" stroke={c.line} />
      <path d="M162 140V95l-25-35m-11-11 24-13 18 30-24 13-18-30Z" fill={c.surface} />
      <path d="m146 78-20 47h58l-20-47" fill={c.tint} stroke="none" opacity=".65" />
      <path d="M146 142h34" strokeWidth="4" />
      <path
        d="M64 105c24-8 43-4 60 6 17-10 36-14 60-6v29c-23-6-44-3-60 7-17-10-37-13-60-7v-29Z"
        fill={c.surface}
      />
      <path d="M124 111v30m-47-23c12-1 24 1 36 6m23 0c12-5 24-7 36-6" stroke={c.line} />
      <path d="M60 77h20v18H60V77Zm20 4h5c8 0 8 10-5 10m-13-22c-5-5 4-8 0-12" stroke={c.line} />
    </EducationScene>
  )
}
