import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function GiftIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="76"
        y="86"
        width="110"
        height="69"
        rx="5"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M119 91h23v64h-23V91Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <rect
        x="66"
        y="68"
        width="130"
        height="25"
        rx="5"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path d="M119 69h23v24h-23V69Z" fill="var(--illustration-accent)" opacity=".4" />
      <path
        d="M130 68c-29-2-45-11-39-24 8-17 33 4 39 24Zm1 0c29-2 45-11 39-24-8-17-33 4-39 24Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m102 49 28 19 28-19"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m56 49 5 7m137-6 6-7M57 116l-7 3m154-9 7 5m-71-86 2-6"
        stroke="var(--illustration-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="m75 28 3 5 6 1-4 4 1 6-6-3-5 3 1-6-4-4 6-1 2-5Z"
        fill="var(--illustration-accent)"
        opacity=".5"
      />
      <path
        d="M88 107v30"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
