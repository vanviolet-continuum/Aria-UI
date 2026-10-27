import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function BankingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m49 65 81-37 81 37H49Z" fill={c.surface} />
      <path d="M58 71h144v13H58V71Z" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="52" r="8" fill={c.tint} stroke={c.line} />
      <path d="M70 84h16v54H70V84Zm52 0h16v54h-16V84Zm52 0h16v54h-16V84Z" fill={c.surface} />
      <path d="M65 91h25m27 0h25m27 0h25m-129 40h25m27 0h25m27 0h25" stroke={c.line} />
      <path d="M58 138h144v10H58v-10Zm-10 10h164v10H48v-10Z" fill={c.tint} stroke={c.line} />
      <path d="M40 88v9m-4-4h8m174 15v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}
