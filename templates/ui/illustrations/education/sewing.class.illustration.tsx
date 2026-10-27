import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function SewingClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M79 73c0-23 22-29 36-16h45c10 0 17 7 17 17v47H74v-16h57V83h-28v12H79V73Z"
        fill={c.surface}
      />
      <path
        d="M84 121h95v14H70v-14h14Zm13-70V39h18v12m-9-12v-8m-17 65v14m-8 0h16"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="160" cy="79" r="10" fill={c.tint} stroke={c.line} />
      <path d="M160 72v14m-6-7h12M51 144h157" stroke={c.line} />
      <path d="m119 136 53-1 10 20h-66l3-19Z" fill={c.tint} stroke={c.line} />
      <path d="M127 141h36m-37 6h39" stroke={c.line} strokeDasharray="3 4" />
      <circle cx="195" cy="107" r="10" fill={c.surface} stroke={c.line} />
      <path d="M192 104h1m5 0h1m-7 6h1m5 0h1" stroke={c.line} />
    </EducationScene>
  )
}
