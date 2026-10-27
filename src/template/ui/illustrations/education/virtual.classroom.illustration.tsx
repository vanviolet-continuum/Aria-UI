import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function VirtualClassroomIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="48" y="32" width="164" height="111" rx="7" fill={c.surface} />
      <path d="M48 50h164m-86 0v76m-78 0h164M110 143v13m40-13v13m-49 0h58" stroke={c.line} />
      <rect x="58" y="61" width="58" height="54" rx="4" fill={c.tint} stroke={c.line} />
      <circle cx="87" cy="79" r="8" fill={c.surface} stroke={c.line} />
      <path d="M74 107V97c0-14 26-14 26 0v10" fill={c.surface} />
      <path
        d="M137 61h29v24h-29V61Zm35 0h29v24h-29V61Zm-35 30h29v24h-29V91Zm35 0h29v24h-29V91Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M149 70h5m30 0h5m-40 30h5m30 0h5m-36-18v-4m35 4v-4m-35 34v-4m35 4v-4"
        stroke={c.line}
      />
      <path d="M119 135h22m-79-93h19" stroke={c.accent} />
    </EducationScene>
  )
}
