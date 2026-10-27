import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function SettingsIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="52"
        y="104"
        width="83"
        height="45"
        rx="9"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M65 118h57m-57 17h57"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="83" cy="118" r="4" fill="var(--illustration-primary)" />
      <circle cx="109" cy="135" r="4" fill="var(--illustration-primary)" />
      <g stroke="var(--illustration-primary)" strokeWidth="2" fill="var(--illustration-tint)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="135"
            y="30"
            width="18"
            height="20"
            rx="4"
            transform={`rotate(${angle} 144 84)`}
          />
        ))}
        <circle cx="144" cy="84" r="39" fill="var(--illustration-surface)" />
        <circle cx="144" cy="84" r="24" />
        <circle cx="144" cy="84" r="10" fill="var(--illustration-surface)" />
      </g>
      <circle cx="196" cy="132" r="8" fill="var(--illustration-accent)" opacity=".4" />
    </IllustrationFrame>
  )
}
