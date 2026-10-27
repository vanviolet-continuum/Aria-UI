import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function PizzaIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="130" cy="139" rx="86" ry="16" fill={c.surface} stroke={c.line} />
      <path d="M67 59c32-28 74-28 117 0l-55 88L67 59Z" fill={c.tint} />
      <path
        d="M64 60c-5-5-1-12 4-14 36-24 79-20 116 0 6 3 9 10 4 14l-4 3c-43-25-76-25-114 0l-6-3Z"
        fill={c.surface}
      />
      <path d="m90 94 10 5 4-12m38 16 8-4 6 6m-36-34 6-4 6 4m-4 59 3 6" stroke={c.line} />
      <circle cx="108" cy="74" r="9" fill={c.surface} />
      <circle cx="148" cy="75" r="10" fill={c.surface} />
      <circle cx="127" cy="108" r="9" fill={c.surface} />
      <path
        d="M162 46c-16 7-25-2-26-9 12-4 20 0 26 9ZM86 77c-3 11 4 17 11 17 3-9 0-14-11-17Z"
        fill={c.accent}
        fillOpacity=".3"
        stroke={c.line}
      />
      <path d="M164 134h18m-132-8h15" stroke={c.line} />
    </CollectionScene>
  )
}
