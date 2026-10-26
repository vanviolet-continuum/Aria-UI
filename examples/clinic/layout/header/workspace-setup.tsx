import { useI18n } from '../../../../src/template/i18n'
import * as Popover from '@radix-ui/react-popover'
import { ArrowUpRight, Check, Flag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useWorkspace } from '../../workspace/workspace-context'
import { initialOrders } from '../../data/stock'

export function WorkspaceSetup({ onSettings }: { onSettings: () => void }) {
  const { t: tr, text: localize } = useI18n()

  const { orders, records, settings } = useWorkspace()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const items = [
    { label: 'Create your workspace', complete: true },
    {
      label: 'Personalize your clinic',
      complete: settings.clinicName !== 'Avicena Clinic',
      action: onSettings,
    },
    {
      label: 'Add your first patient',
      complete: !!records.patients?.some((item) => !/^PT00\d$/.test(item.id)),
      action: () => navigate('/patients?new=1'),
    },
    {
      label: 'Place a stock order',
      complete: orders.some((order) => !initialOrders.some((item) => item.id === order.id)),
      action: () => navigate('/stocks?new=order'),
    },
  ]
  const completed = items.filter((item) => item.complete).length
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          className="setup-progress"
          title={tr('Workspace setup')}
          aria-label={tr('Workspace setup')}
        >
          <span>
            <Flag size={14} fill="currentColor" />
          </span>
          <strong>
            {completed}
            <span>/4</span>
          </strong>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="popover setup-popover" align="end" sideOffset={18}>
          <div className="popover-heading">
            <strong>{tr('Make yourself at home')}</strong>
            <span className="muted">
              {completed}
              {' ' + tr('of 4')}
            </span>
          </div>
          <p>{tr('Your new practice workspace is ready to grow.')}</p>
          {items.map((item) => (
            <button
              className="setup-item"
              key={item.label}
              disabled={item.complete}
              onClick={() => {
                setOpen(false)
                item.action?.()
              }}
            >
              <span className={item.complete ? 'setup-check' : ''}>
                {item.complete && <Check size={12} />}
              </span>
              {localize(item.label)}
              {!item.complete && <ArrowUpRight size={13} />}
            </button>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
