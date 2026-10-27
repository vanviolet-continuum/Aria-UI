import { Eyebrow } from '../../ui/eyebrow/eyebrow'

import { Text } from '../../ui/text/text'

import { TextLink } from '../../ui/text.link/text.link'
import { useI18n } from '../../i18n/use.i18n'
import { Building2, ChevronDown, ChevronLeft, X } from 'lucide-react'
import type { MouseEvent } from 'react'
import { useSidebarFocus } from './use.sidebar.focus'
import type { SidebarProps } from './types'

export function Sidebar({
  brand,
  workspace,
  navigation,
  footer,
  collapsed,
  mobileOpen,
  onClose,
  onCollapse,
  onNavigate,
}: SidebarProps) {
  const { t: tr, text: localize } = useI18n()

  const { isMobile, closeButton } = useSidebarFocus(mobileOpen, onClose)
  const follow = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault()
      onNavigate(href)
    }
    onClose()
  }
  return (
    <>
      {mobileOpen && (
        <Text
          as="button"
          variant="button"
          tone="inherit"
          className="sidebar-backdrop"
          aria-label={tr('Close navigation')}
          onClick={onClose}
        />
      )}
      <aside
        inert={isMobile && !mobileOpen ? true : undefined}
        aria-hidden={isMobile && !mobileOpen ? true : undefined}
        className={`sidebar${mobileOpen ? ' sidebar--open' : ''}${collapsed ? ' sidebar--collapsed' : ''}`}
      >
        <TextLink
          as="a"
          variant="navigation"
          tone="inherit"
          className="brand"
          href={brand.href}
          onClick={(event) => follow(event, brand.href)}
          aria-label={tr('{{value0}} home', { value0: localize(brand.name) })}
        >
          {brand.mark}
          <Text as="span" variant="card">
            {brand.name}
            <Text as="span" variant="card" className="brand-period">
              .
            </Text>
          </Text>
        </TextLink>
        <Text
          as="button"
          variant="button"
          tone="inherit"
          className="sidebar-collapse icon-button"
          onClick={onCollapse}
          aria-label={localize(collapsed ? 'Expand sidebar' : 'Collapse sidebar')}
        >
          <ChevronLeft size={15} />
        </Text>
        <Text
          as="button"
          variant="button"
          tone="inherit"
          className="sidebar-mobile-close icon-button"
          ref={closeButton}
          onClick={onClose}
          aria-label={tr('Close navigation')}
        >
          <X size={19} />
        </Text>
        {workspace && (
          <Text
            as="button"
            variant="button"
            tone="inherit"
            className="sidebar-workspace"
            onClick={workspace.onClick}
            type="button"
            disabled={!workspace.onClick}
          >
            <Text as="span" variant="navigation" tone="inherit" className="sidebar-workspace-icon">
              {workspace.icon ?? <Building2 size={18} />}
            </Text>
            <Text
              as="span"
              variant="navigation"
              tone="inherit"
              className="sidebar-workspace-details"
            >
              <Text as="strong" variant="navigation" tone="inherit">
                {workspace.name}
              </Text>
              {workspace.description && (
                <Text as="small" variant="caption">
                  {localize(workspace.description)}
                </Text>
              )}
            </Text>
            {workspace.onClick && <ChevronDown size={14} />}
          </Text>
        )}
        <nav className="sidebar-navigation" aria-label={tr('Main navigation')}>
          {navigation.map((group, index) => (
            <div
              className={`nav-group${index === navigation.length - 1 && index > 0 ? ' nav-group--last' : ''}`}
              key={group.label ?? index}
            >
              {group.label && (
                <Eyebrow as="div" variant="eyebrow" className="nav-group-label">
                  {localize(group.label)}
                </Eyebrow>
              )}
              {group.items.map((item) => (
                <TextLink
                  as="a"
                  variant="navigation"
                  tone="inherit"
                  key={item.href}
                  href={item.href}
                  className={`nav-link${item.active ? ' nav-link--active' : ''}`}
                  title={localize(item.label)}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={(event) => follow(event, item.href)}
                >
                  {item.icon}
                  <Text as="span" variant="navigation" tone="inherit">
                    {localize(item.label)}
                  </Text>
                  {item.badge != null && (
                    <Text as="span" variant="navigation" tone="inherit" className="nav-count">
                      {item.badge}
                    </Text>
                  )}
                </TextLink>
              ))}
            </div>
          ))}
        </nav>
        {footer && <div className="sidebar-bottom">{footer}</div>}
      </aside>
    </>
  )
}
