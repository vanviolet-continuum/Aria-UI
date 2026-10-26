import type { IllustrationProps } from '../frame'
import { CollectionScene, SceneCloud, sceneColors as c } from './collection-scene'

export function AirplaneIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m48 100 47-1 40-63 18 1-21 62h52l15-23 12 1-5 28c-15 18-48 21-97 20l-29 22-15-3 16-22-26-6-7-16Z"
        fill={c.surface}
      />
      <path d="m102 120 38 21h17l-22-24m-49-10h88" stroke={c.line} />
      <path
        d="M106 106h3m10 0h3m10 0h3m10 0h3m10 0h3m-99-2 10-1"
        stroke={c.accent}
        strokeWidth="4"
      />
      <SceneCloud x={51} y={39} scale={0.8} />
      <SceneCloud x={166} y={132} scale={0.7} />
      <path d="M39 127h21m-12 9h20m-32 9h15" stroke={c.line} />
    </CollectionScene>
  )
}

export function TrainIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M92 32h77a15 15 0 0 1 15 15v88H77V47a15 15 0 0 1 15-15Z" fill={c.surface} />
      <path d="M79 90h103v40H79V90Z" fill={c.tint} stroke="none" />
      <rect x="90" y="53" width="81" height="38" rx="6" fill={c.tint} stroke={c.line} />
      <path d="M130 54v36m-22-47h45m-76 92h107m-87 0-14 22m81-22 14 22m-89-10h84m-90 10h99" />
      <circle cx="101" cy="114" r="7" fill={c.surface} />
      <circle cx="159" cy="114" r="7" fill={c.surface} />
      <path d="M120 110h21m-21 7h21" stroke={c.line} />
      <path d="M53 133V64h12m-12 17h12m-6-17v20M42 151h22m130 0h25" stroke={c.line} />
      <SceneCloud x={188} y={40} scale={0.55} />
    </CollectionScene>
  )
}

export function BicycleIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="72" cy="123" r="30" fill={c.surface} />
      <circle cx="187" cy="123" r="30" fill={c.surface} />
      <path d="m72 123 38-1-17-39-21 40 70-39-32 38m32-38 45 39-24-61h-16" />
      <path d="M82 80h22m54-18h18v12m-68 49 8 8h9" strokeWidth="3" />
      <circle cx="110" cy="123" r="7" fill={c.tint} />
      <circle cx="72" cy="123" r="4" fill={c.tint} />
      <circle cx="187" cy="123" r="4" fill={c.tint} />
      <path d="m175 80 30-2-4 19h-19l-7-17Z" fill={c.tint} stroke={c.line} />
      <path d="M184 82v12m11-12v12m-74-43 5-4 5 4" stroke={c.line} />
      <path d="M38 155h184m-174-40-7-7m13 3-3-9" stroke={c.line} />
      <SceneCloud x={63} y={35} scale={0.75} />
    </CollectionScene>
  )
}

export function SailboatIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M64 124h133l-24 27H88l-24-27Z" fill={c.tint} />
      <path d="M130 124V28m-5 9-50 76h50V37Z" fill={c.surface} />
      <path d="m139 48 44 65h-44V48Z" fill={c.tint} stroke={c.line} />
      <path d="M111 61v50m-23 20h73" stroke={c.line} />
      <path
        d="M48 153c9-5 17-5 26 0s18 5 27 0 18-5 27 0 18 5 27 0 18-5 27 0 18 5 27 0"
        stroke={c.line}
      />
      <path d="m130 29 20 5-20 7" fill={c.tint} />
      <SceneCloud x={47} y={41} scale={0.7} />
      <circle cx="192" cy="49" r="14" fill={c.tint} stroke={c.line} />
      <path d="m178 92 6-4 6 4" stroke={c.line} />
    </CollectionScene>
  )
}

