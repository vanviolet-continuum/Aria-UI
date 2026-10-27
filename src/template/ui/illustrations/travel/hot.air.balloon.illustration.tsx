import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, SceneCloud, sceneColors as c } from '../shared/collection.scene'

export function HotAirBalloonIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M93 111c-4-23-33-39-26-65 7-29 35-36 63-36s56 7 63 36c7 26-22 42-26 65H93Z"
        fill={c.surface}
      />
      <path
        d="M114 110c-1-23-18-39-14-65 4-28 17-35 30-35s26 7 30 35c4 26-13 42-14 65h-32Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M130 11v99m-55-72h109M69 60h122m-107 25h92m-83 26h74m-66 1 8 24m48-24-8 24"
        stroke={c.line}
      />
      <path d="M107 135h45l-5 23h-35l-5-23Z" fill={c.surface} />
      <path d="M110 143h39m-29-7v21m16-21v21" stroke={c.line} />
      <SceneCloud x={38} y={108} scale={0.8} />
      <SceneCloud x={188} y={92} scale={0.65} />
    </CollectionScene>
  )
}
