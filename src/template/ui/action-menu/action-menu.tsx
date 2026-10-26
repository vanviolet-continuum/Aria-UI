import { useI18n } from '../../i18n/use-i18n'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import type { ReactNode } from 'react'

export interface ActionMenuItem {
  id: string
  label: string
  icon?: ReactNode
  onSelect: () => void
  destructive?: boolean
  disabled?: boolean
  separator?: boolean
}
export function ActionMenu({
  items,
  label = 'More actions',
}: {
  items: ActionMenuItem[]
  label?: string
}) {
  const { text: localize } = useI18n()

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button type="button" className="icon-button" aria-label={localize(label)}>
          <MoreHorizontal size={18} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="dropdown-menu" align="end" sideOffset={6}>
          {items.map((item) => (
            <DropdownMenu.Group key={item.id}>
              {item.separator && <DropdownMenu.Separator />}
              <DropdownMenu.Item
                disabled={item.disabled}
                onSelect={item.onSelect}
                className={item.destructive ? 'dropdown-danger' : undefined}
              >
                {item.icon}
                {localize(item.label)}
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
