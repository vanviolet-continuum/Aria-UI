import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function RoboticsClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M49 132h162v9H49v-9Zm11 9v16m140-16v16" fill={c.surface} />
      <rect x="95" y="82" width="66" height="40" rx="7" fill={c.tint} />
      <circle cx="108" cy="123" r="9" fill={c.surface} />
      <circle cx="150" cy="123" r="9" fill={c.surface} />
      <path d="M111 82V68h35v14m-22-14V52m-12 0h24" stroke={c.line} />
      <circle cx="112" cy="52" r="6" fill={c.surface} />
      <circle cx="136" cy="52" r="6" fill={c.surface} />
      <path
        d="M107 96h17m-17 9h10m20-9h12m-12 9h12m-54-12L83 83l-8 9m86 1 15-10 9 9"
        stroke={c.line}
      />
      <path d="m62 121 8-23 6 2-8 23m114-1 9-29 7 2-9 29" fill={c.surface} stroke={c.line} />
      <path d="M78 37h20m-20 8h12m72-9v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
