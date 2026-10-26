import { IllustrationFrame, type IllustrationProps } from '../frame'

export function LaptopIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="55"
        y="42"
        width="151"
        height="100"
        rx="8"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <rect
        x="64"
        y="51"
        width="133"
        height="81"
        rx="3"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path d="M64 67h133" stroke="var(--illustration-line)" strokeWidth="2" />
      <circle cx="72" cy="59" r="2" fill="var(--illustration-accent)" />
      <circle cx="79" cy="59" r="2" fill="var(--illustration-line)" />
      <circle cx="86" cy="59" r="2" fill="var(--illustration-line)" />
      <path
        d="m95 86-10 10 10 10m24-20 10 10-10 10m-8-25-7 30"
        stroke="var(--illustration-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M148 84h34m-34 12h25m-25 12h30"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="m55 142-15 10a3 3 0 0 0 2 5h178a3 3 0 0 0 2-5l-16-10H55Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m110 142 3 6h34l3-6"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M44 139v-28m0 16c-11 0-16-9-15-17 10 1 15 8 15 17Zm0-9c0-11 7-18 15-17-1 10-7 17-15 17Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="1.5"
      />
      <path
        d="m33 136 3 20h16l3-20H33Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </IllustrationFrame>
  )
}
