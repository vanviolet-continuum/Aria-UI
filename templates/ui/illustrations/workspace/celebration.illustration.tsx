import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function CelebrationIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props} tone={props.tone ?? 'violet'}>
      <path
        d="M98 45H78v16c0 16 10 28 28 30m56-46h20v16c0 16-10 28-28 30"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M96 37h68v40a34 34 0 0 1-68 0V37Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M130 111v24m-24 8h48m-39-8h30v8h-30Z"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m130 54 5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2 5-10Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m59 65 7 4m-4 38 7-3m117-71-5 7m14 53 7 5M79 30l4 8m94 83 7 4"
        stroke="var(--illustration-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="203" cy="58" r="3" fill="var(--illustration-primary)" />
      <circle cx="70" cy="130" r="3" fill="var(--illustration-accent)" />
    </IllustrationFrame>
  )
}
