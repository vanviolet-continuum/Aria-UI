import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function CampingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m68 147 56-89 58 89H68Z" fill={c.surface} />
      <path d="m124 58 18 89h40l-58-89Z" fill={c.tint} />
      <path d="m93 147 31-66 18 66H93Z" fill={c.tint} stroke={c.line} />
      <path d="M124 81v66M58 149h132m-66-91-6-9m64 98 9 7" />
      <path d="m169 111 20-34h-9l15-28 16 28h-9l20 34h-53Z" fill={c.tint} stroke={c.line} />
      <path d="M195 111v28" stroke={c.line} />
      <path d="M62 137c-14-12 7-15 4-31 20 17 20 24 10 31H62Z" fill={c.tint} stroke={c.accent} />
      <path d="m54 144 32-7m-30 0 29 8" strokeWidth="3" />
      <path
        d="M77 27c-7 14 3 25 17 22-7 11-25 9-28-4-2-9 3-16 11-18Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M140 28v6m-3-3h6m-34 12v5m-3-2h6" stroke={c.accent} />
    </CollectionScene>
  )
}
