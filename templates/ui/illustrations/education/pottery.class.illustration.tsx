import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function PotteryClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <ellipse cx="130" cy="130" rx="65" ry="14" fill={c.surface} />
      <path d="M65 130v9c0 19 130 19 130 0v-9m-78 17v11m26-11v11m-37 0h48" stroke={c.line} />
      <path d="M110 64h40c-4 17-2 21 10 35 14 23-45 35-58 13-11-17 11-28 8-48Z" fill={c.tint} />
      <ellipse cx="130" cy="64" rx="20" ry="6" fill={c.surface} />
      <path
        d="M108 88c12 7 35 7 45 0m-49 13c13 9 40 9 54 0m-50 12c13 7 32 7 45 0"
        stroke={c.line}
      />
      <path
        d="m51 59 27 17 20 8m-47-13 26 17 22 4m110-34-26 18-20 9m46-13-25 16-21 5"
        stroke={c.line}
        strokeWidth="3"
      />
      <path d="M127 30v12m-6-6h12" stroke={c.accent} />
    </EducationScene>
  )
}
