import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function ScholarshipIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m60 54 64-26 66 26-66 27-64-27Z" fill={c.surface} />
      <path d="M85 65v30c19 12 51 12 77 0V65" fill={c.tint} stroke={c.line} />
      <path d="m124 54 63 19v24m0 0-5 13h10l-5-13" stroke={c.line} />
      <path d="M67 119h95v34H67v-34Z" fill={c.surface} />
      <path d="M76 126h76v20H76v-20Z" fill={c.tint} stroke={c.line} />
      <circle cx="114" cy="136" r="9" fill={c.surface} stroke={c.accent} />
      <path d="M82 135h13m39 0h12" stroke={c.line} />
      <circle cx="186" cy="133" r="22" fill={c.tint} />
      <path
        d="m186 119 4 9 10 2-7 6 1 10-8-5-8 5 1-10-7-6 10-2 4-9Z"
        fill={c.surface}
        stroke={c.accent}
      />
      <path d="M44 92v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}
