import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CelloIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M124 23h12v28h-12V23Zm2 28h8v27h-8V51Z" fill={c.surface} />
      <path
        d="M121 70c-27-4-39 13-22 28-23 22-16 49 31 49s54-27 31-49c17-15 5-32-22-28"
        fill={c.surface}
      />
      <path
        d="M127 34v99m6-99v99m-19-25h32m-24 26h16m-28-48c-11 8 6 15-5 23m45-23c11 8-6 15 5 23m-25 38v13"
        stroke={c.line}
      />
      <path d="m181 35-8 122m-6-122-8 122" stroke={c.line} />
      <path d="M116 149h29" stroke={c.line} />
    </Scene>
  )
}
