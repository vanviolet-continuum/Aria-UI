import type { IllustrationProps } from '../frame'
import { ScenePerson } from '../scenes/scene-person'
import {
  CollectionScene as EducationScene,
  ScenePlant,
  sceneColors as c,
} from '../collections/collection-scene'
import { StudyBook, StudyPencil } from './education-parts'

export function StudyPlannerIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M55 41c28-7 51-3 75 9 24-12 47-16 75-9v107c-28-6-52-2-75 10-23-12-47-16-75-10V41Z"
        fill={c.surface}
      />
      <path
        d="M130 50v108m-61-99h44m-44 12h29m-29 17h44m-44 20h44m-44 20h44m30-66h45m-45 12h29"
        stroke={c.line}
      />
      <path
        d="M144 91h15v15h-15V91Zm26 0h15v15h-15V91Zm-26 25h15v15h-15v-15Zm26 0h15v15h-15v-15Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m146 98 4 4 8-9m14 30 4 4 7-8" stroke={c.accent} />
      <StudyPencil x={205} y={100} angle={16} scale={0.7} />
    </EducationScene>
  )
}

export function StudyTimerIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <circle cx="122" cy="85" r="45" fill={c.surface} />
      <path d="M122 50a35 35 0 0 1 35 35h-35V50Z" fill={c.tint} stroke={c.accent} />
      <path
        d="M122 53v8m32 24h-8m-24 32v-8m-32-24h8m24-45V27m-11 0h22m-11 58-15 18"
        stroke={c.line}
      />
      <circle cx="122" cy="85" r="4" fill={c.accent} stroke="none" />
      <path d="M67 135h116v20H67c-12 0-12-20 0-20Z" fill={c.tint} />
      <path d="M72 144h104m-72-14-6 5m49-5 6 5m-97-69-6-5m132 2 6-5" stroke={c.line} />
      <StudyPencil x={193} y={93} angle={17} scale={0.8} />
    </EducationScene>
  )
}

export function FlashcardsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect
        x="59"
        y="52"
        width="128"
        height="89"
        rx="7"
        fill={c.tint}
        transform="rotate(-10 123 96)"
        stroke={c.line}
      />
      <rect
        x="72"
        y="43"
        width="128"
        height="89"
        rx="7"
        fill={c.surface}
        transform="rotate(7 136 87)"
      />
      <rect x="65" y="61" width="128" height="89" rx="7" fill={c.surface} />
      <circle cx="81" cy="77" r="3" stroke={c.line} />
      <path d="M81 77c-26-1-30-38-7-44 15-4 25 8 22 18" stroke={c.line} />
      <path d="M115 89c0-15 28-16 28 0 0 11-14 10-14 22m0 9v2" stroke={c.accent} strokeWidth="3" />
      <path d="M83 137h91m29-22h13m-7-7v14" stroke={c.line} />
    </EducationScene>
  )
}

export function MindMapIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="m111 78-28-26m66 26 28-26m-69 38H71m80 0h38m-78 13-28 26m66-26 28 26"
        stroke={c.line}
      />
      <rect x="105" y="72" width="50" height="36" rx="8" fill={c.tint} />
      <path d="M119 88h22m-18 9h14" stroke={c.accent} />
      <g fill={c.surface}>
        <rect x="53" y="30" width="45" height="28" rx="6" />
        <rect x="162" y="30" width="45" height="28" rx="6" />
        <rect x="39" y="77" width="43" height="27" rx="6" />
        <rect x="178" y="77" width="43" height="27" rx="6" />
        <rect x="53" y="123" width="45" height="28" rx="6" />
        <rect x="162" y="123" width="45" height="28" rx="6" />
      </g>
      <path d="M64 41h23m86 0h23M50 88h21m118 0h21M64 135h23m86 0h23" stroke={c.line} />
    </EducationScene>
  )
}

