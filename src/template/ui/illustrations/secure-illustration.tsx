import { IllustrationFrame, type IllustrationProps } from './frame'

export function SecureIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props} tone={props.tone ?? 'success'}>
      <path
        d="M130 30c15 11 33 16 53 20v39c0 29-21 51-53 65-32-14-53-36-53-65V50c20-4 38-9 53-20Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M130 43c12 8 26 12 40 15v31c0 21-15 39-40 52-25-13-40-31-40-52V58c14-3 28-7 40-15Z"
        fill="var(--illustration-tint)"
      />
      <circle
        cx="130"
        cy="88"
        r="24"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m117 88 9 9 17-19"
        stroke="var(--illustration-primary)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 78v21m-6-15v9m148-15v21m6-15v9"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
