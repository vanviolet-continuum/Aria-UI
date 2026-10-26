import { useI18n } from '../../../../src/template/i18n'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDown, Palette, Settings2, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useWorkspace } from '../../workspace/workspace-context'
import { Drawer } from '@/template/ui/drawer/drawer'
import { Button } from '@/template/ui/button/button'
import { Badge } from '@/template/ui/badge/badge'

export function AccountMenu({ onSettings }: { onSettings: () => void }) {
  const { t: tr, text: localize } = useI18n()

  const [open, setOpen] = useState(false)
  const { settings } = useWorkspace()
  return (
    <>
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger asChild>
          <button className="profile-button" aria-label={tr('Open account menu')}>
            <span className="avatar">
              <UserRound size={23} strokeWidth={1.6} />
            </span>
            <span className="profile-text">
              <strong>{tr('Darrell Steward')}</strong>
              <small>{tr('Super admin')}</small>
            </span>
            <ChevronDown size={15} />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="dropdown-menu" align="end" sideOffset={15}>
            <div className="dropdown-label">{tr('Your account')}</div>
            <DropdownMenu.Item onSelect={() => setOpen(true)}>
              <UserRound size={15} />
              {tr('View profile')}
            </DropdownMenu.Item>
            <DropdownMenu.Item onSelect={onSettings}>
              <Settings2 size={15} />
              {tr('Workspace settings')}
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item asChild>
              <Link to="/settings/appearance">
                <Palette size={15} />
                {tr('Theme studio')}
              </Link>
            </DropdownMenu.Item>
            <span className="dropdown-footnote">{tr('Aria UI · Admin workspace')}</span>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title={tr('Your profile')}
        description={tr('Your account in the {{value0}} workspace.', {
          value0: localize(settings.clinicName),
        })}
        footer={
          <Button
            variant="primary"
            onClick={() => {
              setOpen(false)
              onSettings()
            }}
          >
            {tr('Workspace settings')}
          </Button>
        }
      >
        <div className="profile-card">
          <span className="avatar avatar--large">
            <UserRound size={35} />
          </span>
          <h3>{tr('Darrell Steward')}</h3>
          <p>{tr('darrell@avicena.example')}</p>
          <Badge variant="violet">{tr('Super administrator')}</Badge>
        </div>
      </Drawer>
    </>
  )
}
