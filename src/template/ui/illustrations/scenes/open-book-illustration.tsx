import { IllustrationFrame, type IllustrationProps } from '../frame'

export function OpenBookIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="M52 59c30-10 55-7 78 7 24-14 49-17 78-7v82c-28-8-54-4-78 9-23-13-49-17-78-9V59Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M59 45c26-7 51-3 71 12 21-15 46-19 71-12v86c-26-5-49 0-71 13-21-13-45-18-71-13V45Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M130 57v87m-55-76c14-1 28 1 40 7m-40 9c14-1 28 1 40 7m-40 9c14-1 28 1 40 7m31-32c12-6 26-8 40-7m-40 23c12-6 26-8 40-7m-40 23c12-6 26-8 40-7"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M169 42v38l-7-5-7 5V44" fill="var(--illustration-accent)" opacity=".55" />
      <path
        d="m98 28 3 7m46-13-2 8"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
