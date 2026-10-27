import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function GraduationGownIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="m109 64-23 14-22 45 24 10 15-29-7 51h67l-7-51 15 29 24-10-22-45-24-14h-40Z"
        fill={c.surface}
      />
      <path d="m109 65 21 25 19-25-6 40-13-9-14 9-7-40Z" fill={c.tint} stroke={c.accent} />
      <path d="M130 97v58m-20-35-4 25m45-25 3 25" stroke={c.line} />
      <path d="m93 38 37-17 38 17-38 17-37-17Z" fill={c.surface} />
      <path d="M107 45v16c15 7 31 7 46 0V45m-23-7 39 12v18" fill={c.tint} stroke={c.line} />
      <path d="m169 68-4 10h8l-4-10M48 111v8m-4-4h8m160-35v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}
