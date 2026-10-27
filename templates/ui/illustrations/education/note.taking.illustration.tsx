import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

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
