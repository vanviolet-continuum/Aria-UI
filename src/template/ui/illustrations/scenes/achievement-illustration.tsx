import { IllustrationFrame, type IllustrationProps } from '../frame'
import { ScenePerson } from './scene-person'

export function AchievementIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="M118 155v-24h29v-24h29V82h31v73h-89Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M118 131h29m0-24h29m0-25h31"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M192 82V29m0 0 26 6-26 12"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m194 31 20 5-20 9" fill="var(--illustration-accent)" opacity=".45" />
      <ScenePerson x={81} y={48} scale={0.91} pose="pointing" accent />
      <path
        d="m146 53 4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1 4-8Z"
        fill="var(--illustration-accent)"
        fillOpacity=".3"
        stroke="var(--illustration-primary)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m53 41 4 5m60-15-1 6m57 14 5 3"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
