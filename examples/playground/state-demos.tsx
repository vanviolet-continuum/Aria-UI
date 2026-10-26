import { useI18n } from '../../src/template/i18n'
import { FolderKanban, RotateCcw, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  ConfirmDialog,
  EmptyIllustration,
  EmptyState,
  LoadingIllustration,
  NotFoundIllustration,
  NotFoundState,
  SearchIllustration,
  UploadIllustration,
  toast,
} from '@/template/ui'
import { useMutationTask } from '@/template/providers/mutation-provider'
import { abortableDelay } from '@/template/lib/async'
import { DemoCard } from './demo-card'

export function StateDemos() {
  const { t: tr, text: localize } = useI18n()

  const [open, setOpen] = useState(false)
  const [exists, setExists] = useState(true)
  const { runTask } = useMutationTask()
  return (
    <>
      <DemoCard
        title={tr('Confirmation Dialog')}
        description={tr('A clear pause before something important changes.')}
        code={`<ConfirmDialog open={open} onOpenChange={setOpen}\n  title="Delete this project?"\n  description="Your project will be removed."\n  onConfirm={async () => await deleteProject(id)}\n/>\n// Return false to keep the dialog open after an unsuccessful action.`}
      >
        {exists ? (
          <div className="confirm-demo-content">
            <span>
              <FolderKanban size={30} strokeWidth={1.5} />
            </span>
            <h4>{tr('Quarterly planning')}</h4>
            <p>{tr('A project with a little room to grow.')}</p>
            <Button variant="soft" color="error" onClick={() => setOpen(true)}>
              <Trash2 size={15} />
              {tr('Delete project')}
            </Button>
          </div>
        ) : (
          <EmptyState
            title={tr('A little room for something new.')}
            description={tr('The preview project has been removed.')}
            action={
              <Button variant="outlined" onClick={() => setExists(true)}>
                <RotateCcw size={14} />
                {tr('Restore preview')}
              </Button>
            }
          />
        )}
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title={tr('Delete this project?')}
          description={tr('Quarterly planning will be removed from this preview.')}
          onConfirm={async () => {
            const result = await runTask('Removing the project…', () => abortableDelay(900))
            if (result.success) {
              setExists(false)
              toast.success(tr('Project removed'))
            }
            return result.success
          }}
        />
      </DemoCard>
      <DemoCard
        title={tr('Not Found · 404')}
        description={tr('An empty list and a missing page tell different stories.')}
        code={`<EmptyState title="No projects yet" /> // Empty collection\n<SearchEmptyState onReset={clearSearch} /> // No matching results\n<NotFoundState action={<BackToDashboard />} /> // Missing page`}
      >
        <NotFoundState
          action={
            <Link to="/a-page-that-wandered-off" className="text-link">
              {tr('Try the 404 page →')}
            </Link>
          }
        />
      </DemoCard>
      <DemoCard
        title={tr('A little visual language')}
        description={tr('Original SVG illustrations, built around the same theme tokens.')}
        full
        code={`import { EmptyIllustration, SearchIllustration, NotFoundIllustration,\n  UploadIllustration, LoadingIllustration } from '@/template/ui'\n\n<EmptyIllustration title="An empty inbox" />\n<LoadingIllustration size={100} label="Loading your records" />`}
      >
        <div className="illustration-gallery">
          {[
            { label: 'A fresh start', component: <EmptyIllustration /> },
            { label: 'Keep looking', component: <SearchIllustration /> },
            { label: 'A little lost', component: <NotFoundIllustration /> },
            { label: 'A soft landing', component: <UploadIllustration /> },
            {
              label: 'Good things take a moment',
              component: (
                <LoadingIllustration size={105} label={tr('Loading illustration preview')} />
              ),
            },
          ].map((item) => (
            <div key={item.label}>
              {item.component}
              <span>{localize(item.label)}</span>
            </div>
          ))}
        </div>
      </DemoCard>
    </>
  )
}
