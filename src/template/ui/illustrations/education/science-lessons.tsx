import type { IllustrationProps } from '../frame'
import {
  CollectionScene as EducationScene,
  sceneColors as c,
} from '../collections/collection-scene'
import { StudyBook } from './education-parts'

export function BiologyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="56" y="31" width="103" height="117" rx="6" fill={c.surface} />
      <path d="M68 45h42m-42 10h29m-29 76h76" stroke={c.line} />
      <path d="M110 119c-33-10-42-47-8-54 30 9 38 44 8 54Z" fill={c.tint} />
      <path d="m102 65 8 54m-5-39-12-5m15 22 15-13m-13 25-19-11" stroke={c.line} />
      <ellipse cx="179" cy="124" rx="31" ry="15" fill={c.surface} />
      <path d="M148 124v12c0 20 62 20 62 0v-12" fill={c.tint} stroke={c.line} />
      <ellipse cx="179" cy="124" rx="31" ry="15" fill={c.surface} stroke={c.line} />
      <path d="m165 120 5 3m15-7 5 2m-15 11h5m13-6 4 2" stroke={c.accent} />
      <path d="M178 55v13m-6-6h12" stroke={c.line} />
    </EducationScene>
  )
}

export function ChemistryLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="51" y="35" width="141" height="88" rx="6" fill={c.surface} />
      <path
        d="M66 51h18v20H66V51Zm26 0h18v20H92V51Zm26 0h18v20h-18V51Zm26 0h18v20h-18V51ZM66 79h18v20H66V79Zm26 0h18v20H92V79Zm26 0h18v20h-18V79Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M72 57h6m20 0h6m20 0h6m20 0h6m-84 28h6m20 0h6m20 0h6" stroke={c.line} />
      <path d="M82 123v31m82-31v31m-89 0h97m7-52 21-18m-21 18 20 19" stroke={c.line} />
      <circle cx="169" cy="111" r="13" fill={c.tint} />
      <circle cx="198" cy="84" r="10" fill={c.surface} />
      <circle cx="200" cy="135" r="10" fill={c.surface} />
    </EducationScene>
  )
}

export function AstronomyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="55" y="31" width="150" height="92" rx="6" fill={c.surface} />
      <path d="M64 41h132v72H64V41Z" fill={c.tint} stroke={c.line} />
      <path d="m85 78 22-22 27 14 28-19 17 34-28 11-17-26m-27-14 12 44" stroke={c.line} />
      <g fill={c.surface} stroke={c.accent}>
        <circle cx="85" cy="78" r="4" />
        <circle cx="107" cy="56" r="4" />
        <circle cx="134" cy="70" r="4" />
        <circle cx="162" cy="51" r="4" />
        <circle cx="179" cy="85" r="4" />
        <circle cx="151" cy="96" r="4" />
        <circle cx="119" cy="100" r="4" />
      </g>
      <path d="M88 123v31m84-31v31m-76-26h68" stroke={c.line} />
      <StudyBook x={113} y={126} scale={0.45} />
      <path d="M45 51v8m-4-4h8m166 77v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}

export function BotanyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M62 29h107v125H62V29Z" fill={c.surface} />
      <path d="M76 43h56m-56 10h34" stroke={c.line} />
      <path
        d="M113 126V74m0 20c-24 0-27-17-26-24 19 0 28 12 26 24Zm0-11c0-23 19-31 28-26-2 19-14 26-28 26Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M96 125c9 0 15 5 17 14 4-11 10-15 20-14" stroke={c.line} />
      <circle cx="186" cy="111" r="23" fill={c.surface} />
      <path d="M181 98c-11 5-12 22-2 24 14 1 13-18 2-24Z" fill={c.tint} />
      <path d="m181 99 1 15m20 15 15 19m-89-52h21m-50 16H77" stroke={c.line} />
    </EducationScene>
  )
}

export function AnatomyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="61" y="29" width="139" height="124" rx="5" fill={c.surface} />
      <circle cx="122" cy="54" r="10" fill={c.tint} stroke={c.line} />
      <path
        d="m114 65-10 8-13 34 9 4 13-25v28l-7 28h10l6-25 6 25h10l-7-28V86l13 25 9-4-13-34-10-8h-16Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M122 78c-6-6-14 1-9 7l9 8 9-8c5-6-3-13-9-7Z" fill={c.surface} stroke={c.accent} />
      <path
        d="M153 53h32m-24 18h24m-30 21h30m-30 21h30m-18 20h18m-46-80h8m-48 39H79m26 31H79"
        stroke={c.line}
      />
      <path d="M45 89v10m-5-5h10" stroke={c.accent} />
    </EducationScene>
  )
}

