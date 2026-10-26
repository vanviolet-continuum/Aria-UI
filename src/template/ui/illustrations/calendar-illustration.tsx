import { IllustrationFrame, type IllustrationProps } from './frame'

export function CalendarIllustration(props: IllustrationProps) {
  return <IllustrationFrame {...props}>
    <rect x="63" y="45" width="128" height="104" rx="12" fill="var(--illustration-surface)" stroke="var(--illustration-line)" strokeWidth="2" />
    <path d="M75 45h104a12 12 0 0 1 12 12v17H63V57a12 12 0 0 1 12-12Z" fill="var(--illustration-tint)" />
    <path d="M63 74h128M91 36v19m72-19v19" stroke="var(--illustration-primary)" strokeWidth="3" strokeLinecap="round" />
    <path d="M83 91h8m17 0h8m17 0h8m17 0h8M83 108h8m17 0h8m17 0h8m-58 17h8m17 0h8" stroke="var(--illustration-line)" strokeWidth="5" strokeLinecap="round" />
    <rect x="128" y="101" width="21" height="15" rx="4" fill="var(--illustration-primary)" opacity=".2" />
    <circle cx="181" cy="131" r="25" fill="var(--illustration-surface)" stroke="var(--illustration-line)" strokeWidth="2" /><circle cx="181" cy="131" r="18" fill="var(--illustration-tint)" /><path d="m171 131 7 7 13-15" stroke="var(--illustration-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </IllustrationFrame>
}
