import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function ArtificialIntelligenceIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="87" y="49" width="86" height="86" rx="12" fill={c.surface} />
      <rect x="99" y="61" width="62" height="62" rx="7" fill={c.tint} stroke={c.line} />
      <path
        d="M102 49V36m19 13V36m19 13V36m19 13V36m-57 99v13m19-13v13m19-13v13m19-13v13M87 65H74m13 18H74m13 18H74m13 18H74m99-54h13m-13 18h13m-13 18h13m-13 18h13"
        stroke={c.line}
      />
      <path
        d="M129 77c-9-11-24-1-18 10-8 10-1 23 11 20l7 7V77Zm2 0c9-11 24-1 18 10 8 10 1 23-11 20l-7 7V77Z"
        fill={c.surface}
      />
      <path d="m114 86 8 3m-9 7 9-1m25-9-8 3m9 7-9-1" stroke={c.line} />
      <path d="M49 74V50h14m-14 77v20h16m146-40v23h-14m-4-77h18v20" stroke={c.line} />
      <circle cx="63" cy="50" r="4" fill={c.accent} stroke="none" />
      <circle cx="197" cy="130" r="4" fill={c.accent} stroke="none" />
    </CollectionScene>
  )
}
