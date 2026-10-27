import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function MindMapIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="m111 78-28-26m66 26 28-26m-69 38H71m80 0h38m-78 13-28 26m66-26 28 26"
        stroke={c.line}
      />
      <rect x="105" y="72" width="50" height="36" rx="8" fill={c.tint} />
      <path d="M119 88h22m-18 9h14" stroke={c.accent} />
      <g fill={c.surface}>
        <rect x="53" y="30" width="45" height="28" rx="6" />
        <rect x="162" y="30" width="45" height="28" rx="6" />
        <rect x="39" y="77" width="43" height="27" rx="6" />
        <rect x="178" y="77" width="43" height="27" rx="6" />
        <rect x="53" y="123" width="45" height="28" rx="6" />
        <rect x="162" y="123" width="45" height="28" rx="6" />
      </g>
      <path d="M64 41h23m86 0h23M50 88h21m118 0h21M64 135h23m86 0h23" stroke={c.line} />
    </EducationScene>
  )
}
