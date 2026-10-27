import { Text } from '../../ui/text/text'

import { Heading } from '../../ui/heading/heading'
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
        <Text
          as="button"
          variant="button"
          tone="inherit"
          className="icon-button mobile-menu"
          onClick={onMenu}
          aria-label={tr('Open navigation')}
        >
          <Menu size={21} />
        </Text>
        <Heading as="h1" variant="page">
          {localize(title)}
        </Heading>
      </div>
      <div className="header-actions">{actions}</div>
    </header>
  )
}
