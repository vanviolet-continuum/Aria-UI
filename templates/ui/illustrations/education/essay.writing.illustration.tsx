import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

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
