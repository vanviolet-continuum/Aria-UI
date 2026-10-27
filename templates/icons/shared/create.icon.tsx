import { createElement, forwardRef } from 'react'
import type { AriaIcon, AriaIconNode, AriaIconProps } from '../types'

/** A portable 24px SVG; named imports carry only their own geometry. */
export function createIcon(name: string, nodes: AriaIconNode): AriaIcon {
  const Component = /* @__PURE__ */ forwardRef<SVGSVGElement, AriaIconProps>(function AriaSvgIcon(
    {
      size = 24,
      color = 'currentColor',
      strokeWidth = 1.8,
      absoluteStrokeWidth = false,
      className = '',
      title,
      children,
      ...props
    },
    ref,
  ) {
    const labelled = Boolean(title || props['aria-label'] || props['aria-labelledby'])
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
        ref={ref}
        className={`aria-icon ${className}`.trim()}
        role={props.role ?? (labelled ? 'img' : undefined)}
        aria-label={props['aria-label'] ?? title}
        aria-hidden={props['aria-hidden'] ?? (labelled ? undefined : true)}
        focusable={props.focusable ?? false}
      >
        {title && <title>{title}</title>}
        {nodes.map(([tag, attributes], index) =>
          createElement(tag, {
            ...attributes,
            key: index,
            ...(absoluteStrokeWidth ? { vectorEffect: 'non-scaling-stroke' } : {}),
          }),
        )}
        {children}
      </svg>
    )
  })
  Component.displayName = name
  return Object.assign(Component, { iconName: name, iconNode: nodes })
}
