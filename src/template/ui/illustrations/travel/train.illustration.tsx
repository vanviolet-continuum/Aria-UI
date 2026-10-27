import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, SceneCloud, sceneColors as c } from '../shared/collection.scene'

export function TrainIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M92 32h77a15 15 0 0 1 15 15v88H77V47a15 15 0 0 1 15-15Z" fill={c.surface} />
      <path d="M79 90h103v40H79V90Z" fill={c.tint} stroke="none" />
      <rect x="90" y="53" width="81" height="38" rx="6" fill={c.tint} stroke={c.line} />
      <path d="M130 54v36m-22-47h45m-76 92h107m-87 0-14 22m81-22 14 22m-89-10h84m-90 10h99" />
      <circle cx="101" cy="114" r="7" fill={c.surface} />
      <circle cx="159" cy="114" r="7" fill={c.surface} />
      <path d="M120 110h21m-21 7h21" stroke={c.line} />
      <path d="M53 133V64h12m-12 17h12m-6-17v20M42 151h22m130 0h25" stroke={c.line} />
      <SceneCloud x={188} y={40} scale={0.55} />
    </CollectionScene>
  )
}
