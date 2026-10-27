import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

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
