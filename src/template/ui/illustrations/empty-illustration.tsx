import { IllustrationFrame, type IllustrationProps } from './frame'

export function EmptyIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="m68 96 16-35h91l17 35v45a9 9 0 0 1-9 9H77a9 9 0 0 1-9-9V96Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M68 97h36l8 13h35l9-13h36v44a9 9 0 0 1-9 9H77a9 9 0 0 1-9-9V97Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <g transform="rotate(-8 126 68)">
        <rect
          x="98"
          y="33"
          width="60"
          height="62"
          rx="7"
          fill="var(--illustration-surface)"
          stroke="var(--illustration-line)"
          strokeWidth="2"
        />
        <path
          d="M110 50h35m-35 10h27m-27 10h31"
          stroke="var(--illustration-line)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <path
        d="m117 20 3 7m49 5 5-5m-86 8-7-3"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="112"
        y="129"
        width="35"
        height="5"
        rx="2.5"
        fill="var(--illustration-primary)"
        opacity=".35"
      />
    </IllustrationFrame>
  )
}
