import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function CactusIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M110 119V52a19 19 0 0 1 38 0v38h13V73a9 9 0 0 1 18 0v24a11 11 0 0 1-11 11h-20v11h-38Z"
        fill={c.tint}
      />
      <path d="M110 91H92a12 12 0 0 1-12-12V63a8 8 0 0 1 16 0v13h14" fill={c.tint} />
      <path
        d="M123 47v67m11-64v64m-45-47v13m80-7v22m-54-33 5-1m16 20 6-1m-27 18 5-1"
        stroke={c.line}
      />
      <path d="m98 119 8 38h49l8-38H98Z" fill={c.surface} />
      <path d="M101 129h59m-47 7 2 13m32-13-2 13" stroke={c.line} />
      <path
        d="M129 33c-14-4-15-14-6-17l6 8 6-8c10 3 8 13-6 17Z"
        fill={c.surface}
        stroke={c.accent}
      />
      <path d="M55 157h141m-6-15h10m-150 3h8" stroke={c.line} />
    </CollectionScene>
  )
}
