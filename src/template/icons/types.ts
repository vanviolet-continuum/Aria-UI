import type { ForwardRefExoticComponent, ReactNode, RefAttributes, SVGProps } from 'react'

export interface AriaIconProps extends Omit<SVGProps<SVGSVGElement>, 'ref' | 'children'> {
  size?: number | string
  strokeWidth?: number
  absoluteStrokeWidth?: boolean
  title?: string
  children?: ReactNode
}

export type AriaIconTag = 'path' | 'rect' | 'circle' | 'ellipse' | 'line' | 'polyline' | 'polygon'
export type AriaIconNode = readonly (readonly [
  AriaIconTag,
  Readonly<Record<string, string | number>>,
])[]

export type AriaIcon = ForwardRefExoticComponent<AriaIconProps & RefAttributes<SVGSVGElement>> & {
  readonly iconName: string
  readonly iconNode: AriaIconNode
}
