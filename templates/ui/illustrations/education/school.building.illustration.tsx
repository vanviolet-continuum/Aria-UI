import type { IllustrationProps } from '../shared/illustration.frame'
import {
  CollectionScene as EducationScene,
  SceneCloud,
  sceneColors as c,
} from '../shared/collection.scene'

export function SchoolBuildingIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M55 79h150v75H55V79Z" fill={c.surface} />
      <path d="M102 55h55v99h-55V55Z" fill={c.surface} />
      <path d="m93 55 37-25 36 25H93Z" fill={c.tint} />
      <circle cx="130" cy="73" r="11" fill={c.tint} stroke={c.line} />
      <path
        d="M130 66v7l5 3m-17 78v-44h23v44M67 94h21v18H67V94Zm0 30h21v18H67v-18Zm106-30h20v18h-20V94Zm0 30h20v18h-20v-18Z"
        stroke={c.line}
      />
      <path d="M130 30V12m0 0 23 5-23 8M47 156h166" fill={c.tint} stroke={c.line} />
      <SceneCloud x={60} y={32} scale={0.5} />
    </EducationScene>
  )
}
