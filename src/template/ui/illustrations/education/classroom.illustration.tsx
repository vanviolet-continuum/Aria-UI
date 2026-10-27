import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function ClassroomIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M42 31h177v124H42V31Z" fill={c.surface} stroke={c.line} />
      <rect x="84" y="43" width="91" height="46" rx="3" fill={c.tint} />
      <path d="M96 56h50m-50 11h65m-65 10h31" stroke={c.line} />
      <circle cx="201" cy="52" r="9" stroke={c.line} />
      <path d="M201 46v6l4 3" stroke={c.line} />
      <path d="M49 47h24v42H49V47Zm12 0v42m-12-21h24" stroke={c.line} />
      <path
        d="M63 108h54v8H63v-8Zm80 0h54v8h-54v-8ZM63 116v19m54-19v19m26-19v19m54-19v19"
        fill={c.surface}
      />
      <path
        d="M76 130h29v8H76v-8Zm80 0h29v8h-29v-8m-78 8v16m25-16v16m55-16v16m25-16v16"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M83 100h15m65 0h15" stroke={c.line} />
    </EducationScene>
  )
}
