import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DumplingBasketIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M68 101h124v35c0 27-124 27-124 0v-35Z" fill={c.surface} />
      <ellipse cx="130" cy="101" rx="62" ry="22" fill={c.tint} />
      <path
        d="M69 121c27 17 95 17 122 0m-112-11v27m15-21v27m17-23v26m18-24v26m18-27v26m18-31v27m16-34v27"
        stroke={c.line}
      />
      <path
        d="M86 103c2-35 37-35 39 0H86Zm40 3c2-35 37-35 39 0h-39Zm-21-20c2-28 30-28 32 0h-32Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path
        d="m96 82 3 13m10-17-1 16m29-9 3 13m11-17-2 16M109 53c-7-7 5-10 0-18m22 18c-7-7 5-10 0-18m22 18c-7-7 5-10 0-18"
        stroke={c.line}
      />
    </Scene>
  )
}
