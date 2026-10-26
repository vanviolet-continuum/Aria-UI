import type { IllustrationProps } from '../frame'
import { ScenePerson } from '../scenes/scene-person'
import {
  CollectionScene as EducationScene,
  sceneColors as c,
} from '../collections/collection-scene'
import { StudyPencil } from './education-parts'

export function DrawingLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M65 35h111v119H65V35Z" fill={c.surface} />
      <path
        d="M76 35v119m-13-106h15m-15 17h15m-15 17h15m-15 17h15m-15 17h15m-15 17h15"
        stroke={c.line}
      />
      <path d="m95 117 24-40 25 40H95Z" fill={c.tint} stroke={c.line} />
      <circle cx="144" cy="72" r="17" stroke={c.line} />
      <path d="M87 132h77M93 55h24m-24 8h16m17 61 26-17" stroke={c.line} />
      <StudyPencil x={201} y={58} angle={19} scale={1.1} />
      <path d="M43 90v10m-5-5h10" stroke={c.accent} />
    </EducationScene>
  )
}

export function WatercolorClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M58 34h103v97H58V34Z" fill={c.surface} />
      <path
        d="M74 102c-17-17 9-34 21-17-9-32 24-47 32-16 21-10 30 12 8 31 18 23-37 29-61 2Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m90 88 29-22m-20 41 31-17" stroke={c.accent} />
      <rect x="68" y="135" width="128" height="23" rx="5" fill={c.surface} />
      <g fill={c.tint} stroke={c.line}>
        <circle cx="83" cy="146" r="6" />
        <circle cx="105" cy="146" r="6" />
        <circle cx="127" cy="146" r="6" />
        <circle cx="149" cy="146" r="6" />
        <circle cx="171" cy="146" r="6" />
      </g>
      <path
        d="m177 120 15-54 7 2-15 54m5-55c-9-8 3-17 9-23-2 10 7 20 1 23M169 99h35l-4 31h-27l-4-31Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M173 112h28" stroke={c.line} />
    </EducationScene>
  )
}

export function PotteryClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <ellipse cx="130" cy="130" rx="65" ry="14" fill={c.surface} />
      <path d="M65 130v9c0 19 130 19 130 0v-9m-78 17v11m26-11v11m-37 0h48" stroke={c.line} />
      <path d="M110 64h40c-4 17-2 21 10 35 14 23-45 35-58 13-11-17 11-28 8-48Z" fill={c.tint} />
      <ellipse cx="130" cy="64" rx="20" ry="6" fill={c.surface} />
      <path
        d="M108 88c12 7 35 7 45 0m-49 13c13 9 40 9 54 0m-50 12c13 7 32 7 45 0"
        stroke={c.line}
      />
      <path
        d="m51 59 27 17 20 8m-47-13 26 17 22 4m110-34-26 18-20 9m46-13-25 16-21 5"
        stroke={c.line}
        strokeWidth="3"
      />
      <path d="M127 30v12m-6-6h12" stroke={c.accent} />
    </EducationScene>
  )
}

export function MusicLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M69 36h121l7 81H62l7-81Z" fill={c.surface} />
      <path d="M78 52h100m-100 9h100m-100 9h100m-100 9h100m-100 9h100" stroke={c.line} />
      <path d="M100 81V58l20-5v23m-20-13 20-5m22 18V52l20 6" stroke={c.accent} />
      <ellipse cx="94" cy="84" rx="6" ry="4" fill={c.tint} />
      <ellipse cx="114" cy="79" rx="6" ry="4" fill={c.tint} />
      <ellipse cx="136" cy="79" rx="6" ry="4" fill={c.tint} />
      <path d="M130 117v34m-20 7 20-12 20 12m-99-33 15 10m-5-17 5 17-17 3" stroke={c.line} />
      <path d="m183 116 7-1 14 41-8 2-13-42Z" fill={c.tint} />
      <path d="m190 132 8-3m-5 12 7-2m-4 10 7-2" stroke={c.line} />
    </EducationScene>
  )
}

export function PianoLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M50 59h161v81H50V59Z" fill={c.surface} />
      <path d="M50 99h161v24H50V99Zm12 41v17m137-17v17" fill={c.tint} stroke={c.line} />
      <path
        d="M62 100v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23"
        stroke={c.line}
      />
      <path
        d="M70 100v12m13-12v12m26-12v12m13-12v12m13-12v12m26-12v12m13-12v12m13-12v12"
        strokeWidth="5"
      />
      <path
        d="M106 36c10-4 18-2 25 3 8-5 16-7 26-3v42c-10-4-19-2-26 3-7-5-16-7-25-3V36Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M131 39v42m-18-29h11m14 0h12M94 147h63v8H94v-8Zm5 8v5m53-5v5" stroke={c.line} />
    </EducationScene>
  )
}

