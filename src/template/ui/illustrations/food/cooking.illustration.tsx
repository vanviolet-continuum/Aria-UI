import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function CookingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M72 89h114v42c0 15-114 15-114 0V89Z" fill={c.surface} />
      <path d="M72 97H54v15h18m114-15h18v15h-18M64 89h130" />
      <path d="M77 84c8-26 95-26 104 0H77Z" fill={c.tint} />
      <path d="M119 66v-7h22v7" fill={c.surface} />
      <path d="M83 103v24m8-24v16" stroke={c.line} />
      <rect x="66" y="144" width="128" height="12" rx="4" fill={c.tint} stroke={c.line} />
      <path d="m94 144 5-8m53 8 5-8" stroke={c.accent} />
      <path d="M96 50c-9-9 8-11 1-20m25 19c-9-9 8-11 1-20m24 20c-9-9 8-11 1-20" stroke={c.line} />
      <path d="m195 72 9-35c1-5 9-5 10 0l-3 39-16-4Z" fill={c.tint} stroke={c.line} />
      <path d="m199 60 10 2m-10-10 10 2M51 144h8" stroke={c.line} />
    </CollectionScene>
  )
}
