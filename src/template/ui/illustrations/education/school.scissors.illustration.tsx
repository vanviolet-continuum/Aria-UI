import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function SchoolScissorsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="m121 95-40-54c-10 15-3 35 28 65l12-11Zm13 0 38-54c11 15 4 35-26 65l-12-11Z"
        fill={c.surface}
      />
      <circle cx="128" cy="106" r="8" fill={c.tint} />
      <path d="m121 111-17 22m31-22 17 22" strokeWidth="5" stroke={c.line} />
      <ellipse cx="91" cy="139" rx="19" ry="14" fill={c.tint} transform="rotate(-25 91 139)" />
      <ellipse cx="165" cy="139" rx="19" ry="14" fill={c.tint} transform="rotate(25 165 139)" />
      <ellipse cx="91" cy="139" rx="10" ry="6" stroke={c.line} transform="rotate(-25 91 139)" />
      <ellipse cx="165" cy="139" rx="10" ry="6" stroke={c.line} transform="rotate(25 165 139)" />
      <path d="M48 101h39m70-12h47m-69-37h30" stroke={c.line} strokeDasharray="3 5" />
      <path d="M64 64v9m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
