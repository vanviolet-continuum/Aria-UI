import { IllustrationFrame, type IllustrationProps } from './frame'

export function DownloadIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="85"
        y="31"
        width="91"
        height="94"
        rx="10"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M101 49h37m-37 13h57m-57 13h25"
        stroke="var(--illustration-line)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M60 111v27a12 12 0 0 0 12 12h116a12 12 0 0 0 12-12v-27"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M104 88h53v45h-53Z" fill="var(--illustration-surface)" />
      <path
        d="M130 86v42m-15-15 15 15 15-15"
        stroke="var(--illustration-primary)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m70 76-9-4m128 12 8-6"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="192" cy="49" r="4" fill="var(--illustration-accent)" opacity=".55" />
    </IllustrationFrame>
  )
}
