import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function AtomIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="130" cy="88" rx="84" ry="30" stroke={c.line} />
      <ellipse cx="130" cy="88" rx="84" ry="30" transform="rotate(60 130 88)" />
      <ellipse cx="130" cy="88" rx="84" ry="30" transform="rotate(120 130 88)" stroke={c.line} />
      <circle cx="130" cy="88" r="16" fill={c.tint} />
      <circle cx="120" cy="83" r="7" fill={c.surface} />
      <circle cx="138" cy="83" r="7" fill={c.surface} />
      <circle cx="130" cy="98" r="7" fill={c.tint} />
      <circle cx="210" cy="80" r="7" fill={c.surface} stroke={c.accent} />
      <circle cx="87" cy="32" r="7" fill={c.surface} stroke={c.accent} />
      <circle cx="92" cy="148" r="7" fill={c.surface} stroke={c.accent} />
      <path d="M52 46v8m-4-4h8m144 80v8m-4-4h8M120 158h20" stroke={c.line} />
    </CollectionScene>
  )
}
