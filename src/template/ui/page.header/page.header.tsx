import type { ElementType } from 'react'
import { renderHeadingGroup } from '../heading.group/heading.group'
import type { HeadingGroupProps } from '../heading.group/heading.group.types'

export type PageHeaderProps<E extends ElementType = 'header'> = HeadingGroupProps<E>
export function PageHeader<E extends ElementType = 'header'>(props: PageHeaderProps<E>) {
  return renderHeadingGroup(props, 'page')
}
