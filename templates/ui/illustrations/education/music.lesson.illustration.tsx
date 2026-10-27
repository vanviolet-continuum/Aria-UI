import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function MusicLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M69 36h121l7 81H62l7-81Z" fill={c.surface} />
      <path d="M78 52h100m-100 9h100m-100 9h100m-100 9h100m-100 9h100" stroke={c.line} />
      <path d="M100 81V58l20-5v23m-20-13 20-5m22 18V52l20 6" stroke={c.accent} />
      <ellipse cx="94" cy="84" rx="6" ry="4" fill={c.tint} />
      <ellipse cx="114" cy="79" rx="6" ry="4" fill={c.tint} />
      <ellipse cx="136" cy="79" rx="6" ry="4" fill={c.tint} />
      <path d="M130 117v34m-20 7 20-12 20 12m-99-33 15 10m-5-17 5 17-17 3" stroke={c.line} />
      <path d="m183 116 7-1 14 41-8 2-13-42Z" fill={c.tint} />
      <path d="m190 132 8-3m-5 12 7-2m-4 10 7-2" stroke={c.line} />
    </EducationScene>
  )
}
