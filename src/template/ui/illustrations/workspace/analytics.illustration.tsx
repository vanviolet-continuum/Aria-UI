import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function AnalyticsIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="52"
        y="40"
        width="151"
        height="108"
        rx="12"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path d="M52 63h151" stroke="var(--illustration-line)" strokeWidth="2" />
      <circle cx="66" cy="52" r="3" fill="var(--illustration-primary)" opacity=".6" />
      <path d="M79 52h38" stroke="var(--illustration-line)" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M71 130h112M72 77v53"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="82"
        y="110"
        width="17"
        height="20"
        rx="3"
        fill="var(--illustration-primary)"
        opacity=".25"
      />
      <rect
        x="108"
        y="99"
        width="17"
        height="31"
        rx="3"
        fill="var(--illustration-primary)"
        opacity=".4"
      />
      <rect
        x="134"
        y="89"
        width="17"
        height="41"
        rx="3"
        fill="var(--illustration-primary)"
        opacity=".6"
      />
      <rect
        x="160"
        y="76"
        width="17"
        height="54"
        rx="3"
        fill="var(--illustration-primary)"
        opacity=".85"
      />
      <path
        d="m82 94 29-13 25 2 37-25"
        stroke="var(--illustration-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="184"
        cy="49"
        r="23"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m174 55 13-13m-11 0h11v11"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IllustrationFrame>
  )
}
