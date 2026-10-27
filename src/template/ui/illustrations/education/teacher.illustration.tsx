import type { IllustrationProps } from '../shared/illustration.frame'
import { ScenePerson } from '../shared/scene.person'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function TeacherIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="97" y="31" width="113" height="85" rx="5" fill={c.surface} />
      <path d="M106 40h95v65h-95V40Z" fill={c.tint} stroke={c.line} />
      <path
        d="m122 70 9-17 9 17m-15-6h12m13-4h14m-7-7v14m18-13h11m-11 11h11m-63 23h63"
        stroke={c.line}
      />
      <path d="M107 117v36m90-36v36M88 118h129" stroke={c.line} />
      <ScenePerson x={68} y={41} scale={0.95} pose="pointing" accent />
      <path d="m117 77 24-12" stroke={c.accent} />
      <path d="M45 155h165" stroke={c.line} />
    </EducationScene>
  )
}
