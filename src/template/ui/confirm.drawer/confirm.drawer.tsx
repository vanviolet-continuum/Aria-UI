import { Text } from '../text/text'

import { Heading } from '../heading/heading'
import { useI18n } from '../../i18n/use.i18n'
import { AlertTriangle, Trash2 } from 'lucide-react'
import { Drawer } from '../drawer/drawer'
import { Button } from '../button/button'

export function ConfirmDrawer({
  open,
  onOpenChange,
  title = 'Are you sure?',
  description,
  onConfirm,
  confirmLabel = 'Delete record',
  loading,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description: string
  onConfirm: () => void | Promise<void>
  confirmLabel?: string
  loading?: boolean
}) {
  const { t: tr, text: localize } = useI18n()

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title={localize(title)}
      description={localize(description)}
      size="sm"
      footer={
        <>
          <Button onClick={() => onOpenChange(false)} disabled={loading}>
            {tr('Cancel')}
          </Button>
          <Button variant="danger" loading={loading} onClick={onConfirm}>
            <Trash2 size={15} />
            {confirmLabel}
          </Button>
        </>
      }
    >
      <div className="confirm-message">
        <Text as="span" variant="label" tone="inherit">
          <AlertTriangle size={24} />
        </Text>
        <Heading as="h3" variant="card">
          {tr('Take a moment to double-check.')}
        </Heading>
        <Text as="p" variant="body">
          {tr('This action removes the selected record from your workspace.')}
        </Text>
      </div>
    </Drawer>
  )
}
