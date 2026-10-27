import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function OnlineQuizIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="55" y="38" width="147" height="105" rx="7" fill={c.surface} />
      <path
        d="M55 55h147m-130 30h82m-82 20h82m-82 20h82m-47 18v12m39-12v12m-48 0h57"
        stroke={c.line}
      />
      <circle cx="80" cy="78" r="4" fill={c.tint} />
      <circle cx="80" cy="98" r="4" fill={c.tint} stroke={c.accent} />
      <circle cx="80" cy="118" r="4" fill={c.tint} />
      <path d="M92 78h55m-55 20h55m-55 20h35" stroke={c.line} />
      <path d="M178 68c-10 0-11 13-3 13 7 0 10-13 0-13m-4 22h5" stroke={c.line} />
      <circle cx="192" cy="121" r="20" fill={c.tint} />
      <path d="m182 121 7 7 14-15" stroke={c.accent} strokeWidth="3" />
      <path d="M66 47h22" stroke={c.line} />
    </EducationScene>
  )
}
