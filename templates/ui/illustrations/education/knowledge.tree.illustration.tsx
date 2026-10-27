import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function KnowledgeTreeIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M124 150v-44L97 86l6-9 27 19 24-28 9 8-26 33v41h-13Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M70 54c10-4 18-2 27 4 9-6 17-8 27-4v29c-10-3-19-1-27 5-8-6-17-8-27-5V54Zm27 4v30M128 28c9-3 16-1 24 4 8-5 15-7 24-4v26c-9-3-17-1-24 4-7-5-15-7-24-4V28Zm24 4v26M155 74c10-4 18-2 27 4 9-6 17-8 27-4v29c-10-3-19-1-27 5-8-6-17-8-27-5V74Zm27 4v30"
        fill={c.surface}
      />
      <path
        d="M80 65h10m15 0h10m22-27h9m14 0h8m-4 47h11m15 0h10M104 153c8-8 17-9 26-3 9-6 18-5 26 3"
        stroke={c.line}
      />
      <path d="M59 108c-4-16 9-24 18-20 1 15-8 21-18 20Z" fill={c.tint} stroke={c.line} />
    </EducationScene>
  )
}
