import { IllustrationFrame, type IllustrationProps } from './frame'

export function AccessDeniedIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props} tone={props.tone ?? 'violet'}>
      <rect
        x="52"
        y="61"
        width="76"
        height="80"
        rx="9"
        transform="rotate(-8 52 61)"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m69 79 39-5m-37 19 32-4m-30 18 22-3"
        stroke="var(--illustration-line)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M153 33c13 10 26 14 42 17v43c0 30-20 49-42 60-22-11-42-30-42-60V50c16-3 29-7 42-17Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M153 45c10 7 20 11 31 13v35c0 23-14 39-31 49-17-10-31-26-31-49V58c11-2 21-6 31-13Z"
        fill="var(--illustration-tint)"
      />
      <rect
        x="135"
        y="86"
        width="36"
        height="31"
        rx="7"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M142 86v-9a11 11 0 0 1 22 0v9"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="153" cy="99" r="3" fill="var(--illustration-primary)" />
      <path
        d="M153 102v5"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
