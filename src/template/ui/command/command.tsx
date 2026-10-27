import { useI18n } from '../../i18n/use.i18n'
import { Command as CommandPrimitive } from 'cmdk'
import { CornerDownLeft, Search } from 'lucide-react'
import type { ReactNode } from 'react'

export interface CommandItem {
  id: string
  label: string
  description?: string
  keywords?: string
  group?: string
  icon?: ReactNode
  shortcut?: string
  disabled?: boolean
  onSelect: () => void
}
export interface CommandProps {
  items: CommandItem[]
  placeholder?: string
  onSelect?: () => void
  autoFocus?: boolean
  emptyMessage?: string
}

export function Command({
  items,
  placeholder = 'Type a command or search…',
  onSelect,
  autoFocus = false,
  emptyMessage = 'No results found.',
}: CommandProps) {
  const { t: tr, text: localize } = useI18n()

  const groups = [...new Set(items.map((item) => item.group ?? 'Commands'))]
  return (
    <CommandPrimitive className="ui-command" loop label={tr('Command menu')}>
      <div className="command-search">
        <Search size={19} />
        <CommandPrimitive.Input
          autoFocus={autoFocus}
          aria-label={tr('Search commands')}
          placeholder={localize(placeholder)}
        />
        <kbd>{tr('esc')}</kbd>
      </div>
      <CommandPrimitive.List className="command-list">
        <CommandPrimitive.Empty className="command-empty">
          <Search size={25} />
          <strong>{localize(emptyMessage)}</strong>
          <span>{tr('Try a different keyword.')}</span>
        </CommandPrimitive.Empty>
        {groups.map((group) => (
          <CommandPrimitive.Group
            key={group}
            heading={<div className="command-group">{localize(group)}</div>}
          >
            {items
              .filter((item) => (item.group ?? 'Commands') === group)
              .map((item) => (
                <CommandPrimitive.Item
                  key={item.id}
                  value={`${item.label} ${item.id}`}
                  keywords={[
                    localize(item.label),
                    localize(item.description ?? ''),
                    item.keywords ?? '',
                  ]}
                  disabled={item.disabled}
                  className="command-item"
                  onSelect={() => {
                    item.onSelect()
                    onSelect?.()
                  }}
                >
                  <span className="command-item-icon">{item.icon ?? <Search size={16} />}</span>
                  <span>
                    {localize(item.label)}
                    {item.description && <small>{localize(item.description)}</small>}
                  </span>
                  {item.shortcut ? <kbd>{item.shortcut}</kbd> : <CornerDownLeft size={13} />}
                </CommandPrimitive.Item>
              ))}
          </CommandPrimitive.Group>
        ))}
      </CommandPrimitive.List>
      <div className="command-footer">
        <span>
          <kbd>↑</kbd>
          <kbd>↓</kbd>
          {' ' + tr('to navigate')}
        </span>
        <span>
          <kbd>↵</kbd>
          {' ' + tr('to select')}
        </span>
      </div>
    </CommandPrimitive>
  )
}
