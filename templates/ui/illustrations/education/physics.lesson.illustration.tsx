import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function PhysicsLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M67 145V35h128v110M57 154h148m-64-119v28" stroke={c.line} />
      <path d="M83 35v45m29-45v45m29-45v45m29-45v45m25-43 21 38" />
      <g fill={c.surface}>
        <circle cx="83" cy="91" r="11" />
        <circle cx="112" cy="91" r="11" />
        <circle cx="141" cy="91" r="11" />
        <circle cx="170" cy="91" r="11" />
        <circle cx="221" cy="84" r="11" />
      </g>
      <path d="M205 54c11 0 19 7 21 17m-4-6 4 6 5-5m-135 57h61m-42 12h30" stroke={c.line} />
      <path d="M40 78v10m-5-5h10m129 41v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
