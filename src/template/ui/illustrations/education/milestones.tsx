import type { IllustrationProps } from '../frame'
import {
  CollectionScene as EducationScene,
  sceneColors as c,
} from '../collections/collection-scene'

export function SchoolAdmissionIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M71 29h99v125H71V29Z" fill={c.surface} />
      <path
        d="M85 44h65m-65 11h43m-11 21h38m-38 12h38m-70 21h70m-70 12h43m-43 19h37"
        stroke={c.line}
      />
      <rect x="85" y="69" width="22" height="28" rx="3" fill={c.tint} stroke={c.line} />
      <circle cx="96" cy="78" r="4" stroke={c.line} />
      <path d="M89 90c0-8 14-8 14 0" stroke={c.line} />
      <circle cx="181" cy="125" r="27" fill={c.tint} />
      <path d="m168 125 9 9 18-20" stroke={c.accent} strokeWidth="3" />
      <path d="M45 73v10m-5-5h10m143-29v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}

export function StudentIdIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M110 78 88 26h15l24 52m23 0 22-52h-15l-24 52" fill={c.tint} stroke={c.line} />
      <path d="M123 75h15v16h-15V75Z" fill={c.surface} />
      <rect x="69" y="87" width="122" height="68" rx="8" fill={c.surface} />
      <rect x="80" y="99" width="30" height="37" rx="3" fill={c.tint} stroke={c.line} />
      <circle cx="95" cy="110" r="6" fill={c.surface} stroke={c.line} />
      <path
        d="M85 130c0-15 20-15 20 0m17-24h55m-55 11h36m-36 11h43m-83 17v-5m5 5v-5m5 5v-5m5 5v-5m6 5v-5m6 5v-5m6 5v-5m5 5v-5m6 5v-5m6 5v-5"
        stroke={c.line}
      />
      <path d="M54 62h15m-7-7v14" stroke={c.accent} />
    </EducationScene>
  )
}

export function ExamPaperIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M60 35h105v120H60V35Z" fill={c.surface} />
      <path d="M73 49h53m-53 11h37m-20 24h54m-54 27h54m-54 27h42" stroke={c.line} />
      <circle cx="77" cy="83" r="5" fill={c.tint} />
      <circle cx="77" cy="110" r="5" fill={c.tint} />
      <circle cx="77" cy="137" r="5" fill={c.tint} />
      <path d="M174 46h29v106h-29V46Z" fill={c.tint} stroke={c.line} />
      <path
        d="M180 58h17m-14 12h1m7 0h1m-9 14h1m7 0h1m-9 14h1m7 0h1m-9 14h1m7 0h1m-9 14h1m7 0h1m-9 14h1m7 0h1"
        stroke={c.line}
      />
      <path d="m101 92 4 4 8-9m-12 31 4 4 8-9" stroke={c.accent} />
      <path d="M146 26v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}

export function ExamResultsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M66 30h106v124H66V30Z" fill={c.surface} />
      <path d="M81 45h51m-51 12h34m-34 34h72m-72 13h54m-54 13h72m-72 20h38" stroke={c.line} />
      <circle cx="145" cy="60" r="18" fill={c.tint} stroke={c.accent} />
      <path d="m136 66 9-17 9 17m-13-6h8" stroke={c.accent} />
      <path d="M165 154v-21h14v21m8 0v-34h14v34m8 0v-49h14v49" fill={c.tint} stroke={c.line} />
      <path d="M162 156h62m-38-72 5 6 10-12M47 73v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function ScholarshipIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m60 54 64-26 66 26-66 27-64-27Z" fill={c.surface} />
      <path d="M85 65v30c19 12 51 12 77 0V65" fill={c.tint} stroke={c.line} />
      <path d="m124 54 63 19v24m0 0-5 13h10l-5-13" stroke={c.line} />
      <path d="M67 119h95v34H67v-34Z" fill={c.surface} />
      <path d="M76 126h76v20H76v-20Z" fill={c.tint} stroke={c.line} />
      <circle cx="114" cy="136" r="9" fill={c.surface} stroke={c.accent} />
      <path d="M82 135h13m39 0h12" stroke={c.line} />
      <circle cx="186" cy="133" r="22" fill={c.tint} />
      <path
        d="m186 119 4 9 10 2-7 6 1 10-8-5-8 5 1-10-7-6 10-2 4-9Z"
        fill={c.surface}
        stroke={c.accent}
      />
      <path d="M44 92v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}

