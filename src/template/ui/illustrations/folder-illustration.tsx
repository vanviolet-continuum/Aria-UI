import { IllustrationFrame, type IllustrationProps } from './frame'

export function FolderIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="M61 62a10 10 0 0 1 10-10h39l13 14h67a10 10 0 0 1 10 10v61a10 10 0 0 1-10 10H71a10 10 0 0 1-10-10V62Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="88"
        y="37"
        width="68"
        height="88"
        rx="7"
        transform="rotate(-6 88 37)"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m101 57 37-4m-35 17 27-3"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M73 88h123a8 8 0 0 1 8 10l-10 41a11 11 0 0 1-11 8H66a8 8 0 0 1-8-10l7-41a8 8 0 0 1 8-8Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="111"
        y="111"
        width="45"
        height="8"
        rx="4"
        fill="var(--illustration-primary)"
        opacity=".2"
      />
      <path
        d="M118 129h30"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
