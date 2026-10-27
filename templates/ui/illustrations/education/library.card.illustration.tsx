import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyBook } from '../shared/education.parts'

export function LibraryCardIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <StudyBook x={64} y={33} scale={1.25} />
      <path d="M153 50h27v73h-27V50Z" fill={c.surface} stroke={c.line} />
      <path d="M161 59h12m-12 7h12m-12 38h12" stroke={c.line} />
      <rect x="89" y="94" width="118" height="64" rx="7" fill={c.surface} />
      <rect x="99" y="105" width="26" height="25" rx="3" fill={c.tint} stroke={c.line} />
      <path
        d="m103 116 9-5 9 5m-16 0v9m7-9v9m7-9v9m-17 0h20m14-15h55m-55 10h35m-70 25v-8m5 8v-8m5 8v-8m5 8v-8m8 8v-8m5 8v-8m5 8v-8m8 8v-8m6 8v-8m5 8v-8m7 8v-8m6 8v-8"
        stroke={c.line}
      />
      <path d="M48 120v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
