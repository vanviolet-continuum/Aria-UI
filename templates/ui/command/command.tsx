import { Text } from '../text/text'

import { CodeText } from '../code.text/code.text'
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
        <CodeText as="kbd" variant="code">
          {tr('esc')}
        </CodeText>
      </div>
      <CommandPrimitive.List className="command-list">
        <CommandPrimitive.Empty className="command-empty">
          <Search size={25} />
          <Text as="strong" variant="label">
            {localize(emptyMessage)}
          </Text>
          <Text as="span" variant="label">
            {tr('Try a different keyword.')}
          </Text>
        </CommandPrimitive.Empty>
        {groups.map((group) => (
          <CommandPrimitive.Group
            key={group}
            heading={
              <Text as="div" variant="body" className="command-group">
                {localize(group)}
              </Text>
            }
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
                  <Text as="span" variant="label" tone="inherit" className="command-item-icon">
                    {item.icon ?? <Search size={16} />}
                  </Text>
                  <Text as="span" variant="label">
                    {localize(item.label)}
                    {item.description && (
                      <Text as="small" variant="caption">
                        {localize(item.description)}
                      </Text>
                    )}
                  </Text>
                  {item.shortcut ? (
                    <CodeText as="kbd" variant="code">
                      {item.shortcut}
                    </CodeText>
                  ) : (
                    <CornerDownLeft size={13} />
                  )}
                </CommandPrimitive.Item>
              ))}
          </CommandPrimitive.Group>
        ))}
      </CommandPrimitive.List>
      <div className="command-footer">
        <Text as="span" variant="label">
          <CodeText as="kbd" variant="code">
            ↑
          </CodeText>
          <CodeText as="kbd" variant="code">
            ↓
          </CodeText>
          {' ' + tr('to navigate')}
        </Text>
        <Text as="span" variant="label">
          <CodeText as="kbd" variant="code">
            ↵
          </CodeText>
          {' ' + tr('to select')}
        </Text>
      </div>
    </CommandPrimitive>
  )
}
