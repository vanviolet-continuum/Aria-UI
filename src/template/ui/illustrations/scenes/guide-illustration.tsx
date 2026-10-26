import { IllustrationFrame, type IllustrationProps } from '../frame'

export function GuideIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="M65 41h114a9 9 0 0 1 9 9v96H65a10 10 0 0 1-10-10V51a10 10 0 0 1 10-10Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M66 32h115a7 7 0 0 1 7 7v96H66V32Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M66 32v103m-11 1c0-6 4-10 11-10h122"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M83 56h49m-49 9h28"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M91 107V91c0-7 5-12 12-12h21c7 0 12 5 12 12s5 12 12 12h11"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />
      <circle cx="91" cy="107" r="5" fill="var(--illustration-accent)" />
      <path
        d="m157 97 6 6-6 6"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M153 31v32l9-6 9 6V31" fill="var(--illustration-accent)" opacity=".4" />
      <circle
        cx="191"
        cy="119"
        r="25"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="m200 110-5 13-13 5 5-13 13-5Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="191" cy="119" r="2" fill="var(--illustration-primary)" />
    </IllustrationFrame>
  )
}
