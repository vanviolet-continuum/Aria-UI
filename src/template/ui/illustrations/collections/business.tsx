import type { IllustrationProps } from '../frame'
import { ScenePerson } from '../scenes/scene-person'
import { CollectionScene, ScenePlant, sceneColors as c } from './collection-scene'

export function BrainstormingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="83" y="31" width="101" height="83" rx="7" fill={c.surface} stroke={c.line} />
      <path d="M95 114v35m75-35v35m-82 0h14m61 0h14" stroke={c.line} />
      <path d="M123 76c-12-16 8-31 20-20 8 8 3 14-2 20v10h-18V76Z" fill={c.tint} />
      <path d="M123 79h18m-14 13h10m-6-43v-7m-21 16-6-4m48 4 6-4" stroke={c.accent} />
      <path d="M93 44h15v15H93V44Zm62 40h18v17h-18V84Z" fill={c.tint} stroke={c.line} />
      <ScenePerson x={61} y={67} scale={0.73} pose="pointing" />
      <ScenePerson x={202} y={68} scale={0.73} mirror pose="pointing" accent />
    </CollectionScene>
  )
}

export function InterviewIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M47 127v26m165-26v26M46 115h31v18H46v-18Zm137 0h31v18h-31v-18Z"
        fill={c.tint}
        stroke={c.line}
      />
      <ScenePerson x={75} y={51} scale={0.83} pose="seated" />
      <ScenePerson x={185} y={51} scale={0.83} mirror pose="seated" accent />
      <path d="M94 111h73v6H94v-6Zm10 6v37m53-37v37" fill={c.surface} />
      <path d="m116 101 21-3 11 9-21 3-11-9Z" fill={c.tint} stroke={c.line} />
      <path d="M103 29h59v28h-27l-10 10V57h-22V29Z" fill={c.surface} stroke={c.line} />
      <path d="M113 39h38m-38 8h25" stroke={c.line} />
      <path d="M43 156h174" stroke={c.line} />
    </CollectionScene>
  )
}

export function HandshakeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m48 68 30-19 25 42-30 25-25-48Zm164-1-28-17-27 40 30 26 25-49Z" fill={c.tint} />
      <path d="m79 64 25-5 24 6 12 14 32 24-24 27-51-30-8-11" fill={c.surface} />
      <path d="m181 66-29-7-20 3-24 20c-7 8 2 17 11 10l16-11 39 26 11-16" fill={c.surface} />
      <path
        d="m105 106-5 7c-6 7 2 14 8 8l5-6m0 0-5 7c-4 7 4 14 10 8l5-6m0 0-4 6c-4 7 5 13 10 7l4-5m0 0c-2 9 7 12 13 5l17-19m-50-15 32 25m-23-33 33 25"
        stroke={c.line}
      />
      <path d="m75 76 4 7m108-7-4 7M115 38l-3-9m22 8 3-9m18 14 7-6m-49 112h37" stroke={c.accent} />
    </CollectionScene>
  )
}

export function StrategyIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m53 124 100-23 56 32-105 25-51-34Z" fill={c.surface} />
      <path
        d="m72 119 52 34m-30-39 52 34m-30-39 52 34m-30-39 52 34m-124-3 101-24m-84 35 102-24"
        stroke={c.line}
      />
      <path d="M111 117V96l13-18-9-7 4-23 25-14 18 16-4 22-15 13v32h-32Z" fill={c.surface} />
      <path
        d="m120 48 13 6-3 12 18 4m-15-16 10-11m-15 53h15m-42 21h52v10h-52v-10Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="147" cy="54" r="2" fill={c.ink} stroke="none" />
      <path d="M60 92V62h25m-8-7 8 7-8 7m98 17h22V57m-6 8 6-8 6 8" stroke={c.line} />
    </CollectionScene>
  )
}

export function ProjectPlanningIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="47" y="39" width="166" height="110" rx="8" fill={c.surface} />
      <path
        d="M47 65h166m-122 0v84m34-84v84m34-84v84m34-84v84M63 52h23m18 0h10m24 0h10m24 0h10m-82 25h109m-109 23h109m-109 23h109"
        stroke={c.line}
      />
      <path d="M64 81h15m-15 23h15m-15 23h15" strokeWidth="3" stroke={c.line} />
      <rect x="102" y="76" width="50" height="12" rx="4" fill={c.tint} stroke={c.accent} />
      <rect x="135" y="99" width="50" height="12" rx="4" fill={c.tint} />
      <rect x="169" y="122" width="34" height="12" rx="4" fill={c.tint} stroke={c.line} />
      <path d="M74 31v16m111-16v16m-55 18v75" stroke={c.accent} strokeDasharray="4 4" />
      <circle cx="130" cy="65" r="4" fill={c.accent} stroke="none" />
    </CollectionScene>
  )
}

