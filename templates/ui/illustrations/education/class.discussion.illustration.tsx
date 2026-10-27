import type { IllustrationProps } from '../shared/illustration.frame'
import { ScenePerson } from '../shared/scene.person'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function ClassDiscussionIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <ScenePerson x={64} y={58} scale={0.7} pose="seated" />
      <ScenePerson x={193} y={58} scale={0.7} mirror pose="seated" accent />
      <circle cx="129" cy="90" r="10" fill={c.surface} stroke={c.line} />
      <path d="M113 120v-10c0-18 32-18 32 0v10" fill={c.tint} />
      <path d="M107 140v-16h44v16h-44Zm3 0v16m38-16v16" fill={c.surface} stroke={c.line} />
      <path d="M95 30h68v30h-25l-9 10-9-10H95V30Z" fill={c.surface} />
      <path d="M106 41h46m-46 9h30" stroke={c.line} />
      <path d="M58 139v17m143-17v17m-122-11h11m80 0h11" stroke={c.line} />
      <circle cx="113" cy="44" r="1" stroke={c.line} />
    </EducationScene>
  )
}
