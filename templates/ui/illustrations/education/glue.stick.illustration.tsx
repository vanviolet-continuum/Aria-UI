import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function GlueStickIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m64 73 66-15 27 79-66 15-27-79Z" fill={c.surface} stroke={c.line} />
      <path d="m82 91 30-8 8 30-30 8-8-30Z" fill={c.tint} stroke={c.line} />
      <rect x="146" y="69" width="38" height="84" rx="5" fill={c.surface} />
      <path d="M150 69V47c0-9 30-9 30 0v22" fill={c.tint} stroke={c.line} />
      <ellipse cx="165" cy="47" rx="15" ry="5" fill={c.surface} stroke={c.line} />
      <path d="M147 86h36m-36 44h36m-36 12h36m-29-8v7m8-7v7m8-7v7m8-7v7" stroke={c.line} />
      <path d="m162 101-6 11h10l-4 9 12-15h-10l3-5" fill={c.tint} stroke={c.accent} />
      <path
        d="M106 39h25v17h-25V39Z"
        fill={c.tint}
        transform="rotate(-10 118 47)"
        stroke={c.line}
      />
      <path d="M54 132v9m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
