import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function CreativityIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props} tone={props.tone ?? 'warning'}>
      <path
        d="M90 72a38 38 0 1 1 65 27c-8 7-10 12-10 23h-34c0-11-2-16-10-23a38 38 0 0 1-11-27Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <circle cx="128" cy="72" r="26" fill="var(--illustration-tint)" />
      <path
        d="m116 80 12 14 12-14m-12 14v28m-15 9h30m-24 10h18"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M128 19v9M75 40l7 7m92-7-7 7M65 75h10m106 0h10"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m178 107 9-9 13 13-9 9-13-13Zm0 0-22 22-3 16 16-3 22-22"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </IllustrationFrame>
  )
}
