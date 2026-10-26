import { useI18n } from '../../src/template/i18n'
import { ArrowUpRight, Check, Download, Plus, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { Badge, Button, Chip, Tabs, toast } from '@/template/ui'
import { DemoCard } from './demo-card'

export function FoundationDemos() {
  const { t: tr } = useI18n()

  const [chips, setChips] = useState(['Design', 'Development', 'React'])
  const [tab, setTab] = useState('overview')
  const [saving, setSaving] = useState(false)
  return (
    <>
      <DemoCard
        title={tr('Button')}
        description={tr('A clear next step. Six variants, five sizes, and a loading state.')}
        code={`import { Button } from '@/template/ui'\n\n<Button variant="primary" loading={saving} onClick={save}>\n  Save changes\n</Button>`}
      >
        <div className="demo-stack">
          <div className="demo-row">
            <Button variant="primary" onClick={() => toast.success(tr('Primary action clicked'))}>
              <Plus size={15} />
              {tr('Create project')}
            </Button>
            <Button onClick={() => toast.info(tr('Your download is ready'))}>
              <Download size={15} />
              {tr('Export')}
            </Button>
            <Button variant="outline" onClick={() => toast('Changes are up to date')}>
              <Check size={15} />
              {tr('Confirm')}
            </Button>
          </div>
          <div className="demo-row">
            <Button variant="ghost" onClick={() => toast('No changes made')}>
              {tr('Ghost button')}
            </Button>
            <Button variant="danger" onClick={() => toast.warning(tr('This is a preview action'))}>
              {tr('Delete')}
            </Button>
            <Button variant="link" onClick={() => toast('You’re already exploring it')}>
              {tr('Explore')}
              <ArrowUpRight size={14} />
            </Button>
          </div>
          <div className="demo-row demo-row--separated">
            <Button
              variant="primary"
              loading={saving}
              loadingText="Saving changes…"
              onClick={() => {
                setSaving(true)
                setTimeout(() => {
                  setSaving(false)
                  toast.success(tr('Changes saved'))
                }, 1800)
              }}
            >
              {tr('Try loading state')}
            </Button>
            <Button disabled>{tr('Disabled')}</Button>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Badge & Chip')}
        description={tr('Small details that tell the whole story.')}
        code={`import { Badge, Chip } from '@/template/ui'\n\n<Badge variant="success" dot>Active</Badge>\n<Chip variant="primary" onRemove={removeFilter}>React</Chip>`}
      >
        <div className="demo-stack">
          <div className="demo-row">
            <Badge dot>{tr('Draft')}</Badge>
            <Badge variant="primary" dot>
              {tr('In progress')}
            </Badge>
            <Badge variant="success" dot>
              {tr('Completed')}
            </Badge>
            <Badge variant="warning" dot>
              {tr('Pending')}
            </Badge>
            <Badge variant="danger" dot>
              {tr('Cancelled')}
            </Badge>
            <Badge variant="violet" dot>
              {tr('Review')}
            </Badge>
          </div>
          <div className="demo-row">
            <Badge variant="primary" appearance="outline">
              {tr('Outlined')}
            </Badge>
            <Badge variant="success" appearance="solid">
              {tr('Published')}
            </Badge>
            <Badge size="sm">{tr('Small badge')}</Badge>
          </div>
          <div className="demo-row demo-row--separated">
            {chips.map((chip, index) => (
              <Chip
                key={chip}
                variant={index === 1 ? 'violet' : 'primary'}
                onRemove={() => setChips(chips.filter((item) => item !== chip))}
              >
                {chip}
              </Chip>
            ))}
            <button
              className="demo-reset"
              aria-label={tr('Reset chips')}
              onClick={() => setChips(['Design', 'Development', 'React'])}
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Tabs')}
        description={tr('Switch context, with keyboard navigation built in.')}
        code={`<Tabs\n  value={tab}\n  onChange={setTab}\n  items={[\n    { value: 'overview', label: 'Overview' },\n    { value: 'activity', label: 'Activity', count: 8 },\n  ]}\n/>`}
      >
        <div className="demo-stack">
          <Tabs
            value={tab}
            onChange={setTab}
            items={[
              { value: 'overview', label: 'Overview' },
              { value: 'activity', label: 'Activity', count: 8 },
              { value: 'settings', label: 'Settings' },
              { value: 'soon', label: 'Coming soon', disabled: true },
            ]}
          />
          <div className="demo-tab-content">
            {tr('You’re viewing') + ' '}
            <strong>{tab}</strong>
            {tr('. Try the arrow keys.')}
          </div>
          <Tabs
            variant="pill"
            value={tab}
            onChange={setTab}
            items={[
              { value: 'overview', label: 'Overview' },
              { value: 'activity', label: 'Activity' },
              { value: 'settings', label: 'Settings' },
            ]}
          />
        </div>
      </DemoCard>
    </>
  )
}
