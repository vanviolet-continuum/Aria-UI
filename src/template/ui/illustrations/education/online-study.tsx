import type { IllustrationProps } from '../frame'
import {
  CollectionScene as EducationScene,
  sceneColors as c,
} from '../collections/collection-scene'
import { StudyBook, StudyPencil } from './education-parts'

export function VirtualClassroomIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="48" y="32" width="164" height="111" rx="7" fill={c.surface} />
      <path d="M48 50h164m-86 0v76m-78 0h164M110 143v13m40-13v13m-49 0h58" stroke={c.line} />
      <rect x="58" y="61" width="58" height="54" rx="4" fill={c.tint} stroke={c.line} />
      <circle cx="87" cy="79" r="8" fill={c.surface} stroke={c.line} />
      <path d="M74 107V97c0-14 26-14 26 0v10" fill={c.surface} />
      <path
        d="M137 61h29v24h-29V61Zm35 0h29v24h-29V61Zm-35 30h29v24h-29V91Zm35 0h29v24h-29V91Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M149 70h5m30 0h5m-40 30h5m30 0h5m-36-18v-4m35 4v-4m-35 34v-4m35 4v-4"
        stroke={c.line}
      />
      <path d="M119 135h22m-79-93h19" stroke={c.accent} />
    </EducationScene>
  )
}

export function VideoLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="51" y="35" width="152" height="103" rx="8" fill={c.surface} />
      <rect x="61" y="45" width="132" height="68" rx="4" fill={c.tint} stroke={c.line} />
      <path d="m117 62 26 17-26 17V62Z" fill={c.surface} />
      <path d="M64 125h123m-101-5v10" stroke={c.line} />
      <circle cx="86" cy="125" r="4" fill={c.accent} stroke="none" />
      <StudyBook x={161} y={110} scale={0.7} />
      <StudyPencil x={55} y={98} angle={-12} scale={0.75} />
      <path d="M76 152h73m-39-14v14m38-14v14" stroke={c.line} />
      <path d="M210 66v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function DigitalTextbookIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="66" y="23" width="130" height="135" rx="11" fill={c.surface} />
      <rect x="74" y="32" width="114" height="114" rx="4" fill={c.tint} stroke={c.line} />
      <path
        d="M129 39v100m-45-91h34m-34 9h25m-25 10h34m22-19h36m-36 9h26m-26 10h36m-92 48h34m-34 10h25m22-10h36m-36 10h26"
        stroke={c.line}
      />
      <path d="m84 102 13-21 14 21H84Zm61-22h27v22h-27V80Z" fill={c.surface} stroke={c.line} />
      <path d="m150 97 9-9 9 9m-43 55h12" stroke={c.line} />
      <StudyPencil x={208} y={74} angle={13} scale={0.95} />
      <path d="M47 116v10m-5-5h10" stroke={c.accent} />
    </EducationScene>
  )
}

export function LearningAppIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="91" y="20" width="79" height="140" rx="13" fill={c.surface} />
      <path d="M101 29h59v119h-59V29Zm17 0v5h24v-5" fill={c.tint} stroke={c.line} />
      <path d="M112 47h38" stroke={c.line} />
      <circle cx="130" cy="76" r="19" fill={c.surface} />
      <path d="m119 73 11-6 11 6-11 6-11-6Zm5 5v7h13v-7" stroke={c.accent} />
      <rect x="109" y="108" width="43" height="9" rx="4" fill={c.surface} stroke={c.line} />
      <path d="M113 112h20m-20 18h35m-29 23h20" stroke={c.line} />
      <path d="M53 72h26v24H53V72Zm131 35h24v24h-24v-24Z" fill={c.surface} stroke={c.line} />
      <path d="m60 84 4 4 8-9m119 40 4 4 7-8m-2-72v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function OnlineQuizIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="55" y="38" width="147" height="105" rx="7" fill={c.surface} />
      <path
        d="M55 55h147m-130 30h82m-82 20h82m-82 20h82m-47 18v12m39-12v12m-48 0h57"
        stroke={c.line}
      />
      <circle cx="80" cy="78" r="4" fill={c.tint} />
      <circle cx="80" cy="98" r="4" fill={c.tint} stroke={c.accent} />
      <circle cx="80" cy="118" r="4" fill={c.tint} />
      <path d="M92 78h55m-55 20h55m-55 20h35" stroke={c.line} />
      <path d="M178 68c-10 0-11 13-3 13 7 0 10-13 0-13m-4 22h5" stroke={c.line} />
      <circle cx="192" cy="121" r="20" fill={c.tint} />
      <path d="m182 121 7 7 14-15" stroke={c.accent} strokeWidth="3" />
      <path d="M66 47h22" stroke={c.line} />
    </EducationScene>
  )
}

