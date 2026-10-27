import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function DiplomaIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <g transform="rotate(-17 131 90)">
        <path d="M67 65h125v48H67V65Z" fill={c.surface} />
        <ellipse cx="67" cy="89" rx="12" ry="24" fill={c.tint} stroke={c.line} />
        <ellipse cx="192" cy="89" rx="12" ry="24" fill={c.surface} />
        <ellipse cx="192" cy="89" rx="6" ry="15" stroke={c.line} />
        <path d="M117 65h21v48h-21V65Z" fill={c.tint} stroke={c.accent} />
        <path
          d="m125 88-11-10c-13-8-19 12-5 12l16-2Zm4 0 11-10c13-8 19 12 5 12l-16-2Zm-4 2-15 41 12-5 6 7 4-43m1 0 13 38 5-8 11 3-23-33"
          fill={c.tint}
          stroke={c.accent}
        />
      </g>
      <path d="M64 135v9m-4-4h8m129-96v8m-4-4h8M105 155h54" stroke={c.line} />
    </EducationScene>
  )
}
