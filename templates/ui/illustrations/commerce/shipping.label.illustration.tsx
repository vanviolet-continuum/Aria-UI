import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ShippingLabelIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M78 27h105v130H78V27Z" fill={c.surface} />
      <path d="M90 42h56m-56 11h38m-38 16h80m-80 12h62" stroke={c.line} />
      <path
        d="M91 94h21v21H91V94Zm5 5h11v11H96V99Zm31-5h21v21h-21V94Zm5 5h11v11h-11V99Zm25-4h13v20h-13V95Z"
        fill={c.tint}
        stroke={c.line}
      />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <path
          key={i}
          d={`M${91 + i * 7} 128v16`}
          stroke={c.line}
          strokeWidth={i % 3 === 0 ? 3 : 1.8}
        />
      ))}
      <path d="M60 109h-8m149-57h10" stroke={c.line} />
    </Scene>
  )
}
