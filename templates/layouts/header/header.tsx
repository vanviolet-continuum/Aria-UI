import { useEffect, useState, type ReactNode } from 'react'
import { Menu } from '../../icons/interface/menu.icon'
import { Search } from '../../icons/interface/search.icon'
import { useI18n } from '../../i18n/use.i18n'
import { Text } from '../../ui/text/text'
import { CodeText } from '../../ui/code.text/code.text'
import { Cmdk, type CommandMenuProps } from '../../ui/command/command.menu'

export interface AdminHeaderProps {
  title: ReactNode
  onMenu: () => void
  actions?: ReactNode
  command?: Omit<CommandMenuProps, 'open' | 'onOpenChange'> | false
}
export function AdminHeader({ title, onMenu, actions, command }: AdminHeaderProps) {
  const { t, text } = useI18n()
  const [open, setOpen] = useState(false)
  const enabled = command !== false
  useEffect(() => {
    if (!enabled) return
    const shortcut = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === 'k' &&
        !event.isComposing
      ) {
        event.preventDefault()
        setOpen((previous) => !previous)
      }
    }
    window.addEventListener('keydown', shortcut)
    return () => window.removeEventListener('keydown', shortcut)
  }, [enabled])
  return (
    <header className="topbar">
      <div className="page-title">
        <Text
          as="button"
          type="button"
          variant="button"
          tone="inherit"
          className="icon-button mobile-menu"
          onClick={onMenu}
          aria-label={t('Open navigation')}
        >
          <Menu size={21} />
        </Text>
        <Text as="span" variant="label" className="topbar-context">
          {text(title)}
        </Text>
      </div>
      {enabled && (
        <button
          type="button"
          className="command-trigger header-command-trigger"
          onClick={() => setOpen(true)}
          aria-label={t('Search pages and actions')}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <Search size={16} aria-hidden="true" />
          <Text as="span" variant="description">
            {t('Search pages and actions…')}
          </Text>
          <CodeText as="kbd" variant="code">
            Ctrl / ⌘ K
          </CodeText>
        </button>
      )}
      <div className="header-actions">{actions}</div>
      {enabled && <Cmdk {...(command || { items: [] })} open={open} onOpenChange={setOpen} />}
    </header>
  )
}
