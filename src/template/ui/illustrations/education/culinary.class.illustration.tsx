import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function CulinaryClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M93 80c-20 1-27-28-7-34 3-20 27-25 39-9 15-18 39-9 40 9 22 6 16 35-5 34v27H93V80Z"
        fill={c.surface}
      />
      <path d="M93 94h67m-50-39v27m18-34v34m17-27v27" stroke={c.line} />
      <path d="M59 113h85v43H59v-43Z" fill={c.tint} stroke={c.line} />
      <path d="M70 123h59m-59 11h39m-39 11h53" stroke={c.line} />
      <path d="M158 135h45v19h-45v-19Z" fill={c.surface} />
      <path
        d="M165 135v-15m15 15v-19m15 19v-15m-14 0c-10-7-7-16 0-21 7 5 10 14 0 21Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M49 75v9m-4-4h8m148-32v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
