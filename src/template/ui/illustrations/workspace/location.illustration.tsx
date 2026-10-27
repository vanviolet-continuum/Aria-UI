import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function LocationIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="m54 85 50-14 51 15 50-15v69l-50 15-51-15-50 14V85Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m104 71 51 15v69l-51-15V71Z" fill="var(--illustration-tint)" />
      <path
        d="m64 121 29-8 59 18 42-12m-90-48v69m51-54v69"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M132 30a31 31 0 0 1 31 31c0 22-31 49-31 49s-31-27-31-49a31 31 0 0 1 31-31Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle
        cx="132"
        cy="61"
        r="12"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <ellipse cx="132" cy="119" rx="15" ry="4" fill="var(--illustration-primary)" opacity=".15" />
    </IllustrationFrame>
  )
}
