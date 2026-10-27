import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function SchoolBinderIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M77 34h105v120H77V34Z" fill={c.surface} />
      <path d="M77 34H62v120h15V34Z" fill={c.tint} />
      <path d="M88 45h82v98H88V45Z" stroke={c.line} />
      <path d="M182 54h12v19h-12m0 10h12v19h-12m0 10h12v19h-12" fill={c.tint} stroke={c.line} />
      <path
        d="M86 59c-17-6-23 2-15 10m15 17c-17-6-23 2-15 10m15 17c-17-6-23 2-15 10m31-64h51m-51 12h37m-37 23h51m-51 12h38m-38 23h51"
        stroke={c.line}
      />
      <StudyPencil x={205} y={77} angle={17} scale={0.9} />
      <path d="M47 152h144" stroke={c.line} />
    </EducationScene>
  )
}
