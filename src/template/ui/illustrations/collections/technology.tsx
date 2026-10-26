import type { IllustrationProps } from '../frame'
import { CollectionScene, SceneCloud, sceneColors as c } from './collection-scene'

export function RobotIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M130 41V27" />
      <circle cx="130" cy="22" r="5" fill={c.tint} />
      <rect x="88" y="42" width="84" height="52" rx="14" fill={c.surface} />
      <rect x="98" y="54" width="64" height="22" rx="11" fill={c.tint} stroke={c.line} />
      <circle cx="114" cy="65" r="4" fill={c.ink} stroke="none" />
      <circle cx="146" cy="65" r="4" fill={c.ink} stroke="none" />
      <path d="M122 84h16" stroke={c.line} />
      <path d="M120 95v8m20-8v8" stroke={c.line} />
      <rect x="99" y="103" width="62" height="38" rx="8" fill={c.tint} />
      <path d="m99 111-20 10-11-17m93 7 20 10 11-17M111 142v13h-12m50-13v13h12" strokeWidth="3" />
      <circle cx="65" cy="99" r="6" fill={c.surface} />
      <circle cx="195" cy="99" r="6" fill={c.surface} />
      <circle cx="130" cy="121" r="9" fill={c.surface} stroke={c.line} />
      <path d="m126 121 3 3 6-6M62 52v8m-4-4h8m124 8v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}

export function RocketIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M102 119c-14-40-6-72 28-99 34 27 42 59 28 99h-56Z" fill={c.surface} />
      <path d="M107 49c14-4 32-4 46 0m-45 58h44" stroke={c.line} />
      <circle cx="130" cy="77" r="16" fill={c.tint} />
      <circle cx="130" cy="77" r="9" stroke={c.line} />
      <path d="m101 88-22 24-2 28 25-21m56-31 22 24 2 28-25-21" fill={c.tint} />
      <path
        d="M116 120c-15 13 2 21 1 37l13-12 13 12c-1-16 16-24 1-37"
        fill={c.tint}
        stroke={c.accent}
      />
      <path d="M130 124v12" stroke={c.accent} strokeWidth="3" />
      <SceneCloud x={45} y={125} scale={0.7} />
      <SceneCloud x={181} y={135} scale={0.6} />
      <path d="M71 43v10m-5-5h10m109 29v8m-4-4h8M57 84l4-6m135-48 4 5" stroke={c.line} />
    </CollectionScene>
  )
}

export function SmartphoneIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="87" y="21" width="85" height="138" rx="14" fill={c.surface} />
      <rect x="94" y="30" width="71" height="119" rx="8" fill={c.tint} stroke={c.line} />
      <path d="M114 30v6h31v-6m-24 116h18" stroke={c.line} />
      <circle cx="130" cy="73" r="17" fill={c.surface} />
      <path d="m123 73 5 5 10-11" stroke={c.accent} strokeWidth="3" />
      <path d="M110 104h40m-33 10h26" stroke={c.line} strokeWidth="3" />
      <rect x="114" y="124" width="33" height="10" rx="5" fill={c.surface} stroke={c.line} />
      <path
        d="M55 61c-9-9-9-23 0-32m8 25c-5-5-5-13 0-18m134 59c9 9 9 23 0 32m-8-25c5 5 5 13 0 18"
        stroke={c.line}
      />
      <circle cx="55" cy="116" r="10" fill={c.surface} />
      <path d="M55 112v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}

export function SmartwatchIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m103 54 7-31h39l7 31m-53 73 7 31h39l7-31" fill={c.tint} />
      <path d="M112 37h35m-33 106h32" stroke={c.line} />
      <rect x="89" y="52" width="81" height="77" rx="19" fill={c.surface} />
      <rect x="98" y="61" width="63" height="59" rx="12" fill={c.tint} stroke={c.line} />
      <path d="M171 74h6v14h-6m0 11h4v9h-4" fill={c.surface} />
      <path d="M108 91h9l7-11 9 22 8-15 6 4h5" strokeWidth="2.5" />
      <path d="M117 109h25" stroke={c.line} />
      <circle cx="129" cy="71" r="2" fill={c.accent} stroke="none" />
      <path
        d="M55 64c-8 13-8 30 0 43m7-36c-5 9-5 19 0 28m137-23c5 9 5 19 0 28m7-36c8 13 8 30 0 43"
        stroke={c.line}
      />
    </CollectionScene>
  )
}

export function HeadphonesIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M70 105V76a60 60 0 0 1 120 0v29h-12V76a48 48 0 0 0-96 0v29H70Z" fill={c.tint} />
      <path d="M85 44c26-23 58-23 86 0" stroke={c.line} strokeWidth="5" />
      <rect x="62" y="87" width="26" height="57" rx="10" fill={c.surface} />
      <rect x="172" y="87" width="26" height="57" rx="10" fill={c.surface} />
      <path d="M76 95v39m108-39v39" stroke={c.line} strokeWidth="4" />
      <path d="M184 145c0 16-14 17-41 17" stroke={c.line} />
      <rect x="128" y="157" width="17" height="7" rx="3" fill={c.tint} />
      <path d="M118 107V79l26-5v28m-26-17 26-5" />
      <ellipse cx="111" cy="110" rx="7" ry="5" fill={c.tint} />
      <ellipse cx="137" cy="105" rx="7" ry="5" fill={c.tint} />
      <path d="M43 78v10m-5-5h10m163-23v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}

