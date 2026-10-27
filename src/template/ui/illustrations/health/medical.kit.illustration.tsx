import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function MedicalKitIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M101 57V39a7 7 0 0 1 7-7h43a7 7 0 0 1 7 7v18m-46 0V43h35v14"
        fill={c.surface}
        stroke={c.line}
      />
      <rect x="54" y="58" width="151" height="94" rx="12" fill={c.surface} />
      <path d="M54 84h151m-137 0v68m123-68v68" stroke={c.line} />
      <path d="M119 93h21v15h15v21h-15v15h-21v-15h-15v-21h15V93Z" fill={c.tint} stroke={c.accent} />
      <rect x="76" y="76" width="10" height="16" rx="2" fill={c.tint} />
      <rect x="172" y="76" width="10" height="16" rx="2" fill={c.tint} />
      <path d="M41 116v-13m-6 6h12m169-54v-12m-6 6h12" stroke={c.accent} />
      <path d="M92 63h72" stroke={c.line} />
    </CollectionScene>
  )
}
