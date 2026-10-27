import type { IllustrationProps } from '../shared/illustration.frame'
import { ScenePerson } from '../shared/scene.person'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function GroupStudyIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <ScenePerson x={63} y={52} scale={0.73} pose="seated" />
      <ScenePerson x={196} y={52} scale={0.73} mirror pose="seated" accent />
      <circle cx="130" cy="65" r="11" fill={c.surface} stroke={c.line} />
      <path d="M113 102V89c0-17 34-17 34 0v13" fill={c.tint} />
      <path d="m85 105-12 19h114l-12-19H85Zm-2 19v31m94-31v31" fill={c.surface} />
      <path
        d="M110 104c7-2 14-1 20 3 7-4 13-5 20-3v14c-7-2-14-1-20 3-6-4-13-5-20-3v-14Zm20 3v14"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M106 28h47v17h-14l-9 8-8-8h-16V28Z" fill={c.tint} stroke={c.line} />
      <path d="M116 36h27M50 156h161" stroke={c.line} />
    </EducationScene>
  )
}
