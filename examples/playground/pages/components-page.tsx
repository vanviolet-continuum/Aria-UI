import { useI18n } from '../../../src/template/i18n'
import { ArrowUpRight, Blocks, Box, Code2, Layers3 } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { Badge, Tabs } from '@/template/ui'
import { FoundationDemos } from '../foundation-demos'
import { InputDemos } from '../input-demos'
import { DateDemos } from '../date-demos'
import { TableDemo } from '../table-demo'
import { FeedbackDemos } from '../feedback-demos'
import { DrawerDemo } from '../drawer-demo'
import { CommandDemo } from '../command-demo'
import { AdvancedInputDemos } from '../advanced-input-demos'
import { AsyncDemos } from '../async-demos'
import { FileTreeDemos } from '../file-tree-demos'
import { WorkflowDemos } from '../workflow-demos'
import { ColorButtonDemos } from '../color-button-demos'
import { StateDemos } from '../state-demos'
import { CalendarDemo } from '../calendar-demo'
import { DeferredPreview } from '../deferred-preview'
import { AdvancedTableDemo } from '../blocks/advanced-table-demo'
import { PasswordDemo } from '../blocks/password-demo'
import { ParallelStepperDemo } from '../blocks/parallel-stepper-demo'
import { PdfUploadDemo } from '../blocks/pdf-upload-demo'
import { DetailDemo } from '../detail-demo'

const tabs = [
  { value: 'all', label: 'All components' },
  { value: 'blocks', label: 'Advanced blocks' },
  { value: 'foundations', label: 'Foundations' },
  { value: 'inputs', label: 'Form & inputs' },
  { value: 'dates', label: 'Date & time' },
  { value: 'data', label: 'Data display' },
  { value: 'async', label: 'Async & API' },
  { value: 'files', label: 'Files & tree' },
  { value: 'workflow', label: 'Workflow & theme' },
  { value: 'feedback', label: 'Feedback & overlays' },
]

export function ComponentsPage() {
  const { t: tr } = useI18n()

  const [params, setParams] = useSearchParams()
  const requested = params.get('category') ?? 'all'
  const category = tabs.some((tab) => tab.value === requested) ? requested : 'all'
  const show = (value: string) => category === 'all' || category === value
  return (
    <div className="components-page page-enter">
      <div className="kit-breadcrumb">
        <span>{tr('Developer workspace')}</span>
        <span>/</span>
        <strong>{tr('UI Components')}</strong>
      </div>
      <div className="kit-hero">
        <div>
          <Badge variant="primary" appearance="outline">
            <Blocks size={11} />
            {tr('THE BUILDING BLOCKS')}
          </Badge>
          <h2>
            {tr('Less setup.')}
            <br />
            <span>{tr('More possibility.')}</span>
          </h2>
          <p>
            {tr('A considered collection of reusable components.')}
            <br />
            {tr('Made to fit your next idea, and the one after that.')}
          </p>
          <div className="kit-features">
            <span>
              <Box size={13} />
              {tr('40+ components')}
            </span>
            <span>
              <Code2 size={13} />
              {tr('TypeScript')}
            </span>
            <span>
              <Layers3 size={13} />
              {tr('Composable by design')}
            </span>
          </div>
        </div>
        <div className="kit-hero-art" aria-hidden="true">
          <div className="kit-orbit kit-orbit--one" />
          <div className="kit-orbit kit-orbit--two" />
          <div className="kit-floating-card kit-floating-card--one">
            <span />
            <span />
            <span />
          </div>
          <div className="kit-main-block">
            <Blocks size={43} strokeWidth={1.2} />
          </div>
          <div className="kit-floating-card kit-floating-card--two">
            <i />
            <span />
          </div>
          <span className="kit-spark kit-spark--one">✦</span>
          <span className="kit-spark kit-spark--two">+</span>
          <span className="kit-art-label">{tr('Small pieces. Better together.')}</span>
        </div>
      </div>
      <div className="kit-navigation">
        <Tabs
          value={category}
          onChange={(value) => setParams(value === 'all' ? {} : { category: value })}
          items={tabs}
          label={tr('Component categories')}
        />
        <a href="#getting-started">
          {tr('Getting started')}
          <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="kit-section-heading">
        <div>
          <h3>{tr(tabs.find((tab) => tab.value === category)?.label ?? 'All components')}</h3>
          <p>{tr('Try a component. Peek at the code. Make it yours.')}</p>
        </div>
        <span>
          <span />
          {tr('Live playground')}
        </span>
      </div>
      <div className="demo-grid">
        {show('foundations') && <FoundationDemos />}
        {show('foundations') && <ColorButtonDemos />}
        {show('inputs') && <InputDemos />}
        {show('inputs') && <AdvancedInputDemos />}
        {(show('inputs') || category === 'blocks') && <PasswordDemo />}
        {show('dates') && <DateDemos />}
        {show('dates') && (
          <DeferredPreview>
            <CalendarDemo />
          </DeferredPreview>
        )}
        {show('data') && <TableDemo />}
        {(show('data') || category === 'blocks') && <DetailDemo />}
        {(show('data') || category === 'blocks') && <AdvancedTableDemo />}
        {show('async') && (
          <DeferredPreview>
            <AsyncDemos />
          </DeferredPreview>
        )}
        {show('files') && (
          <DeferredPreview>
            <FileTreeDemos />
          </DeferredPreview>
        )}
        {show('workflow') && <WorkflowDemos />}
        {(show('workflow') || category === 'blocks') && <ParallelStepperDemo />}
        {(show('files') || category === 'blocks') && (
          <DeferredPreview>
            <PdfUploadDemo />
          </DeferredPreview>
        )}
        {show('feedback') && (
          <>
            <DrawerDemo />
            <CommandDemo />
            <FeedbackDemos />
            <StateDemos />
          </>
        )}
      </div>
      <section className="kit-getting-started" id="getting-started">
        <span className="kit-start-icon">
          <Code2 size={24} />
        </span>
        <div>
          <h3>{tr('A familiar starting point.')}</h3>
          <p>{tr('Import what you need. Pass your data. Keep your business logic separate.')}</p>
          <code>import {'{ Button, Input, Drawer, DataTable }'} from '@/template/ui'</code>
          <small>
            {tr('Copy') + ' '}
            <strong>{tr('src/template/')}</strong>
            {' ' + tr('into your project and import')} <strong>{tr('template/styles.css')}</strong>
            {tr('. Components, hooks, layouts, and theme tokens travel together.')}
          </small>
        </div>
        <span className="kit-start-star">✦</span>
      </section>
      <footer className="kit-footer">
        <span>{tr('Thoughtful defaults. Room to make it your own.')}</span>
        <span>{tr('Aria UI · v1.0')}</span>
      </footer>
    </div>
  )
}
