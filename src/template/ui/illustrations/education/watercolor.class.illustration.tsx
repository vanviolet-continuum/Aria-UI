import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function WatercolorClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M58 34h103v97H58V34Z" fill={c.surface} />
      <path
        d="M74 102c-17-17 9-34 21-17-9-32 24-47 32-16 21-10 30 12 8 31 18 23-37 29-61 2Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m90 88 29-22m-20 41 31-17" stroke={c.accent} />
      <rect x="68" y="135" width="128" height="23" rx="5" fill={c.surface} />
      <g fill={c.tint} stroke={c.line}>
        <circle cx="83" cy="146" r="6" />
        <circle cx="105" cy="146" r="6" />
        <circle cx="127" cy="146" r="6" />
        <circle cx="149" cy="146" r="6" />
        <circle cx="171" cy="146" r="6" />
      </g>
      <path
        d="m177 120 15-54 7 2-15 54m5-55c-9-8 3-17 9-23-2 10 7 20 1 23M169 99h35l-4 31h-27l-4-31Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M173 112h28" stroke={c.line} />
    </EducationScene>
  )
}
