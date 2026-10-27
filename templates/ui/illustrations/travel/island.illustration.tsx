import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function IslandIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="131" cy="145" rx="84" ry="17" fill={c.surface} stroke={c.line} />
      <path d="M76 140c18-18 33-21 59-18 23-1 39 4 51 18" fill={c.tint} stroke={c.line} />
      <path d="M122 137c0-30 8-61 24-87l9 5c-14 23-21 53-19 82h-14Z" fill={c.surface} />
      <path d="m136 105-10-3m16-19-9-3m19-17-9-4" stroke={c.line} />
      <path
        d="M148 52c-21-31-47-21-54-5 21-5 34 0 54 5Zm0 0c-28-8-45 7-42 26 11-17 25-20 42-26Zm0 0c-1-33 21-40 35-28-16 5-27 14-35 28Zm0 0c26-24 49-10 52 7-20-10-32-12-52-7Zm0 0c29-3 43 18 33 32-5-17-17-26-33-32Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="194" cy="94" r="15" fill={c.tint} stroke={c.line} />
      <path d="M47 156h23m12 8h23m50 0h29m15-8h19" stroke={c.line} />
    </CollectionScene>
  )
}
