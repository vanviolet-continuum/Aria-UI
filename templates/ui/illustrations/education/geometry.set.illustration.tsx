import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function GeometrySetIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M57 142V53l89 89H57Z" fill={c.surface} />
      <path d="M74 124V91l33 33H74Z" fill={c.tint} stroke={c.line} />
      <path d="M58 73h9m-9 15h6m-6 15h9m-9 15h6m15 15v9m16-6v6m16-9v9" stroke={c.line} />
      <path d="M156 53v-22m-7 0h14m-7 22-26 95m26-95 38 88" />
      <circle cx="156" cy="58" r="7" fill={c.tint} />
      <path d="m131 148-2 9m65-16 3 10m-48-47h29m-16-6v12" stroke={c.line} />
      <path d="M61 46a44 44 0 0 1 85 1H61Z" fill={c.tint} stroke={c.line} />
      <path d="M103 26v9m-24 1 6 5m42-5-6 5" stroke={c.line} />
    </EducationScene>
  )
}
