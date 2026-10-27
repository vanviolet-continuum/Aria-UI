import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyBook } from '../shared/education.parts'

export function AstronomyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="55" y="31" width="150" height="92" rx="6" fill={c.surface} />
      <path d="M64 41h132v72H64V41Z" fill={c.tint} stroke={c.line} />
      <path d="m85 78 22-22 27 14 28-19 17 34-28 11-17-26m-27-14 12 44" stroke={c.line} />
      <g fill={c.surface} stroke={c.accent}>
        <circle cx="85" cy="78" r="4" />
        <circle cx="107" cy="56" r="4" />
        <circle cx="134" cy="70" r="4" />
        <circle cx="162" cy="51" r="4" />
        <circle cx="179" cy="85" r="4" />
        <circle cx="151" cy="96" r="4" />
        <circle cx="119" cy="100" r="4" />
      </g>
      <path d="M88 123v31m84-31v31m-76-26h68" stroke={c.line} />
      <StudyBook x={113} y={126} scale={0.45} />
      <path d="M45 51v8m-4-4h8m166 77v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}
