import { IllustrationFrame, type IllustrationProps } from '../frame'
import { ScenePerson } from './scene-person'

export function ReadingIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="53"
        y="61"
        width="39"
        height="82"
        rx="5"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M53 100h39m-29-30v24m8-24v24m10-20 5 20m-22 17v25m10-25v25"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ScenePerson x={140} y={32} scale={0.98} pose="reading" />
      <path
        d="M113 88c10-3 19-1 27 4 9-5 18-7 27-4v31c-10-2-19 0-27 5-8-5-17-7-27-5V88Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M140 92v32m-20-26 12 1m-12 8 12 1m16-10 12-1m-12 10 12-1"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M193 144v-25m0 14c-11-1-17-8-17-17 10 0 16 7 17 17Zm0-6c0-11 7-19 17-20 0 10-6 18-17 20Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-accent)"
        strokeWidth="1.5"
      />
      <path
        d="M183 145h20"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
