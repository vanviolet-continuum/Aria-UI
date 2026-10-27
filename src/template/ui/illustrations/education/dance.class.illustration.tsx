import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function DanceClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M52 88h158m-150 0v68m143-68v68m-143-19h143" stroke={c.line} />
      <circle cx="129" cy="49" r="11" fill={c.surface} stroke={c.line} />
      <path d="M121 39c-3-14 17-15 18 0m-19 24h18l5 35h-29l6-35Z" fill={c.tint} stroke={c.line} />
      <path d="m120 67-22-15-8-19m48 34 21-16 10-18m-79 0 6-5m73 5-5-5" />
      <path d="m114 98-14 23h57l-14-23h-29Z" fill={c.surface} />
      <path d="m117 121 1 25-12 10m30-35 9 20 22-7m-60 22h16m44-22 7 1" stroke={c.line} />
      <path d="M60 54h13m-13 8h13m111-9v9m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
