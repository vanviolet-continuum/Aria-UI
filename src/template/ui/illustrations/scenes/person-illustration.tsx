import { IllustrationFrame, type IllustrationProps } from '../frame'
import { ScenePerson } from './scene-person'

export function PersonIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="59"
        y="53"
        width="50"
        height="38"
        rx="8"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m95 91-7 9v-9M72 67h24m-24 10h15"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ScenePerson x={143} y={31} pose="waving" />
      <path
        d="m187 39 4-7m1 18 8-1m-26-20 1-7"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M63 148h36m81 0h20"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
