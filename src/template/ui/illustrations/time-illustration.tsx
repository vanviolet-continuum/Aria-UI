import { IllustrationFrame, type IllustrationProps } from './frame'

export function TimeIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props} tone={props.tone ?? 'info'}>
      <circle
        cx="143"
        cy="85"
        r="52"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <circle cx="143" cy="85" r="42" fill="var(--illustration-tint)" />
      <path
        d="M143 50v6m35 29h-6m-29 35v-6m-35-29h6"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M143 61v24l18 12"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="143" cy="85" r="4" fill="var(--illustration-primary)" />
      <rect
        x="55"
        y="100"
        width="62"
        height="49"
        rx="8"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M55 115h62m-45-21v12m28-12v12m-28 24h13m11 0h5"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
