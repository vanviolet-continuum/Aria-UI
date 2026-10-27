import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function AnnouncementIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="m91 109 13 41h22l-9-43"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m99 132 20-4" stroke="var(--illustration-line)" strokeWidth="2" />
      <path
        d="M68 78h38l66-31v83l-66-28H68a10 10 0 0 1-10-10v-4a10 10 0 0 1 10-10Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m109 79 54-25v68l-54-23V79Z" fill="var(--illustration-tint)" />
      <path d="M78 79v23m29-24v25" stroke="var(--illustration-line)" strokeWidth="2" />
      <rect
        x="166"
        y="42"
        width="12"
        height="94"
        rx="6"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path d="M178 76c16 0 16 25 0 25" stroke="var(--illustration-primary)" strokeWidth="2" />
      <path
        d="m196 58 12-10m-9 40h17m-20 29 12 10"
        stroke="var(--illustration-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M72 45h40m-40 9h23"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="60" cy="47" r="5" fill="var(--illustration-accent)" opacity=".5" />
    </IllustrationFrame>
  )
}
