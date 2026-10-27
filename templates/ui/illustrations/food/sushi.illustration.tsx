import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function SushiIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m48 111 122-14 45 37-125 18-42-41Z" fill={c.surface} stroke={c.line} />
      <path d="m48 111 2 9 40 39 125-18v-7m-125 18v7" stroke={c.line} />
      <path d="M75 87v28c0 15 42 15 42 0V87H75Z" fill={c.tint} />
      <ellipse cx="96" cy="87" rx="21" ry="12" fill={c.surface} />
      <ellipse cx="96" cy="87" rx="10" ry="6" fill={c.tint} stroke={c.accent} />
      <path d="M129 91v28c0 15 42 15 42 0V91h-42Z" fill={c.tint} />
      <ellipse cx="150" cy="91" rx="21" ry="12" fill={c.surface} />
      <ellipse cx="150" cy="91" rx="10" ry="6" fill={c.tint} stroke={c.accent} />
      <path d="m112 56 29-8 21 14-28 9-22-15Z" fill={c.tint} />
      <path d="m116 57 2 11 16 12 26-8 2-10m-28 9v9m-12-28 20 13m-10-16 19 12" stroke={c.line} />
      <path d="m50 50 127-21M48 58l130-17" strokeWidth="3" />
      <path d="m176 119 12-1 6 6-12 1-6-6Z" fill={c.tint} stroke={c.accent} />
    </CollectionScene>
  )
}
