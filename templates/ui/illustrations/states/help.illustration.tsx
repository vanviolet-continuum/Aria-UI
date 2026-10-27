import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function HelpIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <circle
        cx="114"
        cy="102"
        r="48"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <circle
        cx="114"
        cy="102"
        r="24"
        fill="var(--illustration-wash)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="m78 70 18 17m36 30 18 17m-68-1 17-17m32-30 16-17"
        stroke="var(--illustration-accent)"
        strokeWidth="15"
        opacity=".4"
      />
      <circle cx="114" cy="102" r="48" stroke="var(--illustration-line)" strokeWidth="2" />
      <circle cx="114" cy="102" r="24" stroke="var(--illustration-line)" strokeWidth="2" />
      <path
        d="M155 30h41a14 14 0 0 1 14 14v36a14 14 0 0 1-14 14h-17l-18 14V94h-6a14 14 0 0 1-14-14V44a14 14 0 0 1 14-14Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M167 50a9 9 0 0 1 18 0c0 7-9 7-9 15"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="176" cy="75" r="2.5" fill="var(--illustration-primary)" />
      <path
        d="M53 90c-8 7-10 20-5 30m116 20 9-9"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
