import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ThermosFlaskIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M108 53h44l7 18v77a7 7 0 0 1-7 7h-44a7 7 0 0 1-7-7V71l7-18Z" fill={c.surface} />
      <path d="M105 31h50v25h-50V31Z" fill={c.tint} />
      <path d="M105 43h50m-46 37v58m-8-62h58m-58 68h58" stroke={c.line} />
      <path d="M129 103c-11 12-12 20-2 21 13 1 14-7 2-21Z" fill={c.tint} stroke={c.line} />
      <path d="M174 109h27v35c0 12-27 12-27 0v-35Z" fill={c.surface} />
      <path d="M201 116h6c13 0 13 17-6 17" stroke={c.line} />
      <ellipse cx="187.5" cy="109" rx="13.5" ry="4" fill={c.tint} stroke={c.line} />
    </Scene>
  )
}
