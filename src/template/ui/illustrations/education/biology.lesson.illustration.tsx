import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function BiologyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="56" y="31" width="103" height="117" rx="6" fill={c.surface} />
      <path d="M68 45h42m-42 10h29m-29 76h76" stroke={c.line} />
      <path d="M110 119c-33-10-42-47-8-54 30 9 38 44 8 54Z" fill={c.tint} />
      <path d="m102 65 8 54m-5-39-12-5m15 22 15-13m-13 25-19-11" stroke={c.line} />
      <ellipse cx="179" cy="124" rx="31" ry="15" fill={c.surface} />
      <path d="M148 124v12c0 20 62 20 62 0v-12" fill={c.tint} stroke={c.line} />
      <ellipse cx="179" cy="124" rx="31" ry="15" fill={c.surface} stroke={c.line} />
      <path d="m165 120 5 3m15-7 5 2m-15 11h5m13-6 4 2" stroke={c.accent} />
      <path d="M178 55v13m-6-6h12" stroke={c.line} />
    </EducationScene>
  )
}
