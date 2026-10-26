import { useI18n } from '../../../../src/template/i18n'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Package, Plus, Search } from 'lucide-react'
import { navigationItems } from '../../data/navigation'
import { useWorkspace } from '../../workspace/workspace-context'
import { useKeyboardShortcut } from '@/template/hooks/use-keyboard-shortcut'
import { CommandMenu } from '@/template/ui/command/command-menu'
import type { CommandItem } from '@/template/ui/command/command'

export function GlobalCommand() {
  const { t: tr } = useI18n()

  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { products } = useWorkspace()
  useKeyboardShortcut('k', () => setOpen((previous) => !previous))
  const items: CommandItem[] = [
    ...navigationItems.map(({ title, path, icon: Icon }) => ({
      id: path,
      label: title,
      group: 'Navigate',
      icon: <Icon size={16} />,
      onSelect: () => navigate(path),
    })),
    {
      id: 'new-order',
      label: 'Create a stock order',
      group: 'Quick actions',
      icon: <Plus size={16} />,
      onSelect: () => navigate('/stocks?new=order'),
    },
    {
      id: 'new-patient',
      label: 'Add a patient',
      group: 'Quick actions',
      icon: <Plus size={16} />,
      onSelect: () => navigate('/patients?new=1'),
    },
    ...products.map((product) => ({
      id: product.id,
      label: product.name,
      description: product.sku,
      group: 'Inventory',
      icon: <Package size={16} />,
      onSelect: () => navigate(`/stocks?tab=inventory&q=${encodeURIComponent(product.sku)}`),
    })),
  ]
  return (
    <>
      <button
        className="command-trigger"
        onClick={() => setOpen(true)}
        aria-label={tr('Open command menu')}
      >
        <Search size={16} />
        <span>{tr('Search or jump to…')}</span>
        <kbd>{tr('Ctrl K')}</kbd>
      </button>
      <CommandMenu open={open} onOpenChange={setOpen} items={items} />
    </>
  )
}
