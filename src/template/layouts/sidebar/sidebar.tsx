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
        <button
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
        <a
          className="brand"
          href={brand.href}
          onClick={(event) => follow(event, brand.href)}
          aria-label={tr('{{value0}} home', { value0: localize(brand.name) })}
        >
          {brand.mark}
          <span>
            {brand.name}
            <span className="brand-period">.</span>
          </span>
        </a>
        <button
          className="sidebar-collapse icon-button"
          onClick={onCollapse}
          aria-label={localize(collapsed ? 'Expand sidebar' : 'Collapse sidebar')}
        >
          <ChevronLeft size={15} />
        </button>
        <button
          className="sidebar-mobile-close icon-button"
          ref={closeButton}
          onClick={onClose}
          aria-label={tr('Close navigation')}
        >
          <X size={19} />
        </button>
        {workspace && (
          <button
            className="sidebar-workspace"
            onClick={workspace.onClick}
            type="button"
            disabled={!workspace.onClick}
          >
            <span className="sidebar-workspace-icon">
              {workspace.icon ?? <Building2 size={18} />}
            </span>
            <span className="sidebar-workspace-details">
              <strong>{workspace.name}</strong>
              {workspace.description && <small>{localize(workspace.description)}</small>}
            </span>
            {workspace.onClick && <ChevronDown size={14} />}
          </button>
        )}
        <nav className="sidebar-navigation" aria-label={tr('Main navigation')}>
          {navigation.map((group, index) => (
            <div
              className={`nav-group${index === navigation.length - 1 && index > 0 ? ' nav-group--last' : ''}`}
              key={group.label ?? index}
            >
              {group.label && <div className="nav-group-label">{localize(group.label)}</div>}
              {group.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link${item.active ? ' nav-link--active' : ''}`}
                  title={localize(item.label)}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={(event) => follow(event, item.href)}
                >
                  {item.icon}
                  <span>{localize(item.label)}</span>
                  {item.badge != null && <span className="nav-count">{item.badge}</span>}
                </a>
              ))}
            </div>
          ))}
        </nav>
        {footer && <div className="sidebar-bottom">{footer}</div>}
      </aside>
    </>
  )
}
