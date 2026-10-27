import type { IllustrationProps } from '../shared/illustration.frame'
import { ScenePerson } from '../shared/scene.person'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function FieldTripIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <ScenePerson x={75} y={55} scale={0.82} pose="waving" />
      <ScenePerson x={189} y={55} scale={0.82} mirror pose="pointing" accent />
      <path d="m105 83 19-8 18 9 17-7v59l-17 7-18-9-19 8V83Z" fill={c.surface} />
      <path
        d="M124 75v59m18-50v59m-29-43 5 3m13 2 5-7m11 8 5-4"
        stroke={c.line}
        strokeDasharray="3 3"
      />
      <path d="M133 39c-15-19-27 1 0 22 27-21 15-41 0-22Z" fill={c.tint} stroke={c.line} />
      <circle cx="133" cy="43" r="4" fill={c.surface} stroke={c.accent} />
      <path d="M49 154h162m-84-6h9m7 8h9" stroke={c.line} />
    </EducationScene>
  )
}
