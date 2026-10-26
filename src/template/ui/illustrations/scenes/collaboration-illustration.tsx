import { IllustrationFrame, type IllustrationProps } from '../frame'
import { ScenePerson } from './scene-person'

export function CollaborationIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="70"
        y="34"
        width="120"
        height="60"
        rx="8"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path d="M130 34v60m-60-30h120" stroke="var(--illustration-line)" strokeWidth="2" />
      <ScenePerson x={78} y={42} scale={0.87} pose="seated" />
      <ScenePerson x={183} y={42} scale={0.87} pose="seated" mirror accent />
      <rect
        x="55"
        y="111"
        width="151"
        height="9"
        rx="4"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M68 120v29m125-29v29"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect
        x="107"
        y="80"
        width="47"
        height="31"
        rx="4"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="m125 91-5 5 5 5m10-10 5 5-5 5"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IllustrationFrame>
  )
}
