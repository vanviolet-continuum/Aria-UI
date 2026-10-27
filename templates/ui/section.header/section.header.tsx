import type { ElementType } from 'react'
import { renderHeadingGroup } from '../heading.group/heading.group'
import type { HeadingGroupProps } from '../heading.group/heading.group.types'

export type SectionHeaderProps<E extends ElementType = 'div'> = HeadingGroupProps<E>
export function SectionHeader<E extends ElementType = 'div'>(props: SectionHeaderProps<E>) {
  return renderHeadingGroup(props, 'section')
}
