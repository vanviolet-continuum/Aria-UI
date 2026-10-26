import type { IllustrationProps } from '../frame'
import {
  CollectionScene as EducationScene,
  sceneColors as c,
} from '../collections/collection-scene'
import { StudyPencil } from './education-parts'

export function ArithmeticIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="56" y="34" width="139" height="104" rx="7" fill={c.surface} />
      <path d="M69 48h111v76H69V48Z" fill={c.tint} stroke={c.line} />
      <g strokeWidth="3">
        <path d="M85 61v19m-9-9h18m19 0h18m-53 34 14-14m-14 0 14 14m22-9h18m-18 6h18" />
        <circle cx="122" cy="63" r="1" />
        <circle cx="122" cy="79" r="1" />
      </g>
      <path d="M146 61h22m-22 9h15m-15 10h19m-19 14h22m-22 10h13" stroke={c.line} />
      <path d="m85 138-7 17m88-17 7 17m-84-12h74" stroke={c.line} />
      <StudyPencil x={200} y={74} angle={15} scale={0.9} />
    </EducationScene>
  )
}

export function AlgebraIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M73 28h104v128H73V28Z" fill={c.surface} />
      <path d="M86 42h49m-49 12h76m-76 51h76m-76 12h45m-45 21h76" stroke={c.line} />
      <path
        d="m89 74 13 16m-13 0 13-16m12 8h15m-7-7v14m18-15c19-2 16 10 2 16h18"
        strokeWidth="2.5"
      />
      <path d="M190 55v36m-13-25h26m-36 64h28m-14-14v28" stroke={c.accent} />
      <path d="M46 76h15m-15 7h15m-16 47 13-17m-13 0 13 17" stroke={c.line} />
      <circle cx="201" cy="108" r="6" fill={c.tint} stroke={c.line} />
      <StudyPencil x={178} y={93} angle={20} scale={0.7} />
    </EducationScene>
  )
}

export function GeometryIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m52 133 55-94 55 94H52Z" fill={c.surface} />
      <path d="m74 120 33-57 33 57H74Z" fill={c.tint} stroke={c.line} />
      <path d="M94 133v-13m24 13v-13m-58 0 10-6m3-17 10 6m58 11 10 6" stroke={c.line} />
      <circle cx="175" cy="69" r="30" fill={c.surface} />
      <path d="M175 69h30m-30 0 17-23m-17 23-14 25" stroke={c.line} />
      <circle cx="175" cy="69" r="3" fill={c.accent} stroke="none" />
      <path d="M166 109h35v35h-35v-35Z" fill={c.tint} stroke={c.line} />
      <path d="m173 137 20-20m-27-8 35 35M62 153h145" stroke={c.line} />
      <StudyPencil x={45} y={54} angle={-16} scale={0.55} />
    </EducationScene>
  )
}

export function FractionsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <circle cx="97" cy="80" r="40" fill={c.surface} />
      <path d="M97 40v40h40a40 40 0 0 0-40-40Z" fill={c.tint} />
      <path d="M57 80h80m-40 0v40m0-40L69 52m28 28 28 28m-28-28-28 28" stroke={c.line} />
      <path d="M162 50v20m-10 8h29m-26 10v13h22m-3-13v26" strokeWidth="3" />
      <path d="M61 136h137v14H61v-14Z" fill={c.surface} />
      <path d="M61 136h51v14H61v-14Z" fill={c.tint} stroke={c.accent} />
      <path d="M78 137v12m17-12v12m17-12v12m17-12v12m17-12v12m17-12v12m17-12v12" stroke={c.line} />
      <path d="M141 78h8m-8 6h8M207 57v10m-5-5h10" stroke={c.line} />
    </EducationScene>
  )
}

export function CalculusIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="51" y="31" width="160" height="116" rx="7" fill={c.surface} />
      <path
        d="M69 51v78h122m-122-20h122m-122-20h122m-122-20h122m-97-18v78m25-78v78m25-78v78m25-78v78"
        stroke={c.line}
      />
      <path d="M82 120c31 0 31-50 57-50s28 39 54 6" stroke={c.accent} strokeWidth="3" />
      <path d="M108 128V96c11-19 17-26 31-26 12 0 17 9 25 16v42h-56Z" fill={c.tint} stroke="none" />
      <path
        d="M108 96c11-19 17-26 31-26 12 0 17 9 25 16m-44 28V91m12 23V81m12 33V83m12 31V91"
        stroke={c.accent}
      />
      <path d="M183 47c-12-11-10 25-19 14M81 157h97" stroke={c.line} />
      <StudyPencil x={200} y={105} angle={19} scale={0.6} />
    </EducationScene>
  )
}

