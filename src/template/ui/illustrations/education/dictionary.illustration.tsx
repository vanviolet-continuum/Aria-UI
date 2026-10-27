import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function DictionaryIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M73 32h111v121H73c-14 0-14-22 0-22h111M73 32c-14 0-14 22 0 22" fill={c.tint} />
      <path d="M76 32v99m0 9h99" stroke={c.line} />
      <rect x="91" y="51" width="76" height="57" rx="4" fill={c.surface} />
      <path d="m104 89 10-23 10 23m-16-7h13m12-16h19l-19 23h19" strokeWidth="2.5" />
      <path d="M101 119h56m-50-9h44" stroke={c.line} />
      <path d="M184 52h13v16h-13m0 8h13v16h-13m0 8h13v16h-13" fill={c.surface} stroke={c.line} />
      <path d="M47 72h8m-4-4v8m151 64h12" stroke={c.accent} />
    </EducationScene>
  )
}
