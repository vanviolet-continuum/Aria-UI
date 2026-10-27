import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

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
