import { useI18n } from '../../src/template/i18n'
import {
  CalendarDays,
  FileText,
  LayoutDashboard,
  Plus,
  Search,
  Settings2,
  Users,
} from 'lucide-react'
import { useState } from 'react'
import { Button, CommandMenu, toast } from '@/template/ui'
import { DemoCard } from './demo-card'

export function CommandDemo() {
  const { t: tr, text: localize } = useI18n()

  const [open, setOpen] = useState(false)
  const action = (label: string) => () =>
    toast.info(tr('{{value0}} selected', { value0: localize(label) }))
  const items = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      group: 'Pages',
      icon: <LayoutDashboard size={16} />,
      shortcut: 'G D',
      onSelect: action('Dashboard'),
    },
    {
      id: 'team',
      label: 'Team members',
      group: 'Pages',
      icon: <Users size={16} />,
      onSelect: action('Team members'),
    },
    {
      id: 'calendar',
      label: 'Calendar',
      group: 'Pages',
      icon: <CalendarDays size={16} />,
      onSelect: action('Calendar'),
    },
    {
      id: 'project',
      label: 'Create a project',
      group: 'Quick actions',
      icon: <Plus size={16} />,
      onSelect: action('Create project'),
    },
    {
      id: 'document',
      label: 'New document',
      group: 'Quick actions',
      icon: <FileText size={16} />,
      onSelect: action('New document'),
    },
    {
      id: 'settings',
      label: 'Workspace settings',
      group: 'Quick actions',
      icon: <Settings2 size={16} />,
      onSelect: action('Settings'),
    },
  ]
  return (
    <>
      <DemoCard
        title={tr('Command Menu · ⌘K')}
        description={tr('Move at the speed of thought. Powered by cmdk.')}
        code={`import { CommandMenu } from '@/template/ui'\n\n<CommandMenu open={open} onOpenChange={setOpen}\n  items={[{\n    id: 'dashboard', label: 'Dashboard', group: 'Pages',\n    icon: <LayoutDashboard size={16} />,\n    onSelect: () => navigate('/dashboard'),\n  }]}\n/>\n// Command can also be rendered inline.`}
      >
        <div className="demo-command-preview">
          <div>
            <Search size={17} />
            <span>{tr('Find a page or action…')}</span>
            <kbd>⌘ K</kbd>
          </div>
          <p>{tr('QUICK ACTIONS')}</p>
          <span>
            <LayoutDashboard size={15} />
            {tr('Dashboard')}
            <kbd>↵</kbd>
          </span>
          <span>
            <Users size={15} />
            {tr('Team members')}
          </span>
          <span>
            <Plus size={15} />
            {tr('Create a project')}
          </span>
        </div>
        <Button onClick={() => setOpen(true)}>
          <Search size={14} />
          {tr('Try command menu')}
        </Button>
      </DemoCard>
      <CommandMenu open={open} onOpenChange={setOpen} items={items} />
    </>
  )
}
