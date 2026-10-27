import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function FinancialGoalIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M64 154v-28h31v-26h31V74h32V47h33v107H64Z" fill={c.surface} />
      <path d="M64 126h31m0-26h31m0-26h32m0-27h33" stroke={c.line} />
      <path d="M174 47V19m0 0 25 5-25 11" fill={c.tint} />
      <circle cx="79" cy="95" r="20" fill={c.tint} />
      <path d="M84 88h-7c-8 0-8 8 0 8h4c8 0 8 8 0 8h-8m6-21v24" stroke={c.accent} />
      <path d="m102 61 21-22 10 8 24-25m-12 0h12v13M45 155h170" stroke={c.line} />
      <path d="M199 119v-11m-5 6h10" stroke={c.accent} />
    </CollectionScene>
  )
}
