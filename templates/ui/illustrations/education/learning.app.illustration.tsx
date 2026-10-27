import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function LearningAppIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="91" y="20" width="79" height="140" rx="13" fill={c.surface} />
      <path d="M101 29h59v119h-59V29Zm17 0v5h24v-5" fill={c.tint} stroke={c.line} />
      <path d="M112 47h38" stroke={c.line} />
      <circle cx="130" cy="76" r="19" fill={c.surface} />
      <path d="m119 73 11-6 11 6-11 6-11-6Zm5 5v7h13v-7" stroke={c.accent} />
      <rect x="109" y="108" width="43" height="9" rx="4" fill={c.surface} stroke={c.line} />
      <path d="M113 112h20m-20 18h35m-29 23h20" stroke={c.line} />
      <path d="M53 72h26v24H53V72Zm131 35h24v24h-24v-24Z" fill={c.surface} stroke={c.line} />
      <path d="m60 84 4 4 8-9m119 40 4 4 7-8m-2-72v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
