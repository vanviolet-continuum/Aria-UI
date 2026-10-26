import type { IllustrationProps } from '../frame'
import { ScenePerson } from '../scenes/scene-person'
import {
  CollectionScene as EducationScene,
  sceneColors as c,
} from '../collections/collection-scene'
import { StudyBook } from './education-parts'

export function ClassroomIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M42 31h177v124H42V31Z" fill={c.surface} stroke={c.line} />
      <rect x="84" y="43" width="91" height="46" rx="3" fill={c.tint} />
      <path d="M96 56h50m-50 11h65m-65 10h31" stroke={c.line} />
      <circle cx="201" cy="52" r="9" stroke={c.line} />
      <path d="M201 46v6l4 3" stroke={c.line} />
      <path d="M49 47h24v42H49V47Zm12 0v42m-12-21h24" stroke={c.line} />
      <path
        d="M63 108h54v8H63v-8Zm80 0h54v8h-54v-8ZM63 116v19m54-19v19m26-19v19m54-19v19"
        fill={c.surface}
      />
      <path
        d="M76 130h29v8H76v-8Zm80 0h29v8h-29v-8m-78 8v16m25-16v16m55-16v16m25-16v16"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M83 100h15m65 0h15" stroke={c.line} />
    </EducationScene>
  )
}

export function TeacherIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="97" y="31" width="113" height="85" rx="5" fill={c.surface} />
      <path d="M106 40h95v65h-95V40Z" fill={c.tint} stroke={c.line} />
      <path
        d="m122 70 9-17 9 17m-15-6h12m13-4h14m-7-7v14m18-13h11m-11 11h11m-63 23h63"
        stroke={c.line}
      />
      <path d="M107 117v36m90-36v36M88 118h129" stroke={c.line} />
      <ScenePerson x={68} y={41} scale={0.95} pose="pointing" accent />
      <path d="m117 77 24-12" stroke={c.accent} />
      <path d="M45 155h165" stroke={c.line} />
    </EducationScene>
  )
}

export function StudentDeskIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M75 103h122v10H75v-10Zm9 10v43m104-43v43m-104-29h104" fill={c.surface} />
      <path
        d="M69 84H50v49h45m-44 0v23m44-23v23M51 118h45v15H51v-15Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M110 87c13-5 23-3 32 3 9-6 19-8 32-3v15c-13-2-23-1-32 5-9-6-20-7-32-5V87Z"
        fill={c.surface}
      />
      <path d="M142 90v17m-45-9 12 2" stroke={c.line} />
      <path d="M156 131c0-16 28-16 28 0v22h-28v-22Zm7-10v-7h14v7" fill={c.tint} stroke={c.line} />
      <path d="M164 138h12v8h-12v-8m-58-89h44m-44 10h28" stroke={c.line} />
      <path d="M177 57v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function ChalkboardIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="51" y="38" width="158" height="101" rx="5" fill={c.surface} />
      <path d="M60 47h140v79H60V47Z" fill={c.tint} />
      <path
        d="M71 109h27V82l-27 27Zm43-3 18-31 18 31h-36Zm53-20a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"
        stroke={c.line}
      />
      <path d="M74 61h49m10 0h39m-62 65h32m-68 13-5 16m118-16 5 16" stroke={c.line} />
      <path d="M49 139h163v7H49v-7Z" fill={c.surface} />
      <path d="m159 126 24-3 3 10-24 3-3-10Z" fill={c.tint} stroke={c.line} />
      <path d="M78 135h16" stroke={c.accent} strokeWidth="4" />
    </EducationScene>
  )
}

export function WhiteboardIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="56" y="31" width="148" height="100" rx="7" fill={c.surface} />
      <path d="M66 42h128v78H66V42Zm64 89v25m-37 0h74m-82-25-7 25m97-25 7 25" stroke={c.line} />
      <path d="M83 99V68m0 31h62m-52-7 13-12 13 5 18-20m-8 0h8v9" stroke={c.accent} />
      <path d="M151 56h27v20h-27V56Zm5 31h26v22h-26V87Z" fill={c.tint} stroke={c.line} />
      <path d="M157 63h14m-10 33h14M71 126h30" stroke={c.line} />
      <path d="M194 130h13v16h-13m-79-20h28" stroke={c.line} />
    </EducationScene>
  )
}

