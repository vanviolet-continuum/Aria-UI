import { IllustrationFrame, type IllustrationProps } from './frame'

export function SuccessIllustration(props: IllustrationProps) {
  return <IllustrationFrame {...props} tone={props.tone ?? 'success'}>
    <g transform="rotate(-7 113 92)">
      <rect x="68" y="35" width="91" height="113" rx="11" fill="var(--illustration-surface)" stroke="var(--illustration-line)" strokeWidth="2" />
      <rect x="84" y="53" width="42" height="7" rx="3.5" fill="var(--illustration-primary)" opacity=".25" />
      <path d="M85 77h54M85 91h42M85 105h26" stroke="var(--illustration-line)" strokeWidth="4" strokeLinecap="round" />
      <path d="m84 124 5 5 10-11" stroke="var(--illustration-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <circle cx="165" cy="112" r="34" fill="var(--illustration-surface)" stroke="var(--illustration-line)" strokeWidth="2" />
    <circle cx="165" cy="112" r="26" fill="var(--illustration-tint)" />
    <path d="m151 112 10 10 20-22" stroke="var(--illustration-primary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m166 38 3 9m24 6-7 6M58 53l-7-5m151 34 8-1" stroke="var(--illustration-primary)" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="179" cy="27" r="3" fill="var(--illustration-accent)" />
  </IllustrationFrame>
}
