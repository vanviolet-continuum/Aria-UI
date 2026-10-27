import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function GraduationIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props} tone={props.tone ?? 'violet'}>
      <path
        d="M88 73v30c24 18 60 18 84 0V73H88Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m130 32 78 34-78 34-78-34 78-34Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m130 64 61 8v32"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m187 103-4 17h16l-4-17"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="67"
        y="126"
        width="122"
        height="22"
        rx="11"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <ellipse cx="80" cy="137" rx="6" ry="8" stroke="var(--illustration-line)" strokeWidth="2" />
      <path d="M132 126v22l8-4 8 4v-22" fill="var(--illustration-accent)" opacity=".5" />
    </IllustrationFrame>
  )
}
