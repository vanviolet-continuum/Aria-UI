import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, SceneCloud, sceneColors as c } from '../shared/collection.scene'

export function CityscapeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M42 151V79h42v72m6 0V47h43v104m6 0V66h37v85m6 0V96h34v55" fill={c.surface} />
      <path d="M98 47V34h27v13m-14-13V23" stroke={c.line} />
      <path
        d="M51 91h8m9 0h8m-25 14h8m9 0h8m-25 14h8m9 0h8m28-58h8m9 0h5m-21 15h8m9 0h5m-21 15h8m9 0h5m-21 15h8m9 0h5m27-27h7m7 0h6m-20 15h7m7 0h6m-20 15h7m7 0h6m25 0h13m-13 13h13"
        stroke={c.line}
        strokeWidth="3"
      />
      <path d="M55 151v-19h16v19m36 0v-28h13v28m40 0v-23h-13v23M35 153h189" />
      <SceneCloud x={174} y={32} scale={0.7} />
      <path d="M194 150v-12m-5-3a5 5 0 1 1 10 0v3h-10v-3Z" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
