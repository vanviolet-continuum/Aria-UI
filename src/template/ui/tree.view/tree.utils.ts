import type { ReactNode } from 'react'

export interface TreeNode {
  id: string
  label: string
  children?: TreeNode[]
  icon?: ReactNode
  disabled?: boolean
}
export interface VisibleTreeNode {
  node: TreeNode
  level: number
  parent?: string
  position: number
  size: number
}
export function flattenTree(
  nodes: TreeNode[],
  expanded: Set<string>,
  level = 1,
  parent?: string,
): VisibleTreeNode[] {
  return nodes.flatMap((node, index) => [
    { node, level, parent, position: index + 1, size: nodes.length },
    ...(node.children && expanded.has(node.id)
      ? flattenTree(node.children, expanded, level + 1, node.id)
      : []),
  ])
}
export function treeFolderIds(nodes: TreeNode[]): string[] {
  return nodes.flatMap((node) => (node.children ? [node.id, ...treeFolderIds(node.children)] : []))
}
