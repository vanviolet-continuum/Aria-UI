import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function CameraIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="M104 60V48a6 6 0 0 1 6-6h35a6 6 0 0 1 6 6v12"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <rect
        x="60"
        y="53"
        width="23"
        height="11"
        rx="3"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <rect
        x="45"
        y="60"
        width="169"
        height="89"
        rx="13"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path d="M45 82h169v46H45V82Z" fill="var(--illustration-tint)" />
      <path d="M45 82h169M45 128h169" stroke="var(--illustration-line)" strokeWidth="2" />
      <circle
        cx="129"
        cy="105"
        r="38"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <circle
        cx="129"
        cy="105"
        r="28"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <circle cx="129" cy="105" r="17" fill="var(--illustration-accent)" opacity=".3" />
      <path
        d="M119 94a15 15 0 0 1 16-3"
        stroke="var(--illustration-surface)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect
        x="180"
        y="69"
        width="20"
        height="8"
        rx="3"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="1.5"
      />
      <circle cx="65" cy="73" r="3" fill="var(--illustration-accent)" />
      <path
        d="M54 94v22m5-22v22"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M177 38V28h13m22 16h10v13"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IllustrationFrame>
  )
}