export function DiplomaIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <g transform="rotate(-17 131 90)">
        <path d="M67 65h125v48H67V65Z" fill={c.surface} />
        <ellipse cx="67" cy="89" rx="12" ry="24" fill={c.tint} stroke={c.line} />
        <ellipse cx="192" cy="89" rx="12" ry="24" fill={c.surface} />
        <ellipse cx="192" cy="89" rx="6" ry="15" stroke={c.line} />
        <path d="M117 65h21v48h-21V65Z" fill={c.tint} stroke={c.accent} />
        <path
          d="m125 88-11-10c-13-8-19 12-5 12l16-2Zm4 0 11-10c13-8 19 12 5 12l-16-2Zm-4 2-15 41 12-5 6 7 4-43m1 0 13 38 5-8 11 3-23-33"
          fill={c.tint}
          stroke={c.accent}
        />
      </g>
      <path d="M64 135v9m-4-4h8m129-96v8m-4-4h8M105 155h54" stroke={c.line} />
    </EducationScene>
  )
}

export function AcademicMedalIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m94 28 35 45 37-45h-28l-10 18-11-18H94Z" fill={c.tint} />
      <path d="m101 29 29 38 29-38m-39 24 13-18" stroke={c.line} />
      <circle cx="130" cy="106" r="40" fill={c.surface} />
      <circle cx="130" cy="106" r="31" fill={c.tint} stroke={c.line} />
      <path
        d="M111 99c8-3 13-1 19 3 6-4 11-6 19-3v20c-7-3-13-1-19 3-6-4-12-6-19-3V99Zm19 3v20m-7-34 7-5 7 5"
        stroke={c.accent}
      />
      <path d="m104 146-6 12m58-12 6 12m-56-3h48" stroke={c.line} />
      <path d="M69 90v10m-5-5h10m127 21v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function GraduationGownIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="m109 64-23 14-22 45 24 10 15-29-7 51h67l-7-51 15 29 24-10-22-45-24-14h-40Z"
        fill={c.surface}
      />
      <path d="m109 65 21 25 19-25-6 40-13-9-14 9-7-40Z" fill={c.tint} stroke={c.accent} />
      <path d="M130 97v58m-20-35-4 25m45-25 3 25" stroke={c.line} />
      <path d="m93 38 37-17 38 17-38 17-37-17Z" fill={c.surface} />
      <path d="M107 45v16c15 7 31 7 46 0V45m-23-7 39 12v18" fill={c.tint} stroke={c.line} />
      <path d="m169 68-4 10h8l-4-10M48 111v8m-4-4h8m160-35v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}

export function KnowledgeTreeIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M124 150v-44L97 86l6-9 27 19 24-28 9 8-26 33v41h-13Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M70 54c10-4 18-2 27 4 9-6 17-8 27-4v29c-10-3-19-1-27 5-8-6-17-8-27-5V54Zm27 4v30M128 28c9-3 16-1 24 4 8-5 15-7 24-4v26c-9-3-17-1-24 4-7-5-15-7-24-4V28Zm24 4v26M155 74c10-4 18-2 27 4 9-6 17-8 27-4v29c-10-3-19-1-27 5-8-6-17-8-27-5V74Zm27 4v30"
        fill={c.surface}
      />
      <path
        d="M80 65h10m15 0h10m22-27h9m14 0h8m-4 47h11m15 0h10M104 153c8-8 17-9 26-3 9-6 18-5 26 3"
        stroke={c.line}
      />
      <path d="M59 108c-4-16 9-24 18-20 1 15-8 21-18 20Z" fill={c.tint} stroke={c.line} />
    </EducationScene>
  )
}

export function LifelongLearningIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M82 69c-38-15-58 39-25 54 26 12 44-10 73-38 29-28 47-50 73-38 33 15 13 69-25 54m-1-13 1 13 14-2"
        stroke={c.line}
        strokeWidth="3"
      />
      <path
        d="M91 113c15-5 27-2 39 5 12-7 24-10 39-5v33c-15-4-28-1-39 7-11-8-24-11-39-7v-33Z"
        fill={c.surface}
      />
      <path d="M130 118v35m-29-27 18 4m22 0 18-4m-58 10 18 4m22 0 18-4" stroke={c.line} />
      <path d="M112 62c-12-17 4-35 19-29 17 6 18 21 8 29v11h-27V62Z" fill={c.tint} />
      <path d="M115 73h21v9h-21v-9m6-1V58l-6-6m17 20V58l6-6" stroke={c.line} />
      <path d="M91 36v8m-4-4h8m71-16v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
