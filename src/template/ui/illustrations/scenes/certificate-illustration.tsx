import { IllustrationFrame, type IllustrationProps } from '../frame'

export function CertificateIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="44"
        y="40"
        width="170"
        height="106"
        rx="8"
        fill="var(--illustration-tint)"
        transform="rotate(-4 129 93)"
      />
      <rect
        x="48"
        y="34"
        width="164"
        height="108"
        rx="7"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M66 56V48h128v8m-128 64v8h60m68-72v20"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M110 58h40m-61 18h82m-73 12h64m-73 13h38m-49 16c6-9 6 10 12 0s4 5 12 0"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="m154 122-5 34 13-7 9 10 4-32m1-5 9 31-12-4-7 9-8-29"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m168 100 6 3 7-1 3 6 6 4-1 7 1 7-6 4-3 6-7-1-6 3-6-3-7 1-3-6-6-4 1-7-1-7 6-4 3-6 7 1 6-3Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="168" cy="119" r="11" fill="var(--illustration-tint)" />
      <path
        d="m162 119 4 4 8-8"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IllustrationFrame>
  )
}
