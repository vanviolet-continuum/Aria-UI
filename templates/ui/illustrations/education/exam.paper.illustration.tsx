import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function ExamPaperIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M60 35h105v120H60V35Z" fill={c.surface} />
      <path d="M73 49h53m-53 11h37m-20 24h54m-54 27h54m-54 27h42" stroke={c.line} />
      <circle cx="77" cy="83" r="5" fill={c.tint} />
      <circle cx="77" cy="110" r="5" fill={c.tint} />
      <circle cx="77" cy="137" r="5" fill={c.tint} />
      <path d="M174 46h29v106h-29V46Z" fill={c.tint} stroke={c.line} />
      <path
        d="M180 58h17m-14 12h1m7 0h1m-9 14h1m7 0h1m-9 14h1m7 0h1m-9 14h1m7 0h1m-9 14h1m7 0h1m-9 14h1m7 0h1"
        stroke={c.line}
      />
      <path d="m101 92 4 4 8-9m-12 31 4 4 8-9" stroke={c.accent} />
      <path d="M146 26v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}
