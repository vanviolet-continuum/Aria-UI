import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ReceiptPrinterIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M81 76h98l17 31v44H64v-44l17-31Z" fill={c.surface} />
      <path d="M65 107h130m-113-23h92m-96 41h104" stroke={c.line} />
      <path d="M94 83V28h72v55l-9-5-9 5-9-5-9 5-9-5-9 5-9-5-9 5Z" fill={c.surface} />
      <path d="M105 41h49m-49 11h32m-32 12h49" stroke={c.line} />
      <rect x="103" y="132" width="55" height="10" rx="3" fill={c.tint} stroke={c.line} />
      <circle cx="181" cy="117" r="3" fill={c.accent} stroke="none" />
      <path d="M83 152v4m95-4v4" stroke={c.line} />
    </Scene>
  )
}
