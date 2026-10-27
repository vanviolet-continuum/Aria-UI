import type { IllustrationProps } from '../shared/illustration.frame'
import { ScenePerson } from '../shared/scene.person'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function InterviewIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M47 127v26m165-26v26M46 115h31v18H46v-18Zm137 0h31v18h-31v-18Z"
        fill={c.tint}
        stroke={c.line}
      />
      <ScenePerson x={75} y={51} scale={0.83} pose="seated" />
      <ScenePerson x={185} y={51} scale={0.83} mirror pose="seated" accent />
      <path d="M94 111h73v6H94v-6Zm10 6v37m53-37v37" fill={c.surface} />
      <path d="m116 101 21-3 11 9-21 3-11-9Z" fill={c.tint} stroke={c.line} />
      <path d="M103 29h59v28h-27l-10 10V57h-22V29Z" fill={c.surface} stroke={c.line} />
      <path d="M113 39h38m-38 8h25" stroke={c.line} />
      <path d="M43 156h174" stroke={c.line} />
    </CollectionScene>
  )
}
