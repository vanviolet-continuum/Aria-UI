import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function FlashcardsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect
        x="59"
        y="52"
        width="128"
        height="89"
        rx="7"
        fill={c.tint}
        transform="rotate(-10 123 96)"
        stroke={c.line}
      />
      <rect
        x="72"
        y="43"
        width="128"
        height="89"
        rx="7"
        fill={c.surface}
        transform="rotate(7 136 87)"
      />
      <rect x="65" y="61" width="128" height="89" rx="7" fill={c.surface} />
      <circle cx="81" cy="77" r="3" stroke={c.line} />
      <path d="M81 77c-26-1-30-38-7-44 15-4 25 8 22 18" stroke={c.line} />
      <path d="M115 89c0-15 28-16 28 0 0 11-14 10-14 22m0 9v2" stroke={c.accent} strokeWidth="3" />
      <path d="M83 137h91m29-22h13m-7-7v14" stroke={c.line} />
    </EducationScene>
  )
}