export function RoadTripIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M42 153c31-30 72-26 87-47s-4-29 14-44" stroke={c.line} strokeWidth="18" />
      <path d="M42 153c31-30 72-26 87-47s-4-29 14-44" stroke={c.surface} strokeDasharray="5 8" />
      <path
        d="M76 96V68a9 9 0 0 1 9-9h88a16 16 0 0 1 14 8l20 28v29H61v-17a11 11 0 0 1 15-11Z"
        fill={c.surface}
      />
      <path d="M87 70h33v25H87V70Zm44 0h38l18 25h-56V70Z" fill={c.tint} stroke={c.line} />
      <circle cx="89" cy="124" r="14" fill={c.tint} />
      <circle cx="177" cy="124" r="14" fill={c.tint} />
      <circle cx="89" cy="124" r="5" fill={c.surface} stroke={c.line} />
      <circle cx="177" cy="124" r="5" fill={c.surface} stroke={c.line} />
      <path d="M133 104h10m52 1h10m-140 0h9" stroke={c.line} />
      <rect x="107" y="43" width="47" height="16" rx="3" fill={c.tint} />
      <path d="M119 43v15m23-15v15M48 88V54h18m-18 0 10-12" stroke={c.line} />
    </CollectionScene>
  )
}

export function PassportIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect
        x="74"
        y="30"
        width="93"
        height="124"
        rx="8"
        fill={c.tint}
        transform="rotate(-8 120 92)"
        stroke={c.line}
      />
      <rect x="85" y="27" width="93" height="125" rx="7" fill={c.surface} />
      <path d="M95 28v123m20-103h35m-39 86h43" stroke={c.line} />
      <circle cx="132" cy="90" r="24" fill={c.tint} />
      <ellipse cx="132" cy="90" rx="10" ry="24" stroke={c.line} />
      <path d="M108 90h48m-45-11h42m-42 22h42" stroke={c.line} />
      <path d="m162 101 37 13-13 36-37-13 13-36Z" fill={c.surface} />
      <circle cx="175" cy="125" r="10" stroke={c.accent} />
      <path d="m165 135 15 5m-14-25 14 5" stroke={c.line} />
      <path d="m52 85 8-3 10-14 5 2-5 14 9 4-1 4-25-2-1-5Z" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}

export function LuggageIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M106 52V31a5 5 0 0 1 5-5h38a5 5 0 0 1 5 5v21m-38 0V35h28v17"
        fill={c.surface}
        stroke={c.line}
      />
      <rect x="81" y="51" width="99" height="102" rx="12" fill={c.surface} />
      <path d="M100 56v92m61-92v92m-40-80v62m19-62v62" stroke={c.line} />
      <rect
        x="101"
        y="88"
        width="37"
        height="26"
        rx="3"
        fill={c.tint}
        transform="rotate(-12 119 101)"
        stroke={c.accent}
      />
      <path d="m106 106 8-12 6 7 7-10 8 10" stroke={c.line} />
      <path d="M173 71h20v29h-20V71Z" fill={c.tint} />
      <path d="M173 72c-17-20-4-26 5-17 7 6 6 12 4 17" stroke={c.line} />
      <circle cx="183" cy="80" r="2" stroke={c.line} />
      <path d="M93 154v5m74-5v5" strokeWidth="6" />
      <path d="M60 148h10m119-16h15" stroke={c.line} />
    </CollectionScene>
  )
}

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

export function CityscapeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M42 151V79h42v72m6 0V47h43v104m6 0V66h37v85m6 0V96h34v55" fill={c.surface} />
      <path d="M98 47V34h27v13m-14-13V23" stroke={c.line} />
      <path
        d="M51 91h8m9 0h8m-25 14h8m9 0h8m-25 14h8m9 0h8m28-58h8m9 0h5m-21 15h8m9 0h5m-21 15h8m9 0h5m-21 15h8m9 0h5m27-27h7m7 0h6m-20 15h7m7 0h6m-20 15h7m7 0h6m25 0h13m-13 13h13"
        stroke={c.line}
        strokeWidth="3"
      />
      <path d="M55 151v-19h16v19m36 0v-28h13v28m40 0v-23h-13v23M35 153h189" />
      <SceneCloud x={174} y={32} scale={0.7} />
      <path d="M194 150v-12m-5-3a5 5 0 1 1 10 0v3h-10v-3Z" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
