import { useI18n } from '../../i18n/use.i18n'
import { Dialog } from '../dialog/dialog'
import { Command, type CommandProps } from './command'

export interface CommandMenuProps extends CommandProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
}
export function CommandMenu({
  open,
  onOpenChange,
  title = 'Where would you like to go?',
  ...props
}: CommandMenuProps) {
  const { t, text } = useI18n()
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={text(title)}
      description={t('Search pages, find records, or jump to an action.')}
      size="lg"
      className="command-dialog"
      bodyClassName="command-dialog-body"
    >
      <Command
        {...props}
        autoFocus
        onSelect={() => {
          props.onSelect?.()
          onOpenChange(false)
        }}
      />
    </Dialog>
  )
}
export { CommandMenu as Cmdk }
