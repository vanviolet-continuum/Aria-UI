import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function CalculatorIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="81" y="26" width="99" height="132" rx="10" fill={c.surface} />
      <rect x="93" y="39" width="75" height="30" rx="4" fill={c.tint} stroke={c.line} />
      <path d="M145 51v8m10-8v8m-22 0h3" stroke={c.accent} strokeWidth="3" />
      <g fill={c.tint} stroke={c.line}>
        <rect x="95" y="83" width="14" height="12" rx="3" />
        <rect x="123" y="83" width="14" height="12" rx="3" />
        <rect x="151" y="83" width="14" height="12" rx="3" />
        <rect x="95" y="107" width="14" height="12" rx="3" />
        <rect x="123" y="107" width="14" height="12" rx="3" />
        <rect x="151" y="107" width="14" height="35" rx="3" />
        <rect x="95" y="131" width="14" height="12" rx="3" />
        <rect x="123" y="131" width="14" height="12" rx="3" />
      </g>
      <path
        d="M52 65v14m-7-7h14m139 41h14m-12-41 8 8m-8 0 8-8M49 123h13m-13 6h13"
        stroke={c.accent}
      />
    </CollectionScene>
  )
}
