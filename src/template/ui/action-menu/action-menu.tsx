import { MoreHorizontal } from 'lucide-react'
import type { ReactNode } from 'react'
import { useI18n } from '../../i18n/use-i18n'
import { Menu, type MenuProps } from '../menu/menu'

export interface ActionMenuItem {
  id: string
  label: string
  icon?: ReactNode
  description?: string
  shortcut?: string
  onSelect: () => void
  destructive?: boolean
  disabled?: boolean
  separator?: boolean
}
export function ActionMenu({
  items,
  label = 'More actions',
  variant = 'compact',
}: {
  items: ActionMenuItem[]
  label?: string
  variant?: MenuProps['variant']
}) {
  const { text: localize } = useI18n()
  return (
    <Menu
      items={items}
      variant={variant}
      size="sm"
      trigger={
        <button type="button" className="icon-button" aria-label={localize(label)}>
          <MoreHorizontal size={18} />
        </button>
      }
    />
  )
}
