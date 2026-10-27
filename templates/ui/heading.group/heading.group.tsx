import type { ElementType } from 'react'
import clsx from 'clsx'
import { Eyebrow } from '../eyebrow/eyebrow'
import { Box } from '../box/box'
import { hasContent } from '../block.shared/block.utils'
import { renderBox, responsiveStyle, spaceValue } from '../layout.shared/layout.utils'
import {
  HeadingGroupContent,
  HeadingGroupTitleRow,
  HeadingGroupTitle,
  HeadingGroupDescription,
  HeadingGroupActions,
  HeadingGroupMeta,
  HeadingGroupNavigation,
} from './heading.group.parts'
import type { HeadingGroupOptions, HeadingGroupProps } from './heading.group.types'

export function renderHeadingGroup(
  {
    eyebrow,
    title,
    description,
    leading,
    trailing,
    actions,
    meta,
    navigation,
    titleAs,
    size,
    align,
    gap,
    layout = 'split',
    slotProps = {},
    children,
    ...props
  }: HeadingGroupOptions & { as?: ElementType },
  kind: 'group' | 'page' | 'section' = 'group',
) {
  const content =
    children !== undefined ? (
      children
    ) : (
      <>
        {hasContent(navigation) && (
          <HeadingGroupNavigation {...slotProps.navigation}>{navigation}</HeadingGroupNavigation>
        )}
        {[eyebrow, title, description, leading, trailing, meta].some(hasContent) && (
          <HeadingGroupContent {...slotProps.content}>
            {hasContent(eyebrow) && <Eyebrow {...slotProps.eyebrow}>{eyebrow}</Eyebrow>}
            {(hasContent(title) || hasContent(leading) || hasContent(trailing)) && (
              <HeadingGroupTitleRow {...slotProps.titleRow}>
                {hasContent(leading) && (
                  <Box
                    {...slotProps.leading}
                    className={clsx('aria-heading-group-leading', slotProps.leading?.className)}
                  >
                    {leading}
                  </Box>
                )}
                {hasContent(title) && (
                  <HeadingGroupTitle
                    as={titleAs ?? (kind === 'section' ? 'h3' : 'h2')}
                    {...slotProps.title}
                  >
                    {title}
                  </HeadingGroupTitle>
                )}
                {trailing}
              </HeadingGroupTitleRow>
            )}
            {hasContent(description) && (
              <HeadingGroupDescription {...slotProps.description}>
                {description}
              </HeadingGroupDescription>
            )}
            {hasContent(meta) && <HeadingGroupMeta {...slotProps.meta}>{meta}</HeadingGroupMeta>}
          </HeadingGroupContent>
        )}
        {hasContent(actions) && (
          <HeadingGroupActions {...slotProps.actions}>{actions}</HeadingGroupActions>
        )}
      </>
    )
  return renderBox(
    { ...props, as: props.as ?? (kind === 'page' ? 'header' : 'div') },
    clsx(
      'aria-heading-group',
      kind === 'page' && 'aria-page-header',
      kind === 'section' && 'aria-section-header',
    ),
    {
      ...responsiveStyle('text-align', align),
      ...responsiveStyle('gap', gap, spaceValue),
    },
    {
      'data-heading-size': size ?? (kind === 'page' ? 'lg' : kind === 'section' ? 'sm' : 'md'),
      'data-heading-layout': layout,
      children: content,
    },
  )
}

export function HeadingGroup<E extends ElementType = 'div'>(props: HeadingGroupProps<E>) {
  return renderHeadingGroup(props)
}