export function GroupStudyIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <ScenePerson x={63} y={52} scale={0.73} pose="seated" />
      <ScenePerson x={196} y={52} scale={0.73} mirror pose="seated" accent />
      <circle cx="130" cy="65" r="11" fill={c.surface} stroke={c.line} />
      <path d="M113 102V89c0-17 34-17 34 0v13" fill={c.tint} />
      <path d="m85 105-12 19h114l-12-19H85Zm-2 19v31m94-31v31" fill={c.surface} />
      <path
        d="M110 104c7-2 14-1 20 3 7-4 13-5 20-3v14c-7-2-14-1-20 3-6-4-13-5-20-3v-14Zm20 3v14"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M106 28h47v17h-14l-9 8-8-8h-16V28Z" fill={c.tint} stroke={c.line} />
      <path d="M116 36h27M50 156h161" stroke={c.line} />
    </EducationScene>
  )
}

export function HomeworkIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="66" y="31" width="113" height="125" rx="5" fill={c.surface} />
      <path d="M82 44h66m-66 11h39m-39 45h68m-68 12h54m-54 12h68m-68 16h35" stroke={c.line} />
      <path d="m87 71 12 16m-12 0 12-16m13 8h14m-7-7v14m19-15h13l-13 16h13" stroke={c.accent} />
      <path d="M151 130h48v28h-48v-28Z" fill={c.tint} />
      <path d="m151 130 24 17 24-17m-48 28 17-16m31 16-17-16" stroke={c.line} />
      <StudyPencil x={201} y={58} angle={16} scale={0.8} />
      <path d="M47 107h9m-4-4v8" stroke={c.line} />
    </EducationScene>
  )
}

export function StudyBreakIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <circle cx="106" cy="56" r="11" fill={c.surface} stroke={c.line} />
      <path d="M99 70h16l11 35H90l9-35Z" fill={c.tint} />
      <path
        d="m100 74-20-13-12-20m46 33 18-14 11-21m-44 66-6 38h12l6-28 6 28h12l-4-38m-34 39-5 5h20m10-5 5 5h16"
        stroke={c.line}
      />
      <path d="M151 115h57v7h-57v-7Zm8 7v33m43-33v33m-40-65h35l-4 24h-36l5-24Z" fill={c.surface} />
      <path d="M172 102h10" stroke={c.line} />
      <ScenePlant x={45} y={111} scale={0.7} />
      <path d="M174 41c-5-9 7-13 1-22m17 24c-5-9 7-13 1-22" stroke={c.line} />
    </EducationScene>
  )
}

export function LearningGoalsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M86 154V65h77v89m-77-69h77m-77 23h77m-77 23h77m-77 23h77" stroke={c.line} />
      <path
        d="m127 20 7 16 18 2-13 12 3 18-15-9-15 9 3-18-13-12 18-2 7-16Z"
        fill={c.tint}
        stroke={c.accent}
      />
      <path
        d="M48 93h25v20H48V93Zm0 37h25v20H48v-20Zm128-56h25v20h-25V74Zm0 37h25v20h-25v-20Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="m54 102 4 4 8-9m-12 41 4 4 8-9m116-51 4 4 8-9m-12 41 4 4 8-9" stroke={c.accent} />
    </EducationScene>
  )
}

export function ResearchIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M69 32h101v122H69V32Z" fill={c.surface} />
      <path d="M83 46h61m-61 12h41m-41 24h68m-68 12h43m-43 29h36m-36 12h49" stroke={c.line} />
      <rect x="84" y="72" width="29" height="32" rx="3" fill={c.tint} stroke={c.line} />
      <circle cx="168" cy="102" r="28" fill={c.surface} />
      <circle cx="168" cy="102" r="21" fill={c.tint} stroke={c.line} />
      <path d="m189 123 24 26-8 8-24-27m-26-34h25m-25 10h18" stroke={c.line} />
      <StudyBook x={43} y={117} scale={0.6} />
      <path d="M188 47v9m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function NoteTakingIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M65 37h108v117H65V37Z" fill={c.surface} />
      <path
        d="M79 37v117m-17-104h18m-18 19h18m-18 19h18m-18 19h18m-18 19h18m-18 19h18m10-91h65m-65 12h47m-47 21h65m-65 12h56m-56 21h65m-65 12h39"
        stroke={c.line}
      />
      <path d="M144 30h45v35h-11l-7 9v-9h-27V30Z" fill={c.tint} stroke={c.line} />
      <path d="M154 42h25m-25 10h17" stroke={c.accent} />
      <StudyPencil x={202} y={76} angle={22} scale={1.05} />
      <path d="M47 111h8m-4-4v8" stroke={c.line} />
    </EducationScene>
  )
}
