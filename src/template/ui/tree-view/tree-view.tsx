import { useI18n } from '../../i18n/use-i18n'
import { ChevronRight, FileText, Folder, FolderOpen } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { flattenTree, type TreeNode } from './tree-utils'
import { EmptyState } from '../empty-state/empty-state'

export interface TreeViewProps {
  nodes: TreeNode[]
  selectedId?: string
  onSelect?: (node: TreeNode) => void
  expandedIds?: string[]
  onExpandedChange?: (ids: string[]) => void
  defaultExpandedIds?: string[]
  label?: string
}
export function TreeView({
  nodes,
  selectedId,
  onSelect,
  expandedIds,
  onExpandedChange,
  defaultExpandedIds = [],
  label = 'Folder tree',
}: TreeViewProps) {
  const { t: tr, text: localize } = useI18n()

  const [internal, setInternal] = useState(defaultExpandedIds)
  const [focused, setFocused] = useState<string>()
  const tree = useRef<HTMLDivElement>(null)
  const expanded = useMemo(() => new Set(expandedIds ?? internal), [expandedIds, internal])
  const visible = useMemo(() => flattenTree(nodes, expanded), [nodes, expanded])
  const focusId = visible.some((item) => item.node.id === focused)
    ? focused
    : visible.some((item) => item.node.id === selectedId)
      ? selectedId
      : visible.find((item) => !item.node.disabled)?.node.id
  const toggle = (id: string, force?: boolean) => {
    const next = new Set(expanded)
    if (force ?? !next.has(id)) next.add(id)
    else next.delete(id)
    setInternal([...next])
    onExpandedChange?.([...next])
  }
  const focus = (id?: string) => {
    if (!id) return
    setFocused(id)
    tree.current?.querySelector<HTMLElement>(`[data-tree-id="${CSS.escape(id)}"]`)?.focus()
  }
  if (!nodes.length)
    return (
      <EmptyState
        title={tr('No folders to show')}
        description={tr('Add a folder to start organizing your workspace.')}
      />
    )
  return (
    <div ref={tree} className="ui-tree" role="tree" aria-label={localize(label)}>
      {visible.map(({ node, level, parent, position, size }, index) => {
        const folder = !!node.children
        const open = expanded.has(node.id)
        return (
          <div
            key={node.id}
            role="treeitem"
            data-tree-id={node.id}
            aria-level={level}
            aria-setsize={size}
            aria-posinset={position}
            aria-selected={selectedId === node.id}
            aria-expanded={folder ? open : undefined}
            aria-disabled={node.disabled}
            tabIndex={!node.disabled && node.id === focusId ? 0 : -1}
            className={clsx(
              'tree-row',
              selectedId === node.id && 'tree-row--selected',
              node.disabled && 'tree-row--disabled',
            )}
            style={{ paddingLeft: 9 + (level - 1) * 23 }}
            onFocus={() => setFocused(node.id)}
            onClick={() => {
              if (!node.disabled) {
                setFocused(node.id)
                onSelect?.(node)
              }
            }}
            onKeyDown={(event) => {
              const enabled = visible.filter((item) => !item.node.disabled)
              const current = enabled.findIndex((item) => item.node.id === node.id)
              if (event.key === 'ArrowDown') {
                event.preventDefault()
                focus(enabled[Math.min(current + 1, enabled.length - 1)]?.node.id)
              }
              if (event.key === 'ArrowUp') {
                event.preventDefault()
                focus(enabled[Math.max(0, current - 1)]?.node.id)
              }
              if (event.key === 'ArrowRight' && folder) {
                event.preventDefault()
                if (!open) toggle(node.id, true)
                else focus(visible[index + 1]?.node.id)
              }
              if (event.key === 'ArrowLeft') {
                event.preventDefault()
                if (folder && open) toggle(node.id, false)
                else focus(parent)
              }
              if (event.key === 'Home') {
                event.preventDefault()
                focus(enabled[0]?.node.id)
              }
              if (event.key === 'End') {
                event.preventDefault()
                focus(enabled.at(-1)?.node.id)
              }
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                if (!node.disabled) onSelect?.(node)
              }
            }}
          >
            {folder ? (
              <button
                type="button"
                className="tree-toggle"
                tabIndex={-1}
                disabled={node.disabled}
                aria-label={tr('{{value0}} {{value1}}', {
                  value0: localize(open ? 'Collapse' : 'Expand'),
                  value1: localize(node.label),
                })}
                onClick={(event) => {
                  event.stopPropagation()
                  toggle(node.id)
                }}
              >
                <ChevronRight size={14} className={open ? 'tree-chevron--open' : ''} />
              </button>
            ) : (
              <span className="tree-toggle" />
            )}
            <span className={folder ? 'tree-folder-icon' : 'tree-file-icon'}>
              {node.icon ??
                (folder ? (
                  open ? (
                    <FolderOpen size={17} />
                  ) : (
                    <Folder size={17} />
                  )
                ) : (
                  <FileText size={16} />
                ))}
            </span>
            <span>{localize(node.label)}</span>
            {folder && <small>{node.children!.length}</small>}
          </div>
        )
      })}
    </div>
  )
}
export type { TreeNode } from './tree-utils'
