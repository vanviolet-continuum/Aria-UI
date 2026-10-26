import { IllustrationFrame, type IllustrationProps } from './frame'

export function DocumentsIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="62"
        y="46"
        width="86"
        height="105"
        rx="9"
        transform="rotate(-10 62 46)"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M107 32h48l29 29v79a9 9 0 0 1-9 9h-68a9 9 0 0 1-9-9V41a9 9 0 0 1 9-9Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M155 32v22a7 7 0 0 0 7 7h22"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M113 82h52m-52 13h39m-39 13h48m-48 13h27"
        stroke="var(--illustration-line)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="188" cy="129" r="16" fill="var(--illustration-accent)" />
      <path
        d="M188 122v14m-7-7h14"
        stroke="var(--illustration-surface)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
