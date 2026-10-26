import { useI18n } from '../../../src/template/i18n'
import { CircleHelp, Plus, Settings2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ThemeToggle } from '@/template/theme'
import { LanguageSwitcher } from '@/template/i18n'
import { GlobalCommand } from './header/global-command'
import { NotificationsMenu } from './header/notifications-menu'
import { AccountMenu } from './header/account-menu'
import { WorkspaceSetup } from './header/workspace-setup'

export function HeaderActions({ onSettings }: { onSettings: () => void }) {
  const { t: tr } = useI18n()

  const navigate = useNavigate()
  return (
    <>
      <GlobalCommand />
      <LanguageSwitcher />
      <ThemeToggle />
      <button
        className="quick-add"
        aria-label={tr('Create a stock order')}
        title={tr('Create a stock order')}
        onClick={() => navigate('/stocks?new=order')}
      >
        <Plus size={21} strokeWidth={1.7} />
      </button>
      <div className="utility-actions">
        <button
          className="icon-button"
          onClick={() => navigate('/support')}
          title={tr('Help center')}
          aria-label={tr('Help center')}
        >
          <CircleHelp size={18} />
        </button>
        <NotificationsMenu />
        <button
          className="icon-button"
          onClick={onSettings}
          title={tr('Workspace settings')}
          aria-label={tr('Workspace settings')}
        >
          <Settings2 size={18} />
        </button>
      </div>
      <div className="header-divider" />
      <WorkspaceSetup onSettings={onSettings} />
      <div className="header-divider profile-divider" />
      <AccountMenu onSettings={onSettings} />
    </>
  )
}
