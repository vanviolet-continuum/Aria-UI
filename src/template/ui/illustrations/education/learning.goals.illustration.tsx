import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function LearningGoalsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M86 154V65h77v89m-77-69h77m-77 23h77m-77 23h77m-77 23h77" stroke={c.line} />
      <path
        d="m127 20 7 16 18 2-13 12 3 18-15-9-15 9 3-18-13-12 18-2 7-16Z"
        fill={c.tint}
        stroke={c.accent}
      />
      <path
        d="M48 93h25v20H48V93Zm0 37h25v20H48v-20Zm128-56h25v20h-25V74Zm0 37h25v20h-25v-20Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="m54 102 4 4 8-9m-12 41 4 4 8-9m116-51 4 4 8-9m-12 41 4 4 8-9" stroke={c.accent} />
    </EducationScene>
  )
}
