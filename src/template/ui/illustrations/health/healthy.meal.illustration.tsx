import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function HealthyMealIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M69 98c0 34 21 56 61 56s61-22 61-56H69Z" fill={c.surface} />
      <ellipse cx="130" cy="98" rx="61" ry="13" fill={c.tint} stroke={c.line} />
      <path
        d="M90 95C60 74 78 51 100 70c-5-29 19-34 28-10 20-23 43-10 30 13 31-10 42 14 21 26"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="m97 87-14-12m35 11 2-25m27 27 8-14m-14 53c-17-9-23 2-30 4" stroke={c.line} />
      <path d="m152 93 9-37 17 5-17 35" fill={c.tint} />
      <path d="m161 56-2-15m5 16 7-16m-1 18 12-12" stroke={c.accent} />
      <circle cx="106" cy="91" r="12" fill={c.tint} stroke={c.accent} />
      <path d="m106 84 1 7 6 1m-8 0-5 5" stroke={c.line} />
      <path d="m51 49 18 43M47 51l6-3 17 40m126-20-11 27" strokeWidth="3" />
      <path d="M93 155h74" />
    </CollectionScene>
  )
}
