import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CalligraphyBrushIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(22 131 90)">
        <path d="M124 31c0-9 13-9 13 0v73h-13V31Z" fill={c.surface} />
        <path d="M123 101h15v16h-15v-16Z" fill={c.tint} stroke={c.line} />
        <path d="M123 117c-11 16-12 26 7 42 4-15 19-24 8-42h-15Z" fill={c.tint} />
        <path d="M130 122v20m-3-108h7m-7 10h7" stroke={c.line} />
      </g>
      <path
        d="M62 141c0-20 34-20 34 0v14H62v-14Zm5-22h24v10H67v-10"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M175 132c-27 9-15 24 21 17" stroke={c.line} strokeWidth="3" />
    </Scene>
  )
}
