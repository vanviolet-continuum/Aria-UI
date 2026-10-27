import { useI18n } from '../../i18n/use.i18n'
import { Menu } from 'lucide-react'
import type { ReactNode } from 'react'

export interface AdminHeaderProps {
  title: ReactNode
  onMenu: () => void
  actions?: ReactNode
}
export function AdminHeader({ title, onMenu, actions }: AdminHeaderProps) {
  const { t: tr, text: localize } = useI18n()

  return (
    <header className="topbar">
      <div className="page-title">
        <button
          className="icon-button mobile-menu"
          onClick={onMenu}
          aria-label={tr('Open navigation')}
        >
          <Menu size={21} />
        </button>
        <h1>{localize(title)}</h1>
      </div>
      <div className="header-actions">{actions}</div>
    </header>
  )
}
