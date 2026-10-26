import { IllustrationFrame, type IllustrationProps } from './frame'

export function ShoppingCartIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="92"
        y="49"
        width="41"
        height="54"
        rx="5"
        transform="rotate(-9 92 49)"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M100 51V40a11 11 0 0 1 22 0v9"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <rect
        x="140"
        y="58"
        width="39"
        height="44"
        rx="5"
        transform="rotate(9 140 58)"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M51 64h21l15 60h95l18-45H76"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M93 91h85m-80 13h75m-61-24 4 33m26-33-2 33m26-33-5 33"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="99"
        cy="141"
        r="8"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <circle
        cx="174"
        cy="141"
        r="8"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
    </IllustrationFrame>
  )
}