export function SchoolBellIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M106 50v-9a23 23 0 0 1 46 0v9" stroke={c.line} />
      <path d="M87 103V80a42 42 0 0 1 84 0v23l14 21H73l14-21Z" fill={c.surface} />
      <path d="M75 124h109v10H75v-10Z" fill={c.tint} />
      <path d="M115 134c0 19 29 19 29 0m-42-38V77c0-10 7-19 15-22" stroke={c.line} />
      <path
        d="M58 64c-10 13-10 31 0 44m-10-53c-14 18-14 43 0 61m151-52c10 13 10 31 0 44m10-53c14 18 14 43 0 61"
        stroke={c.accent}
      />
      <path d="M94 156h71m-36-139v8" stroke={c.line} />
    </EducationScene>
  )
}

export function ClassScheduleIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="48" y="41" width="164" height="112" rx="7" fill={c.surface} />
      <path
        d="M48 65h164m-132 0v88m33-88v88m33-88v88m33-88v88m-131-59h164m-164 29h164M74 32v19m112-19v19"
        stroke={c.line}
      />
      <path d="M58 51h20m18 0h9m24 0h9m24 0h9m24 0h7" stroke={c.line} />
      <rect x="87" y="73" width="18" height="13" rx="3" fill={c.tint} stroke={c.accent} />
      <rect x="120" y="102" width="18" height="13" rx="3" fill={c.tint} />
      <rect x="153" y="131" width="18" height="13" rx="3" fill={c.tint} stroke={c.line} />
      <rect x="186" y="73" width="18" height="13" rx="3" fill={c.tint} stroke={c.accent} />
      <path d="M59 80h12m-12 29h12m-12 29h12" stroke={c.line} />
    </EducationScene>
  )
}

export function AttendanceIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="76" y="35" width="108" height="120" rx="7" fill={c.surface} />
      <rect x="104" y="26" width="52" height="19" rx="5" fill={c.tint} />
      <path d="M117 26c0-16 25-16 25 0" stroke={c.line} />
      <circle cx="100" cy="69" r="8" fill={c.tint} stroke={c.line} />
      <circle cx="100" cy="99" r="8" fill={c.tint} stroke={c.line} />
      <circle cx="100" cy="129" r="8" fill={c.tint} stroke={c.line} />
      <path d="M117 65h28m-28 9h21m-21 21h28m-28 9h21m-21 21h28m-28 9h21" stroke={c.line} />
      <path d="m157 68 4 4 9-10m-13 37 4 4 9-10m-13 32 11 11m-11 0 11-11" stroke={c.accent} />
      <path d="M52 82v11m-5-5h10m146 35v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}

export function LessonPlanIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M57 38h106v116H57V38Z" fill={c.surface} />
      <path d="M72 55h61m-61 12h42m-20 23h51m-51 22h51m-51 22h38" stroke={c.line} />
      <path d="m72 87 4 4 8-8m-12 26 4 4 8-8m-12 26 4 4 8-8" stroke={c.accent} />
      <path d="M174 56h26v62h-26V56Z" fill={c.tint} stroke={c.line} />
      <path d="M180 65h14m-14 10h14m-14 10h14m-14 10h14m-14 10h14" stroke={c.line} />
      <StudyBook x={142} y={112} scale={0.65} />
      <path d="M174 39v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function ClassDiscussionIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <ScenePerson x={64} y={58} scale={0.7} pose="seated" />
      <ScenePerson x={193} y={58} scale={0.7} mirror pose="seated" accent />
      <circle cx="129" cy="90" r="10" fill={c.surface} stroke={c.line} />
      <path d="M113 120v-10c0-18 32-18 32 0v10" fill={c.tint} />
      <path d="M107 140v-16h44v16h-44Zm3 0v16m38-16v16" fill={c.surface} stroke={c.line} />
      <path d="M95 30h68v30h-25l-9 10-9-10H95V30Z" fill={c.surface} />
      <path d="M106 41h46m-46 9h30" stroke={c.line} />
      <path d="M58 139v17m143-17v17m-122-11h11m80 0h11" stroke={c.line} />
      <circle cx="113" cy="44" r="1" stroke={c.line} />
    </EducationScene>
  )
}
