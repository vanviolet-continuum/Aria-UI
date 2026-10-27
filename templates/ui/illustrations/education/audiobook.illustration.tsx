import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyBook } from '../shared/education.parts'

export function AudiobookIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <StudyBook x={98} y={64} scale={1.25} />
      <path
        d="M76 105V77a54 54 0 0 1 108 0v28m-97-1V77a43 43 0 0 1 86 0v27"
        fill={c.tint}
        stroke={c.line}
      />
      <rect x="68" y="94" width="25" height="47" rx="9" fill={c.surface} />
      <rect x="167" y="94" width="25" height="47" rx="9" fill={c.surface} />
      <path d="M79 103v29m100-29v29" stroke={c.line} strokeWidth="3" />
      <path d="m126 106 15 9-15 9v-18Z" fill={c.surface} stroke={c.accent} />
      <path d="M52 71v13m-7-9v5m163-9v13m7-9v5M84 155h93" stroke={c.line} />
    </EducationScene>
  )
}
