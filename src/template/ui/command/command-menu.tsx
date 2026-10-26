import { useI18n } from '../../i18n/use-i18n'
import { Drawer } from '../drawer/drawer'
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
  const { t: tr, text: localize } = useI18n()

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title={localize(title)}
      description={tr('Search pages, find records, or jump to an action.')}
      className="command-drawer"
    >
      <Command
        {...props}
        autoFocus
        onSelect={() => {
          props.onSelect?.()
          onOpenChange(false)
        }}
      />
    </Drawer>
  )
}

export { CommandMenu as Cmdk }
