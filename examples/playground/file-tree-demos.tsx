import { useI18n } from '../../src/template/i18n'
import { RotateCcw, Upload } from 'lucide-react'
import { useState } from 'react'
import { Badge, Button, FileUpload, TreeView, toast, type TreeNode } from '@/template/ui'
import { treeFolderIds } from '@/template/ui/tree-view/tree-utils'
import { useMutationTask } from '@/template/providers/mutation-provider'
import { abortableDelay } from '@/template/lib/async'
import { DemoCard } from './demo-card'

const nodes: TreeNode[] = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'components',
        label: 'components',
        children: [
          {
            id: 'ui',
            label: 'ui',
            children: [
              { id: 'button', label: 'button.tsx' },
              { id: 'input', label: 'input.tsx' },
              { id: 'drawer', label: 'drawer.tsx' },
            ],
          },
          {
            id: 'layout',
            label: 'layout',
            children: [
              { id: 'sidebar', label: 'sidebar.tsx' },
              { id: 'header', label: 'header.tsx' },
            ],
          },
        ],
      },
      {
        id: 'pages',
        label: 'pages',
        children: [
          { id: 'dashboard', label: 'dashboard-page.tsx' },
          { id: 'wizard', label: 'wizard-page.tsx' },
        ],
      },
      {
        id: 'styles',
        label: 'styles',
        children: [
          { id: 'tokens', label: 'tokens.css' },
          { id: 'theme', label: 'theme.css' },
        ],
      },
    ],
  },
  {
    id: 'public',
    label: 'public',
    children: [
      { id: 'favicon', label: 'favicon.svg' },
      { id: 'images', label: 'images', children: [] },
    ],
  },
  { id: 'readme', label: 'README.md' },
]
export function FileTreeDemos() {
  const { t: tr, text: localize } = useI18n()

  const [files, setFiles] = useState<File[]>([])
  const [selected, setSelected] = useState<TreeNode | null>(null)
  const [expanded, setExpanded] = useState(['src', 'components', 'ui'])
  const { runTask } = useMutationTask()
  return (
    <>
      <DemoCard
        title={tr('File Upload & Dropzone')}
        description={tr('A soft landing for your files. Drag, drop, or browse.')}
        code={`const [files, setFiles] = useState<File[]>([])\n<FileUpload files={files} onChange={setFiles}\n  accept="image/*,.pdf" maxFiles={5} maxSize={10 * 1024 * 1024}\n/>\n// Upload through your own FormData/fetch handler.`}
      >
        <div className="demo-stack">
          <FileUpload
            files={files}
            onChange={setFiles}
            accept="image/*,.pdf"
            description={tr('PNG, JPG, SVG or PDF · Up to 10 MB each')}
          />
          <div className="demo-row">
            <Button
              variant="contained"
              disabled={!files.length}
              onClick={async () => {
                const result = await runTask('Preparing your files…', () => abortableDelay(1200))
                if (result.success)
                  toast.success(
                    tr('{{value0}} files are ready', { value0: localize(files.length) }),
                    {
                      description: 'Demo complete. Connect this handler to your upload API.',
                    },
                  )
              }}
            >
              <Upload size={14} />
              {tr('Try upload')}
            </Button>
            <Badge>
              {files.length}
              {' ' + tr('of 5 files')}
            </Badge>
          </div>
          <p className="demo-note">
            {tr('Preview files locally. The example does not send files to an external service.')}
          </p>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Tree View')}
        description={tr('A little structure goes a long way. Expand, explore, and select.')}
        code={`<TreeView nodes={nodes} selectedId={selected?.id}\n  onSelect={setSelected} defaultExpandedIds={['src']}\n/>\n// Arrow keys navigate; → expands, ← collapses, Enter selects.`}
      >
        <div className="demo-stack">
          <div className="demo-row">
            <Button size="xs" variant="outlined" onClick={() => setExpanded(treeFolderIds(nodes))}>
              {tr('Expand all')}
            </Button>
            <Button size="xs" variant="text" color="secondary" onClick={() => setExpanded([])}>
              {tr('Collapse all')}
            </Button>
            <Button
              size="xs"
              variant="text"
              color="secondary"
              aria-label={tr('Reset tree')}
              onClick={() => {
                setExpanded(['src', 'components', 'ui'])
                setSelected(null)
              }}
            >
              <RotateCcw size={13} />
            </Button>
          </div>
          <TreeView
            nodes={nodes}
            selectedId={selected?.id}
            onSelect={setSelected}
            expandedIds={expanded}
            onExpandedChange={setExpanded}
          />
          <div className="demo-selection">
            {tr('Selected')}
            <code>{selected?.label ?? 'Choose a file or folder'}</code>
          </div>
        </div>
      </DemoCard>
    </>
  )
}
