import type { IllustrationProps } from '../shared/illustration.frame'
import {
  CollectionScene as EducationScene,
  ScenePlant,
  sceneColors as c,
} from '../shared/collection.scene'

export function StudyBreakIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <circle cx="106" cy="56" r="11" fill={c.surface} stroke={c.line} />
      <path d="M99 70h16l11 35H90l9-35Z" fill={c.tint} />
      <path
        d="m100 74-20-13-12-20m46 33 18-14 11-21m-44 66-6 38h12l6-28 6 28h12l-4-38m-34 39-5 5h20m10-5 5 5h16"
        stroke={c.line}
      />
      <path d="M151 115h57v7h-57v-7Zm8 7v33m43-33v33m-40-65h35l-4 24h-36l5-24Z" fill={c.surface} />
      <path d="M172 102h10" stroke={c.line} />
      <ScenePlant x={45} y={111} scale={0.7} />
      <path d="M174 41c-5-9 7-13 1-22m17 24c-5-9 7-13 1-22" stroke={c.line} />
    </EducationScene>
  )
}
