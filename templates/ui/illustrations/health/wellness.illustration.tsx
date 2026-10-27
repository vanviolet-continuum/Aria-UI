import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, ScenePlant, sceneColors as c } from '../shared/collection.scene'

export function WellnessIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="126" cy="151" rx="71" ry="9" fill={c.surface} stroke={c.line} />
      <path
        d="M65 137c0-10 47-10 47 0s-47 10-47 0Zm8-19c0-9 32-9 32 0s-32 9-32 0Zm6-17c0-8 21-8 21 0s-21 8-21 0Z"
        fill={c.tint}
        stroke={c.line}
      />
      <rect x="126" y="83" width="47" height="63" rx="8" fill={c.surface} />
      <path d="M138 83V65h23v18m-29 21h35v28h-35v-28Z" fill={c.tint} stroke={c.line} />
      <path d="M143 64V51h16" strokeWidth="4" />
      <path d="M150 111c-8 10-8 14 0 14s8-4 0-14Z" fill={c.surface} stroke={c.accent} />
      <ScenePlant x={169} y={76} scale={0.8} />
      <path d="M87 76c-8-10 10-14 1-27m23 29c-8-10 10-14 1-27" stroke={c.line} />
      <path d="M68 54c-7-16 0-25 12-25-1 11-5 18-12 25Z" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
