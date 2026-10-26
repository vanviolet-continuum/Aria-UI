import { useI18n } from '../../../../src/template/i18n'
import * as Popover from '@radix-ui/react-popover'
import { Activity, Check, Package } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWorkspace } from '../../workspace/workspace-context'
import { stockStatus } from '../../lib/utils'

export function NotificationsMenu() {
  const { t: tr } = useI18n()

  const { products, settings } = useWorkspace()
  const [read, setRead] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const count = products.filter((product) => stockStatus(product) !== 'in-stock').length
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          className="icon-button notification-button"
          title={tr('Notifications')}
          aria-label={tr('Notifications')}
        >
          <Activity size={18} />
          {!read && settings.emailNotifications && <span />}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="popover notifications-popover" align="end" sideOffset={15}>
          <div className="popover-heading">
            <strong>{tr('Notifications')}</strong>
            <button onClick={() => setRead(true)} className="text-button">
              {tr('Mark all read')}
            </button>
          </div>
          <button
            className={`notification-item${read ? '' : ' notification-item--unread'}`}
            onClick={() => {
              navigate('/stocks?tab=inventory&status=attention')
              setRead(true)
              setOpen(false)
            }}
          >
            <span className="notification-icon">
              <Package size={18} />
            </span>
            <span>
              <strong>
                {settings.emailNotifications
                  ? tr('{{count}} products need attention', { count })
                  : tr('Stock reminders paused')}
              </strong>
              <small>
                {settings.emailNotifications
                  ? tr('Review your low and out-of-stock supplies.')
                  : tr('Enable reminders in workspace settings.')}
              </small>
              <em>{tr('Inventory update')}</em>
            </span>
          </button>
          <div className="popover-note">
            <Check size={13} />
            {tr('You’re all caught up on everything else.')}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
