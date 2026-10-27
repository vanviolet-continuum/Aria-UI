import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SoapDispenserIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M111 67h39v13c10 3 17 12 17 23v43a9 9 0 0 1-9 9h-55a9 9 0 0 1-9-9v-43c0-11 7-20 17-23V67Z"
        fill={c.surface}
      />
      <path d="M111 58h39v12h-39V58Zm14-17h12v17h-12V41Z" fill={c.tint} stroke={c.line} />
      <path d="M131 41V31h45v11h-13v7" stroke={c.line} />
      <rect x="105" y="103" width="51" height="30" rx="5" fill={c.tint} stroke={c.line} />
      <path d="M129 109c-11 13-12 20 0 20s11-7 0-20Z" fill={c.surface} stroke={c.line} />
      <path d="M104 145h53m-54-57v11" stroke={c.line} />
    </Scene>
  )
}
