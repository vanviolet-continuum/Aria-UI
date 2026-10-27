import clsx from 'clsx'
import {
  Fragment,
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { ChevronRight } from '../../icons/navigation/chevron.right.icon'
import { useI18n } from '../../i18n/use.i18n'
import { Text } from '../text/text'

export interface BreadcrumbEntry {
  id?: string
  label: ReactNode
  href?: string
  icon?: ReactNode
  current?: boolean
}
export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items?: readonly BreadcrumbEntry[]
  separator?: ReactNode
  renderLink?: (item: BreadcrumbEntry) => ReactNode
}
export function Breadcrumb({
  items,
  separator,
  renderLink,
  children,
  className,
  ...props
}: BreadcrumbProps) {
  const { t } = useI18n()
  return (
    <nav aria-label={t('Breadcrumb')} {...props} className={clsx('ui-breadcrumb', className)}>
      <ol>
        {items
          ? items.map((item, index) => {
              const current = item.current ?? index === items.length - 1
              return (
                <Fragment key={item.id ?? item.href ?? index}>
                  {index > 0 && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
                  <BreadcrumbItem>
                    {current ? (
                      <BreadcrumbCurrent>
                        {item.icon}
                        {item.label}
                      </BreadcrumbCurrent>
                    ) : renderLink ? (
                      renderLink(item)
                    ) : item.href ? (
                      <BreadcrumbLink href={item.href}>
                        {item.icon}
                        {item.label}
                      </BreadcrumbLink>
                    ) : (
                      <Text as="span" variant="label">
                        {item.icon}
                        {item.label}
                      </Text>
                    )}
                  </BreadcrumbItem>
                </Fragment>
              )
            })
          : children}
      </ol>
    </nav>
  )
}
export function BreadcrumbItem({ className, ...props }: HTMLAttributes<HTMLLIElement>) {
  return <li {...props} className={clsx('ui-breadcrumb-item', className)} />
}
export const BreadcrumbLink = /* @__PURE__ */ forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(function BreadcrumbLink({ className, ...props }, ref) {
  return <a {...props} ref={ref} className={clsx('ui-breadcrumb-link', className)} />
})
export function BreadcrumbCurrent({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <Text
      as="span"
      variant="label"
      {...props}
      aria-current="page"
      className={clsx('ui-breadcrumb-current', className)}
    />
  )
}
export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      {...props}
      role="presentation"
      aria-hidden="true"
      className={clsx('ui-breadcrumb-separator', className)}
    >
      {children ?? <ChevronRight size={14} />}
    </li>
  )
}
