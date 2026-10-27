import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function ScienceFairIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m53 49 41 13V42h74v20l40-13v79l-40 13V42M94 62v79l-41-13V49" fill={c.surface} />
      <path
        d="M106 55h48m-48 11h30M64 71h19m-19 10h19m-19 10h12m104-20h16m-16 10h16m-16 10h10"
        stroke={c.line}
      />
      <path
        d="M118 112c-9-18-4-32 12-44 16 12 21 26 12 44h-24Zm0-13-10 13v12l11-12m23-13 10 13v12l-11-12"
        fill={c.tint}
      />
      <circle cx="130" cy="88" r="6" fill={c.surface} stroke={c.line} />
      <path d="M125 115v12m10-12v12M47 142h167v8H47v-8Zm11 8v8m146-8v8" stroke={c.line} />
      <circle cx="184" cy="119" r="10" fill={c.tint} stroke={c.accent} />
    </EducationScene>
  )
}
