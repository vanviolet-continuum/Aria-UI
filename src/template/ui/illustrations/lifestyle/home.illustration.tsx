import type { IllustrationProps } from '../shared/illustration.frame'
import {
  CollectionScene,
  SceneCloud,
  ScenePlant,
  sceneColors as c,
} from '../shared/collection.scene'

export function HomeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M71 78h118v76H71V78Z" fill={c.surface} />
      <path d="m54 81 76-51 76 51-10 12-66-44-66 44-10-12Z" fill={c.tint} />
      <path d="M168 53V29h15v34" fill={c.surface} stroke={c.line} />
      <rect x="113" y="106" width="31" height="48" rx="3" fill={c.tint} />
      <circle cx="136" cy="132" r="2" fill={c.ink} stroke="none" />
      <path d="M83 98h20v25H83V98Zm72 0h20v25h-20V98Z" fill={c.tint} stroke={c.line} />
      <path d="M93 99v23m-9-11h18m63-12v23m-9-11h18M62 155h140" stroke={c.line} />
      <ScenePlant x={40} y={114} scale={0.65} />
      <path d="M203 150v-27m-12 12h24m-24 9h24m-24-20v29m24-29v29" stroke={c.line} />
      <SceneCloud x={62} y={22} scale={0.55} />
    </CollectionScene>
  )
}
