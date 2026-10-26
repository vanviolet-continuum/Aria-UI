import { IllustrationFrame, type IllustrationProps } from '../frame'

export function CoffeeIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <ellipse
        cx="128"
        cy="146"
        rx="72"
        ry="11"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M168 81h16a18 18 0 0 1 0 36h-17m4-27h11a9 9 0 0 1 0 18h-12"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M79 76h94l-6 49c-2 15-14 23-41 23s-39-8-41-23l-6-49Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse
        cx="126"
        cy="76"
        rx="47"
        ry="9"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <ellipse cx="126" cy="77" rx="37" ry="5" fill="var(--illustration-accent)" opacity=".4" />
      <path
        d="M104 58c-12-11 9-14 0-26m23 24c-12-11 9-14 0-26m23 28c-12-11 9-14 0-26"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M126 124s-16-9-16-17c0-7 10-9 16-2 6-7 16-5 16 2 0 8-16 17-16 17Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M93 94v18" stroke="var(--illustration-line)" strokeWidth="3" strokeLinecap="round" />
      <ellipse
        cx="197"
        cy="137"
        rx="5"
        ry="8"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="1.5"
        transform="rotate(35 197 137)"
      />
      <path d="m200 131-6 12" stroke="var(--illustration-line)" strokeWidth="1.5" />
    </IllustrationFrame>
  )
}
