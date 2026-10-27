import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function PetDogIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M120 93c34-7 59 5 62 21 20 2 25-10 19-17 23 11 10 35-18 30v25h-18v-26h-26v26h-17l-2-59Z"
        fill={c.tint}
      />
      <path d="M85 74c-22-16-25 1-16 24l15 1m24-25c22-16 25 1 16 24l-15 1" fill={c.surface} />
      <path d="M79 77c9-17 30-17 39 0v26c0 28-39 28-39 0V77Z" fill={c.surface} />
      <path d="M86 104c7-8 18-8 25 0m-17 2h11l-5 6-6-6Z" fill={c.tint} />
      <path d="M88 89v4m22-4v4m-10 19v6m-7 1c4 3 10 3 14 0" stroke={c.line} />
      <path d="M80 126h39v7H80v-7Z" fill={c.tint} stroke={c.accent} />
      <circle cx="101" cy="137" r="5" fill={c.surface} stroke={c.accent} />
      <path
        d="M73 154H56c-7 4-7 11 0 11 5 6 13 3 13-1h13c0 4 8 7 13 1 7 0 7-7 0-11H78"
        stroke={c.line}
      />
    </CollectionScene>
  )
}
