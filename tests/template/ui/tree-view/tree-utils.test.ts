import { describe, expect, it } from 'vitest'
import {
  flattenTree,
  treeFolderIds,
  type TreeNode,
} from '../../../../src/template/ui/tree-view/tree-utils'

const nodes: TreeNode[] = [
  {
    id: 'src',
    label: 'Source',
    children: [{ id: 'ui', label: 'UI', children: [{ id: 'button', label: 'Button' }] }],
  },
  { id: 'readme', label: 'README' },
]
describe('tree navigation structure', () => {
  it('excludes collapsed descendants from keyboard traversal', () => {
    expect(flattenTree(nodes, new Set()).map((item) => item.node.id)).toEqual(['src', 'readme'])
    expect(flattenTree(nodes, new Set(['src'])).map((item) => item.node.id)).toEqual([
      'src',
      'ui',
      'readme',
    ])
  })
  it('preserves parent, level, and sibling metadata for accessible tree rows', () => {
    const leaf = flattenTree(nodes, new Set(['src', 'ui']))[2]
    expect(leaf).toMatchObject({ level: 3, parent: 'ui', position: 1, size: 1 })
    expect(treeFolderIds(nodes)).toEqual(['src', 'ui'])
  })
})
