import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function JournalIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="75" y="30" width="100" height="126" rx="7" fill={c.surface} />
      <path
        d="M92 31v124m-19-112h14m-14 17h14m-14 17h14m-14 17h14m-14 17h14m-14 17h14m-14 17h14"
        stroke={c.line}
      />
      <path d="M107 54h49m-49 11h33m-33 39h49m-49 12h49m-49 12h35" stroke={c.line} />
      <path d="M131 78c-7-8-18 1-10 9l10 8 10-8c8-8-3-17-10-9Z" fill={c.tint} stroke={c.accent} />
      <StudyPencil x={195} y={76} angle={17} scale={0.95} />
      <path d="m65 117-17 4 7 29 17-4" fill={c.tint} stroke={c.line} />
      <path d="M47 46v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