export function TargetIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="125" cy="89" r="58" fill={c.surface} />
      <circle cx="125" cy="89" r="43" fill={c.tint} stroke={c.line} />
      <circle cx="125" cy="89" r="28" fill={c.surface} stroke={c.line} />
      <circle cx="125" cy="89" r="12" fill={c.tint} stroke={c.accent} />
      <path
        d="m90 137-10 21m79-21 10 21M125 89l62-54m-14 12 3-17 21-9-10 14 17-5-8 21-17 2m-51 26-3 10 11-2"
        fill={c.surface}
      />
      <path d="M97 158h57M49 62l7 3m-7 52 7-3m142-8 8 3" stroke={c.line} />
    </CollectionScene>
  )
}

export function GrowthIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="64" y="125" width="29" height="28" rx="3" fill={c.tint} stroke={c.line} />
      <rect x="112" y="106" width="29" height="47" rx="3" fill={c.surface} />
      <rect x="160" y="81" width="29" height="72" rx="3" fill={c.tint} stroke={c.line} />
      <path
        d="M126 105V53m0 27c-27-2-38-20-32-33 21 1 34 15 32 33Zm0-14c1-27 21-43 40-36 0 22-16 35-40 36Z"
        fill={c.surface}
      />
      <path d="m102 55 24 25m0-14 29-26" stroke={c.line} />
      <path d="M47 155h165m-145-47 18-13m91-28 21-15m-11 0h11v11" stroke={c.line} />
      <circle cx="78" cy="77" r="7" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}

export function RemoteWorkIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m40 75 90-51 91 51m-163-9v88h145V66" stroke={c.line} />
      <path d="M145 51c9-8 25-8 34 0m-28 6c6-5 16-5 22 0m-13 8h4" stroke={c.accent} />
      <ScenePerson x={113} y={57} scale={0.8} pose="seated" />
      <path d="M91 124v29m67-29v29M81 119h91v7H81v-7Z" fill={c.surface} />
      <path d="m129 91 35 3-5 25h-35l5-28Z" fill={c.tint} />
      <circle cx="144" cy="105" r="3" stroke={c.line} />
      <ScenePlant x={177} y={98} scale={0.9} />
      <path d="M60 154h148m-137-39v25h21" stroke={c.line} />
    </CollectionScene>
  )
}

export function MeetingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="91" y="29" width="77" height="44" rx="6" fill={c.surface} stroke={c.line} />
      <path d="M104 43h49m-49 10h25m9 0h15m-49 10h34" stroke={c.line} />
      <circle cx="73" cy="88" r="11" fill={c.surface} stroke={c.line} />
      <path d="M56 124v-12c0-20 34-20 34 0v12H56Z" fill={c.tint} />
      <circle cx="130" cy="88" r="11" fill={c.surface} stroke={c.line} />
      <path d="M113 124v-12c0-20 34-20 34 0v12h-34Z" fill={c.surface} />
      <circle cx="187" cy="88" r="11" fill={c.surface} stroke={c.line} />
      <path d="M170 124v-12c0-20 34-20 34 0v12h-34Z" fill={c.tint} />
      <path d="m56 121-11 15h170l-11-15H56Zm7 15v21m134-21v21" fill={c.surface} />
      <path d="m113 127 20-1 8 5h-21l-7-4Zm-42 1h9m95 0h9" stroke={c.line} />
      <path d="M67 86h12m45 0h12m45 0h12" stroke={c.line} />
    </CollectionScene>
  )
}

export function DeskIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="87" y="41" width="99" height="64" rx="5" fill={c.surface} />
      <rect x="94" y="48" width="85" height="47" rx="2" fill={c.tint} stroke={c.line} />
      <path
        d="M126 105v15m21-15v15m-31 0h41M47 125h169v9H47v-9Zm12 9v24m145-24v24"
        fill={c.surface}
      />
      <path d="m106 125 5-8h51l5 8" fill={c.tint} stroke={c.line} />
      <path d="M54 124V86l20-18m-10 6-12-9 19-18 13 13-20 14Z" fill={c.surface} />
      <path d="M46 124h24m123-4v-17h17v17m0-13h5v9h-5" stroke={c.line} />
      <path d="M108 64h44m-44 10h56m-56 10h30" stroke={c.line} />
      <path d="M167 142h29v13h-29v-13Z" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
