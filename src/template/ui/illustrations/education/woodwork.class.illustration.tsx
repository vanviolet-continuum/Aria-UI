import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function WoodworkClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M47 126h167v12H47v-12Zm14 12v19m139-19v19M64 109h128v17H64v-17Z" fill={c.surface} />
      <path d="M74 116h35m12 0h24m12 0h25m-17-10v26h18v-26" stroke={c.line} />
      <path d="m79 72 80 27 7-19-80-27-7 19Z" fill={c.tint} />
      <path
        d="m81 72 4 9 5-6 4 9 5-6 4 9 5-6 4 9 5-6 4 9 5-6 4 9 5-6 4 9 5-6 4 9 6-6"
        stroke={c.line}
      />
      <path d="m159 77 12-11 17 7-7 29-22-3m12-18 6-4 3 1-3 13h-7l1-10Z" fill={c.surface} />
      <path d="m59 64-10-6m12-2-5-8m132 67h10m-21 37h13" stroke={c.line} />
    </EducationScene>
  )
}
