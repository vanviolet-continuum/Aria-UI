import type { IllustrationProps } from '../shared/illustration.frame'
import { ScenePerson } from '../shared/scene.person'
import { CollectionScene, ScenePlant, sceneColors as c } from '../shared/collection.scene'

export function RemoteWorkIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m40 75 90-51 91 51m-163-9v88h145V66" stroke={c.line} />
      <path d="M145 51c9-8 25-8 34 0m-28 6c6-5 16-5 22 0m-13 8h4" stroke={c.accent} />
      <ScenePerson x={113} y={57} scale={0.8} pose="seated" />
      <path d="M91 124v29m67-29v29M81 119h91v7H81v-7Z" fill={c.surface} />
      <path d="m129 91 35 3-5 25h-35l5-28Z" fill={c.tint} />
      <circle cx="144" cy="105" r="3" stroke={c.line} />
      <ScenePlant x={177} y={98} scale={0.9} />
      <path d="M60 154h148m-137-39v25h21" stroke={c.line} />
    </CollectionScene>
  )
}
