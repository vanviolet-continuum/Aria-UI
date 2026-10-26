import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight, FileText, Layers3, PanelRightOpen } from 'lucide-react'
import { Badge, Button, DetailList, DetailSection, DetailView, Drawer } from '@/template/ui'
import { useI18n } from '@/template/i18n'
import { DemoCard } from './demo-card'
import './styles/details.css'

function WorkspaceDetailPreview() {
  const { t: tr } = useI18n()
  return (
    <DetailView
      title="Aria Studio"
      eyebrow={tr('Workspace details')}
      avatar={<Layers3 size={25} />}
      badge={
        <Badge variant="success" dot>
          {tr('Active')}
        </Badge>
      }
      description={tr('A shared space for good ideas and the people behind them.')}
    >
      <DetailSection title={tr('Overview')} icon={<FileText size={15} />}>
        <DetailList
          items={[
            { id: 'owner', label: tr('Owner'), value: 'Nadia Putri' },
            { id: 'plan', label: tr('Plan'), value: 'Professional' },
            {
              id: 'email',
              label: tr('Email address'),
              value: <a href="mailto:hello@example.com">hello@example.com</a>,
            },
            { id: 'members', label: tr('Team members'), value: 8 },
          ]}
        />
      </DetailSection>
    </DetailView>
  )
}

export function DetailDemo() {
  const { t: tr } = useI18n()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <>
      <DemoCard
        full
        title={tr('Detail view')}
        description={tr(
          'A clear hierarchy for every record. At home on a page or inside a drawer.',
        )}
        code={`import { DetailView, DetailSection, DetailList, Drawer } from '@/template/ui'\n\nfunction RecordDetails() {\n  return (\n    <DetailView title={record.name} badge={<Badge>Active</Badge>}>\n      <DetailSection title="Overview">\n        <DetailList items={[\n          { id: 'email', label: 'Email', value: record.email },\n          { id: 'owner', label: 'Owner', value: record.owner },\n        ]} />\n      </DetailSection>\n    </DetailView>\n  )\n}\n\n// Page\n<RecordDetails />\n\n// Drawer — the same content adapts to the available width\n<Drawer open={open} onOpenChange={setOpen} title="Record details">\n  <RecordDetails />\n</Drawer>`}
      >
        <WorkspaceDetailPreview />
        <div className="details-demo-actions">
          <Button variant="contained" onClick={() => setOpen(true)}>
            <PanelRightOpen size={14} />
            {tr('Open in drawer')}
          </Button>
          <Button onClick={() => navigate('/details')}>
            {tr('View full page')}
            <ArrowUpRight size={14} />
          </Button>
        </div>
      </DemoCard>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title={tr('Workspace details')}
        size="lg"
        footer={<Button onClick={() => setOpen(false)}>{tr('Close')}</Button>}
      >
        <WorkspaceDetailPreview />
      </Drawer>
    </>
  )
}
