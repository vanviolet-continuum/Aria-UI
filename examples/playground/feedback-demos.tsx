import { useI18n } from '../../src/template/i18n'
import { SearchEmptyState } from '@/template/ui/search-empty-state/search-empty-state'
import { CircleAlert, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button, EmptyState, LoadingOverlay, Skeleton, toast } from '@/template/ui'
import { DemoCard } from './demo-card'

export function FeedbackDemos() {
  const { t: tr } = useI18n()

  const [loading, setLoading] = useState(false)
  return (
    <>
      <DemoCard
        title={tr('Sonner Toast')}
        description={tr('Just enough feedback, right when it matters.')}
        code={`import { Toaster, toast } from '@/template/ui'\n\n// Mount <Toaster /> once at the application root.\ntoast.success('Changes saved')\ntoast.error('Something went wrong', { description: 'Please try again.' })\ntoast.promise(save(), { loading: 'Saving…', success: 'Saved', error: 'Failed' })`}
      >
        <div className="demo-toast-illustration">
          <span>✓</span>
          <div>
            <strong>{tr('Your changes are saved.')}</strong>
            <small>{tr('A little reassurance goes a long way.')}</small>
          </div>
        </div>
        <div className="demo-row">
          <Button
            onClick={() =>
              toast.success(tr('Changes saved'), {
                description: 'Everything is right where you left it.',
              })
            }
          >
            {tr('Success')}
          </Button>
          <Button
            onClick={() =>
              toast.error(tr('Something went wrong'), {
                description: 'Give it another try in a moment.',
              })
            }
          >
            {tr('Error')}
          </Button>
          <Button
            onClick={() =>
              toast.warning(tr('A little heads up'), { description: 'You have unsaved changes.' })
            }
          >
            {tr('Warning')}
          </Button>
          <Button onClick={() => toast.info(tr('You’re all caught up'))}>{tr('Info')}</Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.promise(new Promise((resolve) => setTimeout(resolve, 1800)), {
                loading: 'Getting things ready…',
                success: 'All set. You’re ready to go.',
                error: 'Please try again.',
              })
            }
          >
            {tr('Promise toast')}
          </Button>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Empty State')}
        description={tr('An empty screen can still be a helpful one.')}
        code={`import { EmptyState, Button } from '@/template/ui'\n\n<EmptyState\n  title="A fresh start."\n  description="Your projects will feel right at home here."\n  \n  action={<Button onClick={create}>Create project</Button>}\n/>`}
      >
        <EmptyState
          title={tr('A fresh start.')}
          description={tr('Your projects will feel right at home here.')}
          action={
            <Button
              variant="primary"
              size="sm"
              onClick={() => toast.success(tr('Ready for your first project'))}
            >
              <Plus size={14} />
              {tr('Create project')}
            </Button>
          }
        />
      </DemoCard>
      <DemoCard
        title={tr('Loading Overlay & Skeleton')}
        description={tr('Give the wait a little structure. Scoped, calm, and accessible.')}
        code={`import { LoadingOverlay, Skeleton } from '@/template/ui'\n\n<LoadingOverlay loading={isLoading} label="Refreshing your data…">\n  <YourContent />\n</LoadingOverlay>\n<Skeleton width="60%" height={14} />`}
      >
        <div className="demo-stack">
          <LoadingOverlay loading={loading} label={tr('Refreshing your workspace…')}>
            <div className="demo-skeleton-card">
              <div className="demo-row">
                <Skeleton circle width={40} height={40} />
                <div className="demo-skeleton-lines">
                  <Skeleton width="55%" height={12} />
                  <Skeleton width="35%" height={9} />
                </div>
              </div>
              <Skeleton width="100%" height={10} />
              <Skeleton width="90%" height={10} />
              <Skeleton width="70%" height={10} />
            </div>
          </LoadingOverlay>
          <div className="demo-row">
            <Button
              loading={loading}
              onClick={() => {
                setLoading(true)
                setTimeout(() => setLoading(false), 2200)
              }}
            >
              {tr('Try loading overlay')}
            </Button>
            <span className="demo-note">{tr('Automatically clears after 2 seconds.')}</span>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Helpful Empty Results')}
        description={tr('A clear way back when a search comes up empty.')}
        code={`<SearchEmptyState\n  title="No matching results."\n  description="Try a different keyword."\n  onReset={clearSearch}\n/>`}
      >
        <SearchEmptyState
          title={tr('No matching results.')}
          description={tr('Try a different keyword or reset your filters.')}
          onReset={() => toast('Search cleared', { icon: <CircleAlert size={16} /> })}
        />
      </DemoCard>
    </>
  )
}