export function CoursePlaylistIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M62 47h137v94H62V47Z" fill={c.surface} />
      <rect x="71" y="57" width="74" height="51" rx="4" fill={c.tint} stroke={c.line} />
      <path d="m100 70 16 12-16 12V70Z" fill={c.surface} />
      <path
        d="M72 119h72m-72 9h52m30-61h34m-34 10h26m-26 18h34m-34 10h26m-26 18h34m-34 10h26"
        stroke={c.line}
      />
      <path
        d="m62 141-17 11c-3 2-1 5 3 5h165c4 0 6-3 3-5l-17-11M111 141l3 7h35l3-7"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M136 28h50m-43 7h36m-105-6v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}

export function StudyDashboardIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="46" y="32" width="168" height="120" rx="8" fill={c.surface} />
      <path d="M46 50h168m-128 0v102m-28-90h17m-17 13h17m-17 13h11" stroke={c.line} />
      <rect x="95" y="60" width="47" height="32" rx="4" fill={c.tint} stroke={c.line} />
      <rect x="151" y="60" width="53" height="32" rx="4" fill={c.tint} stroke={c.line} />
      <path d="M106 71h24m-24 10h14m56-12 4 5 9-9" stroke={c.accent} />
      <path
        d="M98 138v-30m0 30h48m-41-6 10-12 12 3 15-17m18 3h35m-35 13h35m-35 13h23"
        stroke={c.line}
      />
      <path d="M111 43h38m-91 0h12" stroke={c.line} />
    </EducationScene>
  )
}

export function WebinarIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="49" y="40" width="160" height="103" rx="8" fill={c.surface} />
      <rect x="59" y="50" width="104" height="68" rx="4" fill={c.tint} stroke={c.line} />
      <circle cx="88" cy="73" r="10" fill={c.surface} stroke={c.line} />
      <path
        d="M73 109V99c0-18 30-18 30 0v10m6-15 11-10m-2-24h34v30h-34V60Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M124 68h21m-21 9h13" stroke={c.line} />
      <path
        d="M175 55h23m-23 8h15m-15 13h23m-23 8h15m-15 13h23m-23 8h15M61 128h43m10 0h18m12 0h18"
        stroke={c.line}
      />
      <circle cx="187" cy="128" r="4" fill={c.accent} stroke="none" />
      <path d="M104 143v12m50-12v12m-59 0h68m-95-127h29" stroke={c.line} />
    </EducationScene>
  )
}

export function CodingLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="62" y="36" width="138" height="101" rx="6" fill={c.surface} />
      <path d="M72 46h118v76H72V46Z" fill={c.tint} stroke={c.line} />
      <path d="m100 63-10 10 10 10m22-20 10 10-10 10m-10-24-5 29" stroke={c.accent} />
      <path d="M143 62h35m-35 12h24m-35 24h46m-92 10h36" stroke={c.line} />
      <path d="m62 137-14 14h166l-14-14m-83 0-3 7h33l-3-7" fill={c.surface} stroke={c.line} />
      <StudyBook x={49} y={91} scale={0.65} />
      <path d="M197 25v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function CloudLearningIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M91 94c-30 1-41-38-14-50 7-29 48-29 59-6 29-17 58 5 52 29 25 14 14 39-10 39h-25"
        fill={c.surface}
        stroke={c.line}
      />
      <path
        d="M98 59c11-5 21-2 32 4 11-6 21-9 32-4v35c-11-4-22-1-32 5-10-6-21-9-32-5V59Z"
        fill={c.tint}
      />
      <path d="M130 63v36m-23-28 14 3m17 0 14-3" stroke={c.line} />
      <path
        d="M130 106v17m-23-12v12m46-12v12M87 134h86v23H87v-23Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M99 145h62m-25-17 5 5m-37-3 5 5m70-4 5 5" stroke={c.line} />
      <circle cx="59" cy="118" r="6" fill={c.tint} stroke={c.accent} />
    </EducationScene>
  )
}