export function StatisticsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M56 39h106v115H56V39Z" fill={c.surface} />
      <path d="M70 54h54m-54 10h37m-37 68V82m0 50h78" stroke={c.line} />
      <path
        d="M80 109h14v23H80v-23Zm24-16h14v39h-14V93Zm24-12h14v51h-14V81Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="179" cy="75" r="29" fill={c.surface} />
      <path d="M179 46v29h29a29 29 0 0 0-29-29Z" fill={c.tint} stroke={c.accent} />
      <path d="m179 75-20 21" stroke={c.line} />
      <path d="M168 129h34m-28-11h28m-16-11h16M78 144h64" stroke={c.line} />
      <circle cx="172" cy="107" r="3" fill={c.accent} stroke="none" />
      <circle cx="166" cy="118" r="3" fill={c.accent} stroke="none" />
      <circle cx="160" cy="129" r="3" fill={c.accent} stroke="none" />
    </EducationScene>
  )
}

export function PhysicsLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M67 145V35h128v110M57 154h148m-64-119v28" stroke={c.line} />
      <path d="M83 35v45m29-45v45m29-45v45m29-45v45m25-43 21 38" />
      <g fill={c.surface}>
        <circle cx="83" cy="91" r="11" />
        <circle cx="112" cy="91" r="11" />
        <circle cx="141" cy="91" r="11" />
        <circle cx="170" cy="91" r="11" />
        <circle cx="221" cy="84" r="11" />
      </g>
      <path d="M205 54c11 0 19 7 21 17m-4-6 4 6 5-5m-135 57h61m-42 12h30" stroke={c.line} />
      <path d="M40 78v10m-5-5h10m129 41v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function GeographyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <circle cx="124" cy="78" r="43" fill={c.surface} />
      <path
        d="m94 48 17 6 1 14-14 8-14-4m75-16-18 4-5 13 14 7 3 18-13 19m-33 1 2-19-15-9 3-12 16 4 13 15-7 18"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M90 30c-27 16-33 49-18 74s48 33 76 17m-26 7v25m-27 1h54m-4-26 9 22m-65-72h76"
        stroke={c.line}
      />
      <path d="M124 35c-25 21-25 64 0 86m0-86c25 21 25 64 0 86" stroke={c.line} />
      <path d="m171 110 18-5 17 9-2 41-18-9-17 6 2-42Z" fill={c.surface} />
      <path d="m188 107-2 39m-10-29 8-2m7 9 10 4" stroke={c.line} />
    </EducationScene>
  )
}

export function HistoryLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M84 43h92v106H84V43Z" fill={c.surface} />
      <path
        d="M84 43H66c-12 0-12 20 0 20h18m92 66h16c12 0 12 20 0 20h-16"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M97 58h62m-62 10h41m-37 17 30-12 30 12h-60Zm5 6h49m-45 0v27m12-27v27m17-27v27m12-27v27m-45 5h49m-49 10h49"
        stroke={c.line}
      />
      <path d="M130 83v1" stroke={c.accent} strokeWidth="4" />
      <path d="M51 91v61m-5-52h10m-10 20h10m-10 20h10" stroke={c.line} />
      <circle cx="51" cy="100" r="4" fill={c.surface} />
      <circle cx="51" cy="120" r="4" fill={c.tint} />
      <circle cx="51" cy="140" r="4" fill={c.surface} />
      <path d="M197 53v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function LanguageLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M62 40h81v59h-40l-14 13V99H62V40Z" fill={c.surface} />
      <path d="M124 84h77v54h-19v14l-17-14h-41V84Z" fill={c.tint} stroke={c.line} />
      <path
        d="m83 80 12-25 12 25m-20-8h16m14-17v25m0-25h7c12 0 12 12 0 12h-7m0 0h9c12 0 12 13 0 13h-9"
        strokeWidth="2.5"
      />
      <path
        d="M139 100h45m-25-7v8c-1 15-8 24-21 29m6-23c6 12 16 20 31 23m-28-11h28"
        stroke={c.line}
      />
      <path d="M68 130h31m-31 9h21M171 47v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
