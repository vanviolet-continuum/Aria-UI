import type { IllustrationProps } from '../shared/illustration.frame'
import { ScenePerson } from '../shared/scene.person'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function BrainstormingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="83" y="31" width="101" height="83" rx="7" fill={c.surface} stroke={c.line} />
      <path d="M95 114v35m75-35v35m-82 0h14m61 0h14" stroke={c.line} />
      <path d="M123 76c-12-16 8-31 20-20 8 8 3 14-2 20v10h-18V76Z" fill={c.tint} />
      <path d="M123 79h18m-14 13h10m-6-43v-7m-21 16-6-4m48 4 6-4" stroke={c.accent} />
      <path d="M93 44h15v15H93V44Zm62 40h18v17h-18V84Z" fill={c.tint} stroke={c.line} />
      <ScenePerson x={61} y={67} scale={0.73} pose="pointing" />
      <ScenePerson x={202} y={68} scale={0.73} mirror pose="pointing" accent />
    </CollectionScene>
  )
}
