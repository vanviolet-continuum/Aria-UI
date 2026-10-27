import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function SchoolAdmissionIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M71 29h99v125H71V29Z" fill={c.surface} />
      <path
        d="M85 44h65m-65 11h43m-11 21h38m-38 12h38m-70 21h70m-70 12h43m-43 19h37"
        stroke={c.line}
      />
      <rect x="85" y="69" width="22" height="28" rx="3" fill={c.tint} stroke={c.line} />
      <circle cx="96" cy="78" r="4" stroke={c.line} />
      <path d="M89 90c0-8 14-8 14 0" stroke={c.line} />
      <circle cx="181" cy="125" r="27" fill={c.tint} />
      <path d="m168 125 9 9 18-20" stroke={c.accent} strokeWidth="3" />
      <path d="M45 73v10m-5-5h10m143-29v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}