export function DanceClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M52 88h158m-150 0v68m143-68v68m-143-19h143" stroke={c.line} />
      <circle cx="129" cy="49" r="11" fill={c.surface} stroke={c.line} />
      <path d="M121 39c-3-14 17-15 18 0m-19 24h18l5 35h-29l6-35Z" fill={c.tint} stroke={c.line} />
      <path d="m120 67-22-15-8-19m48 34 21-16 10-18m-79 0 6-5m73 5-5-5" />
      <path d="m114 98-14 23h57l-14-23h-29Z" fill={c.surface} />
      <path d="m117 121 1 25-12 10m30-35 9 20 22-7m-60 22h16m44-22 7 1" stroke={c.line} />
      <path d="M60 54h13m-13 8h13m111-9v9m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function DramaClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M78 43h99m-63-16h28v11h-28V27Z" fill={c.surface} />
      <path d="m121 39-40 98h97l-43-98" fill={c.tint} stroke="none" opacity=".65" />
      <ScenePerson x={131} y={47} scale={0.78} pose="waving" />
      <path d="M65 145h131v12H65v-12Z" fill={c.surface} stroke={c.line} />
      <path d="M48 58h30v45H48V58Z" fill={c.surface} />
      <path d="M55 69h16m-16 8h16m-16 8h11m-11 8h16" stroke={c.line} />
      <path d="M180 66c10 4 20 4 30 0v22c-4 14-26 14-30 0V66Z" fill={c.surface} stroke={c.line} />
      <path d="M188 79h3m8 0h3m-14 9c4 4 10 4 14 0m-15 24h18m-14 7h10" stroke={c.line} />
    </EducationScene>
  )
}

export function SewingClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M79 73c0-23 22-29 36-16h45c10 0 17 7 17 17v47H74v-16h57V83h-28v12H79V73Z"
        fill={c.surface}
      />
      <path
        d="M84 121h95v14H70v-14h14Zm13-70V39h18v12m-9-12v-8m-17 65v14m-8 0h16"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="160" cy="79" r="10" fill={c.tint} stroke={c.line} />
      <path d="M160 72v14m-6-7h12M51 144h157" stroke={c.line} />
      <path d="m119 136 53-1 10 20h-66l3-19Z" fill={c.tint} stroke={c.line} />
      <path d="M127 141h36m-37 6h39" stroke={c.line} strokeDasharray="3 4" />
      <circle cx="195" cy="107" r="10" fill={c.surface} stroke={c.line} />
      <path d="M192 104h1m5 0h1m-7 6h1m5 0h1" stroke={c.line} />
    </EducationScene>
  )
}

export function WoodworkClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M47 126h167v12H47v-12Zm14 12v19m139-19v19M64 109h128v17H64v-17Z" fill={c.surface} />
      <path d="M74 116h35m12 0h24m12 0h25m-17-10v26h18v-26" stroke={c.line} />
      <path d="m79 72 80 27 7-19-80-27-7 19Z" fill={c.tint} />
      <path
        d="m81 72 4 9 5-6 4 9 5-6 4 9 5-6 4 9 5-6 4 9 5-6 4 9 5-6 4 9 5-6 4 9 6-6"
        stroke={c.line}
      />
      <path d="m159 77 12-11 17 7-7 29-22-3m12-18 6-4 3 1-3 13h-7l1-10Z" fill={c.surface} />
      <path d="m59 64-10-6m12-2-5-8m132 67h10m-21 37h13" stroke={c.line} />
    </EducationScene>
  )
}

export function CulinaryClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M93 80c-20 1-27-28-7-34 3-20 27-25 39-9 15-18 39-9 40 9 22 6 16 35-5 34v27H93V80Z"
        fill={c.surface}
      />
      <path d="M93 94h67m-50-39v27m18-34v34m17-27v27" stroke={c.line} />
      <path d="M59 113h85v43H59v-43Z" fill={c.tint} stroke={c.line} />
      <path d="M70 123h59m-59 11h39m-39 11h53" stroke={c.line} />
      <path d="M158 135h45v19h-45v-19Z" fill={c.surface} />
      <path
        d="M165 135v-15m15 15v-19m15 19v-15m-14 0c-10-7-7-16 0-21 7 5 10 14 0 21Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M49 75v9m-4-4h8m148-32v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
