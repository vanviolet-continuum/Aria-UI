import { IllustrationFrame, type IllustrationProps } from '../frame'
import { ScenePerson } from './scene-person'

export function SupportAgentIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <ScenePerson x={128} y={33} pose="seated" />
      <path
        d="M107 56v-7a21 21 0 0 1 42 0v14c0 8-6 11-15 11"
        stroke="var(--illustration-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="104"
        y="51"
        width="7"
        height="15"
        rx="3.5"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="1.5"
      />
      <rect
        x="145"
        y="51"
        width="7"
        height="15"
        rx="3.5"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="1.5"
      />
      <rect
        x="91"
        y="100"
        width="76"
        height="35"
        rx="5"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <circle cx="129" cy="118" r="4" fill="var(--illustration-tint)" />
      <path
        d="M78 136h105"
        stroke="var(--illustration-line)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M174 36h29a7 7 0 0 1 7 7v18a7 7 0 0 1-7 7h-15l-10 8v-8h-4a7 7 0 0 1-7-7V43a7 7 0 0 1 7-7Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M178 48h20m-20 9h13"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
