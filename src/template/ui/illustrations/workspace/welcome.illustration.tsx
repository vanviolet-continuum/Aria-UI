import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function WelcomeIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props} tone={props.tone ?? 'violet'}>
      <path
        d="M72 145c9-16 18-28 36-37m54-8c19 3 30 16 34 30"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
      <path
        d="m102 93-22 1-15 25 33-4m47-2-1 22 25 15 4-33"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M99 101c14-34 39-56 82-62-6 43-28 68-62 82l-20-20Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M149 48c8 2 17 11 20 20l12-29-32 9Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle
        cx="142"
        cy="78"
        r="12"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="m100 118-13 16m8-22-18 18m30-7-10 14"
        stroke="var(--illustration-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="m67 59 2-7 2 7 7 2-7 2-2 7-2-7-7-2 7-2Zm128 37 2-6 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z"
        fill="var(--illustration-accent)"
        opacity=".7"
      />
    </IllustrationFrame>
  )
}
