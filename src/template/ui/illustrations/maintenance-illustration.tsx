import { IllustrationFrame, type IllustrationProps } from './frame'

export function MaintenanceIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props} tone={props.tone ?? 'warning'}>
      <path
        d="m103 78-19-20 2-19 15 14 12-12-14-15 20-1 19 19-5 21 40 40-16 16-40-40-14-3Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m165 38 15 15-49 50-15-15 49-50Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m180 31 8 8-8 14-15-15 15-7Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <rect
        x="63"
        y="109"
        width="135"
        height="40"
        rx="9"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path d="M63 124h135m-85-15v-9h35v9" stroke="var(--illustration-line)" strokeWidth="2" />
      <rect
        x="121"
        y="120"
        width="19"
        height="12"
        rx="3"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
    </IllustrationFrame>
  )
}