export function ElectricCircuitIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M77 77H54v63h155V77h-30m-64 0h24" stroke={c.line} />
      <path d="M78 54h36v45H78V54Z" fill={c.surface} />
      <path d="M88 54v-9h16v9m-26 36h36m-26-25v13m-6-6h12m10 0h6" stroke={c.line} />
      <path d="M150 91c0-13-10-17-10-31a23 23 0 0 1 46 0c0 14-10 18-10 31h-26Z" fill={c.tint} />
      <path d="M151 91h24v14h-24V91Zm5 14v7h14v-7m-14-14V75l-8-10m22 26V75l8-10" stroke={c.line} />
      <path d="M104 140h11l15-17m4 17h12m17-110v-8m29 23 6-5m-64 4-6-5" stroke={c.accent} />
      <circle cx="115" cy="140" r="3" fill={c.surface} />
      <circle cx="134" cy="140" r="3" fill={c.surface} />
    </EducationScene>
  )
}

export function ScienceExperimentIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <ellipse cx="131" cy="148" rx="76" ry="12" fill={c.surface} stroke={c.line} />
      <path d="m74 145 39-65h29l42 65H74Z" fill={c.tint} />
      <path d="M113 80c5-12 25-12 29 0l-3 23-9-10-8 14-9-27Z" fill={c.surface} stroke={c.line} />
      <path
        d="M127 71c-15-20-18-32-2-34 12-1 4 17 10 23 3-23 26-13 18-1m-38 8c-12-6-15-16-7-20"
        stroke={c.accent}
      />
      <circle cx="130" cy="24" r="5" fill={c.tint} stroke={c.accent} />
      <circle cx="158" cy="35" r="4" stroke={c.line} />
      <path
        d="M55 88h22v45H55V88Zm-4 0h30m-26 24h22m-17 9h12m113-34h21v46h-21V87Zm0 17h21"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="m99 122 10-15m42 13 8 10" stroke={c.line} />
    </EducationScene>
  )
}

export function RoboticsClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M49 132h162v9H49v-9Zm11 9v16m140-16v16" fill={c.surface} />
      <rect x="95" y="82" width="66" height="40" rx="7" fill={c.tint} />
      <circle cx="108" cy="123" r="9" fill={c.surface} />
      <circle cx="150" cy="123" r="9" fill={c.surface} />
      <path d="M111 82V68h35v14m-22-14V52m-12 0h24" stroke={c.line} />
      <circle cx="112" cy="52" r="6" fill={c.surface} />
      <circle cx="136" cy="52" r="6" fill={c.surface} />
      <path
        d="M107 96h17m-17 9h10m20-9h12m-12 9h12m-54-12L83 83l-8 9m86 1 15-10 9 9"
        stroke={c.line}
      />
      <path d="m62 121 8-23 6 2-8 23m114-1 9-29 7 2-9 29" fill={c.surface} stroke={c.line} />
      <path d="M78 37h20m-20 8h12m72-9v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function EcologyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M83 40h94v14l15 18v63c0 25-124 25-124 0V72l15-18V40Z" fill={c.surface} />
      <path
        d="M83 40h94V29H83v11Zm-13 85c37-11 77-11 120 0v10c0 22-120 22-120 0v-10Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M125 121V71m0 26c-18-1-27-15-22-24 16 2 24 12 22 24Zm0-12c1-22 18-32 30-27 0 17-12 27-30 27Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M90 125c-9-12-1-22 4-26 7 12 9 19-4 26Zm70-1c-8-10-5-20 4-24 6 11 6 19-4 24Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M49 78c-5 16-5 27 1 38m-5-7 5 7 5-7m158 7c5-16 5-27-1-38m-5 7 5-7 5 7"
        stroke={c.accent}
      />
    </EducationScene>
  )
}

export function FossilStudyIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m58 84 20-41 63-9 41 38-4 62-37 20-63-11-20-59Z" fill={c.tint} stroke={c.line} />
      <path
        d="M150 120c-37 16-72-16-57-45 12-25 49-25 62-4 10 16-1 36-18 35-15 0-24-17-13-26 9-7 19 1 13 9"
        fill={c.surface}
      />
      <path
        d="m101 63 9 8m4-17 4 10m10-12v11m15-9-4 11m16-2-9 7m14 7-10 3m8 13-10-3m-1 15-7-8m-7 9v-9m-13 4 6-8m-15 2 9-5m-14-3 10-1"
        stroke={c.line}
      />
      <path
        d="m171 127 20-47 8 3-20 48m-11-7 16 7-6 24-22-9 12-22Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="m166 136-6 13m12-10-6 13m12-10-6 12m-84-8-12 9m130-28 6 7" stroke={c.line} />
    </EducationScene>
  )
}
