import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function HeadphonesIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M70 105V76a60 60 0 0 1 120 0v29h-12V76a48 48 0 0 0-96 0v29H70Z" fill={c.tint} />
      <path d="M85 44c26-23 58-23 86 0" stroke={c.line} strokeWidth="5" />
      <rect x="62" y="87" width="26" height="57" rx="10" fill={c.surface} />
      <rect x="172" y="87" width="26" height="57" rx="10" fill={c.surface} />
      <path d="M76 95v39m108-39v39" stroke={c.line} strokeWidth="4" />
      <path d="M184 145c0 16-14 17-41 17" stroke={c.line} />
      <rect x="128" y="157" width="17" height="7" rx="3" fill={c.tint} />
      <path d="M118 107V79l26-5v28m-26-17 26-5" />
      <ellipse cx="111" cy="110" rx="7" ry="5" fill={c.tint} />
      <ellipse cx="137" cy="105" rx="7" ry="5" fill={c.tint} />
      <path d="M43 78v10m-5-5h10m163-23v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}
