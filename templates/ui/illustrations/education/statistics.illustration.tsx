import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function StatisticsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M56 39h106v115H56V39Z" fill={c.surface} />
      <path d="M70 54h54m-54 10h37m-37 68V82m0 50h78" stroke={c.line} />
      <path
        d="M80 109h14v23H80v-23Zm24-16h14v39h-14V93Zm24-12h14v51h-14V81Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="179" cy="75" r="29" fill={c.surface} />
      <path d="M179 46v29h29a29 29 0 0 0-29-29Z" fill={c.tint} stroke={c.accent} />
      <path d="m179 75-20 21" stroke={c.line} />
      <path d="M168 129h34m-28-11h28m-16-11h16M78 144h64" stroke={c.line} />
      <circle cx="172" cy="107" r="3" fill={c.accent} stroke="none" />
      <circle cx="166" cy="118" r="3" fill={c.accent} stroke="none" />
      <circle cx="160" cy="129" r="3" fill={c.accent} stroke="none" />
    </EducationScene>
  )
}
