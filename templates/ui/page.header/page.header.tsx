import type { ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import { renderHeadingGroup } from '../heading.group/heading.group'
import type { HeadingGroupProps } from '../heading.group/heading.group.types'

export type PageHeaderProps<E extends ElementType = 'header'> = HeadingGroupProps<E> & {
  /** Decorative SVG/illustration displayed in the right-hand slot. */
  artwork?: ReactNode
}
export function PageHeader<E extends ElementType = 'header'>({
  artwork,
  actions,
  className,
  ...props
}: PageHeaderProps<E>) {
  return renderHeadingGroup(
    {
      ...props,
      className: clsx(className, artwork && 'aria-page-header--artwork'),
      actions: artwork ? (
        <>
          {actions}
          <div className="aria-page-header-artwork" aria-hidden="true">
            {artwork}
          </div>
        </>
      ) : (
        actions
      ),
    },
    'page',
  )
}
