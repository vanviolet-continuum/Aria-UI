import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'
import { ScenePerson } from '../shared/scene.person'

export function PresentationIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="113"
        y="35"
        width="104"
        height="77"
        rx="7"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M165 112v36m-18 0h36"
        stroke="var(--illustration-line)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M128 94h73m-70-9 17-13 18 4 28-24"
        stroke="var(--illustration-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="131" y="83" width="11" height="11" rx="2" fill="var(--illustration-tint)" />
      <rect
        x="151"
        y="74"
        width="11"
        height="20"
        rx="2"
        fill="var(--illustration-primary)"
        opacity=".25"
      />
      <rect
        x="172"
        y="66"
        width="11"
        height="28"
        rx="2"
        fill="var(--illustration-accent)"
        opacity=".3"
      />
      <ScenePerson x={76} y={41} scale={0.9} pose="pointing" />
    </IllustrationFrame>
  )
}
