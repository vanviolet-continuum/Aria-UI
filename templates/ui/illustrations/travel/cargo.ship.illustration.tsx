import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CargoShipIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M47 113h168l-26 37H73l-26-37Z" fill={c.surface} />
      <path d="M51 121h158m-143 12h128m-98 25h32m25 0h45" stroke={c.line} />
      <path
        d="M77 76h44v36H77V76Zm48 0h44v36h-44V76Zm-24-35h44v30h-44V41Zm76 43h25v28h-25V84Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M86 82v24m10-24v24m10-24v24m10-24v24m19-24v24m10-24v24m10-24v24m-44-59v18m11-18v18m11-18v18m47 30h13m-13 8h13"
        stroke={c.line}
      />
    </Scene>
  )
}
