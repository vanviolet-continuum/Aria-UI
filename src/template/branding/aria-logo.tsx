import type { SVGProps } from 'react'

export function AriaLogo({ className = 'brand-mark', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width="40"
      height="40"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect width="40" height="40" rx="12" fill="var(--primary)" />
      <path d="M17.5 10h5L31 30h-6l-5-12.5L15 30H9l8.5-20Z" fill="var(--on-primary)" />
      <path d="M18.2 25h3.6l2 5h-7.6l2-5Z" fill="var(--on-primary)" />
    </svg>
  )
}
