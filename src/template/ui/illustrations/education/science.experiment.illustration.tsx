import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function ScienceExperimentIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <ellipse cx="131" cy="148" rx="76" ry="12" fill={c.surface} stroke={c.line} />
      <path d="m74 145 39-65h29l42 65H74Z" fill={c.tint} />
      <path d="M113 80c5-12 25-12 29 0l-3 23-9-10-8 14-9-27Z" fill={c.surface} stroke={c.line} />
      <path
        d="M127 71c-15-20-18-32-2-34 12-1 4 17 10 23 3-23 26-13 18-1m-38 8c-12-6-15-16-7-20"
        stroke={c.accent}
      />
      <circle cx="130" cy="24" r="5" fill={c.tint} stroke={c.accent} />
      <circle cx="158" cy="35" r="4" stroke={c.line} />
      <path
        d="M55 88h22v45H55V88Zm-4 0h30m-26 24h22m-17 9h12m113-34h21v46h-21V87Zm0 17h21"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="m99 122 10-15m42 13 8 10" stroke={c.line} />
    </EducationScene>
  )
}
