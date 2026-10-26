import type { ReactNode } from 'react'
import { IllustrationFrame, type IllustrationProps } from '../frame'

export const sceneColors = {
  ink: 'var(--illustration-primary)',
  accent: 'var(--illustration-accent)',
  line: 'var(--illustration-line)',
  tint: 'var(--illustration-tint)',
  wash: 'var(--illustration-wash)',
  surface: 'var(--illustration-surface)',
}

export function CollectionScene({
  children,
  ...props
}: IllustrationProps & { children: ReactNode }) {
  return (
    <IllustrationFrame {...props}>
      <g stroke={sceneColors.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </IllustrationFrame>
  )
}

export function SceneCloud({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${scale})`}
      d="M0 17a9 9 0 0 1 9-9 14 14 0 0 1 27-1 10 10 0 0 1 4 20H9a10 10 0 0 1-9-10Z"
      fill={sceneColors.surface}
      stroke={sceneColors.line}
      strokeWidth="1.5"
    />
  )
}

export function ScenePlant({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M18 34V12m0 16C3 27-2 17 1 8c13 1 18 9 17 20Zm0-8C17 7 27 0 37 1c-1 12-8 19-19 19Z"
        fill={sceneColors.tint}
        stroke={sceneColors.line}
      />
      <path d="m4 34 4 27h20l4-27H4Z" fill={sceneColors.surface} />
      <path d="M5 39h26m-20 6 2 10m12-10-2 10" stroke={sceneColors.line} />
    </g>
  )
}
