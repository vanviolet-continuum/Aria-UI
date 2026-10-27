import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function SmartwatchIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m103 54 7-31h39l7 31m-53 73 7 31h39l7-31" fill={c.tint} />
      <path d="M112 37h35m-33 106h32" stroke={c.line} />
      <rect x="89" y="52" width="81" height="77" rx="19" fill={c.surface} />
      <rect x="98" y="61" width="63" height="59" rx="12" fill={c.tint} stroke={c.line} />
      <path d="M171 74h6v14h-6m0 11h4v9h-4" fill={c.surface} />
      <path d="M108 91h9l7-11 9 22 8-15 6 4h5" strokeWidth="2.5" />
      <path d="M117 109h25" stroke={c.line} />
      <circle cx="129" cy="71" r="2" fill={c.accent} stroke="none" />
      <path
        d="M55 64c-8 13-8 30 0 43m7-36c-5 9-5 19 0 28m137-23c5 9 5 19 0 28m7-36c8 13 8 30 0 43"
        stroke={c.line}
      />
    </CollectionScene>
  )
}
