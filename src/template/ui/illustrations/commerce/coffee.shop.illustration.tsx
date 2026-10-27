import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CoffeeShopIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M66 58h128v96H66V58Z" fill={c.surface} />
      <path d="m62 58 12-25h112l12 25H62Z" fill={c.tint} />
      <path d="M61 72h138v15H61V72Z" fill={c.surface} />
      <path d="M77 72v15m20-15v15m22-15v15m22-15v15m22-15v15m20-15v15" stroke={c.line} />
      <path d="M78 97h63v42H78V97Zm77 0h28v57h-28V97Z" fill={c.tint} stroke={c.line} />
      <path
        d="M95 111h24v11c0 12-24 12-24 0v-11Zm24 3h6c10 0 8 11-6 11m-20 9h23m48-17v10m-51-85h17v10h-17V42Zm17 2h4c7 0 7 7-4 7"
        stroke={c.line}
      />
      <path d="M56 156h147" stroke={c.line} />
    </Scene>
  )
}
