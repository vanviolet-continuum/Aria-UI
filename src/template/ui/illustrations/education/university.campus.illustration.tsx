import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function UniversityCampusIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m73 61 57-32 57 32H73Z" fill={c.surface} />
      <path d="M83 67h94v12H83V67Z" fill={c.tint} stroke={c.line} />
      <path d="M88 79h13v58H88V79Zm35 0h13v58h-13V79Zm35 0h13v58h-13V79Z" fill={c.surface} />
      <path d="M76 137h109v10H76v-10Zm-7 10h123v9H69v-9Z" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="50" r="6" fill={c.tint} stroke={c.line} />
      <path
        d="M47 155v-40m0 20c-21 0-24-25-11-33-4-25 27-25 23-1 15 10 10 34-12 34Zm166 20v-40m0 20c-21 0-24-25-11-33-4-25 27-25 23-1 15 10 10 34-12 34Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M72 93H57m131 0h15" stroke={c.line} />
    </EducationScene>
  )
}