export function GamingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="77" y="29" width="111" height="69" rx="6" fill={c.surface} />
      <rect x="85" y="37" width="95" height="52" rx="2" fill={c.tint} stroke={c.line} />
      <path d="m102 72 16-14 13 8 19-18 14 24m-42 26v13m24-13v13m-33 0h42" stroke={c.line} />
      <path
        d="M82 103h84c15 0 31 36 24 45-8 12-22-8-31-14h-70c-9 6-24 26-32 14-7-9 10-45 25-45Z"
        fill={c.surface}
      />
      <path d="M84 112v17m-8-8h16" strokeWidth="4" />
      <circle cx="160" cy="117" r="3" fill={c.accent} stroke="none" />
      <circle cx="170" cy="127" r="3" fill={c.accent} stroke="none" />
      <circle cx="116" cy="128" r="7" fill={c.tint} stroke={c.line} />
      <circle cx="140" cy="128" r="7" fill={c.tint} stroke={c.line} />
      <path d="M47 64v10m-5-5h10m155 27h12" stroke={c.line} />
    </CollectionScene>
  )
}

export function VirtualRealityIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M81 86V65c0-46 97-46 97 0v21m-84-1V65c0-28 71-28 71 0v20"
        fill={c.tint}
        stroke={c.line}
      />
      <rect x="59" y="72" width="143" height="62" rx="20" fill={c.surface} />
      <path
        d="M80 84h99a11 11 0 0 1 11 11v16a11 11 0 0 1-11 11h-30l-9-11h-18l-9 11H81a11 11 0 0 1-11-11V95a11 11 0 0 1 10-11Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m88 101 12-7 12 7-12 7-12-7Zm65 0 12-7 12 7-12 7-12-7Z" stroke={c.accent} />
      <path d="M59 94h-7v18h7m143-18h7v18h-7" fill={c.tint} />
      <path
        d="m61 35 13 6v15l-13-6V35Zm131-4 13-7 13 7v15l-13 7-13-7V31Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="m192 31 13 7 13-7m-13 7v15M98 150h64" stroke={c.line} />
    </CollectionScene>
  )
}

export function ArtificialIntelligenceIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="87" y="49" width="86" height="86" rx="12" fill={c.surface} />
      <rect x="99" y="61" width="62" height="62" rx="7" fill={c.tint} stroke={c.line} />
      <path
        d="M102 49V36m19 13V36m19 13V36m19 13V36m-57 99v13m19-13v13m19-13v13m19-13v13M87 65H74m13 18H74m13 18H74m13 18H74m99-54h13m-13 18h13m-13 18h13m-13 18h13"
        stroke={c.line}
      />
      <path
        d="M129 77c-9-11-24-1-18 10-8 10-1 23 11 20l7 7V77Zm2 0c9-11 24-1 18 10 8 10 1 23-11 20l-7 7V77Z"
        fill={c.surface}
      />
      <path d="m114 86 8 3m-9 7 9-1m25-9-8 3m9 7-9-1" stroke={c.line} />
      <path d="M49 74V50h14m-14 77v20h16m146-40v23h-14m-4-77h18v20" stroke={c.line} />
      <circle cx="63" cy="50" r="4" fill={c.accent} stroke="none" />
      <circle cx="197" cy="130" r="4" fill={c.accent} stroke="none" />
    </CollectionScene>
  )
}

export function SatelliteIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m99 77 27-27 36 36-27 27-36-36Z" fill={c.surface} />
      <path d="m106 70 36 36m-23-36 14-14m-3 25 14-14m-3 25 14-14" stroke={c.line} />
      <path d="m53 94 32-32 29 29-32 32-29-29Zm93 24 32-32 29 29-32 32-29-29Z" fill={c.tint} />
      <path
        d="m64 84 29 28m-18-39 29 28m-42 2 32-32m63 37 29 28m-18-39 29 28m-42 2 32-32"
        stroke={c.line}
      />
      <path d="m140 62 13-13m-11-12 22 23c7-7 6-16 0-22s-15-7-22-1Z" fill={c.surface} />
      <path d="m162 40 10-10m-1-9c13 1 20 8 21 21m-21-12c8 1 11 4 12 12" stroke={c.line} />
      <path d="M47 153c27-27 72-27 99 0" fill={c.tint} stroke={c.line} />
      <path d="M63 153c19-15 43-15 64 0" stroke={c.line} />
    </CollectionScene>
  )
}

export function DroneIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m110 84-28-27m68 27 28-27m-68 45-31 24m72-24 30 24"
        strokeWidth="8"
        stroke={c.line}
      />
      <path d="m110 84-28-27m68 27 28-27m-68 45-31 24m72-24 30 24" />
      <ellipse cx="76" cy="51" rx="29" ry="9" fill={c.surface} />
      <ellipse cx="185" cy="51" rx="29" ry="9" fill={c.surface} />
      <ellipse cx="72" cy="132" rx="29" ry="9" fill={c.surface} />
      <ellipse cx="190" cy="132" rx="29" ry="9" fill={c.surface} />
      <rect x="105" y="75" width="50" height="37" rx="11" fill={c.surface} />
      <path d="M119 112v12h23v-12" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="120" r="6" fill={c.surface} />
      <path d="M119 85h23m-23 8h15M76 51v11m109-11v11M72 132v-8m118 8v-8" stroke={c.line} />
      <path d="M118 148h26m-18 8h10" stroke={c.line} />
    </CollectionScene>
  )
}
