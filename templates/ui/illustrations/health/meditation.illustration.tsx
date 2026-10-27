import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function MeditationIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="130" cy="72" r="53" stroke={c.line} strokeDasharray="3 6" />
      <circle cx="130" cy="59" r="14" fill={c.surface} stroke={c.line} />
      <path d="M118 55c-2-17 22-20 25-5l-15-4-10 9Z" fill={c.tint} stroke={c.line} />
      <path d="M124 63h3m6 0h3m-8 6h5" stroke={c.line} />
      <path d="M120 77h20l14 34-24 10-24-10 14-34Z" fill={c.surface} />
      <path d="m120 82-22 28-18 5m60-33 22 28 18 5" />
      <path d="M128 119c-42-18-51-1-40 10l38 15m7-25c42-18 51-1 40 10l-38 15" fill={c.tint} />
      <path d="m111 126 24 18m14-18-23 18M73 151h114" stroke={c.line} />
      <path
        d="M56 95c-10-4-15-13-11-19 9 1 13 7 11 19Zm148-8c-3-12 4-19 12-18 2 10-4 16-12 18Z"
        fill={c.tint}
        stroke={c.line}
      />
    </CollectionScene>
  )
}
